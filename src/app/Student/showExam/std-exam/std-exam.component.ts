import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CourseibrahemService } from '../../../../Service/courseibrahem.service';
import { CourseService } from '../../../../Service/course.service';
import { QuizService } from '../../../../Service/quiz.service';
import { QuestionService } from '../../../../Service/question.service';

@Component({
  selector: 'app-std-exam',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [QuizService,QuestionService],
  templateUrl: './std-exam.component.html',
  styleUrl: './std-exam.component.css',
})
export class StdExamComponent implements OnInit {
  
  getAnswer(event: any) {
    let value = event.value;

    console.log(event);
  }

  myForm = new FormGroup({
    answer: new FormControl(null, [Validators.required]),
  });

  // ID = 0;
  // selectedAnswers: any;
  // student: any[] = [];
  // std: any;
  username = '';
  // oneExam: any;

  //questionIndex: any;

  quiz_ID : any;
  Questions : any;
  quiz:any;

  constructor(
    private QuizService: QuizService , private QuestionService: QuestionService,
    private router: Router,
    Active: ActivatedRoute
  ) {
    this.quiz_ID = Active.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.QuizService.getQuizByID(this.quiz_ID).subscribe({
      next:(data)=>{
        this.quiz = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })
  
    this.QuestionService.getQuestionByQuizID(this.quiz_ID).subscribe({
      next:(data)=>{
        this.Questions = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })

    
   }

  Submit() {
    // const data = {
    //   StdAnswer: this.myForm.value.answer,
    //   Stdname: this.username,
    //   Stdid: this.std.id,
    //   //question id?
    // };
    // this.myservice.addstudentanswer(data).subscribe({
    //   next: (data) => {
    //     window.location.reload();
    //   },
    //   error: (err) => {
    //     window.alert('sorry there is an error when add: ');
    //   },
    // });

    // this.router.navigate(['/send']);
    // this.std = this.student.find((s) => s.username === this.username);
  }
  checkanswers() {
    return this.myForm.controls['answer'].valid;
  }
}
