import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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
import { CourseibrahemService } from '../../../../../Service/courseibrahem.service';
import { QuestionService } from '../../../../../Service/question.service';
import { QuizService } from '../../../../../Service/quiz.service';
//import { CourseibrahemService } from '../../../../Service/courseibrahem.service';
//import { CourseService } from '../../../../Service/course.service';

@Component({
  selector: 'app-std-exam',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [QuestionService, QuizService],
  templateUrl: './std-exam.component.html',
  styleUrl: './std-exam.component.css',
})
export class StdExamComponent implements OnInit {

  
  examid: any;
  quiz: any;
  Questions: any;

  constructor(
    private QuestionService: QuestionService,
    private QuizService: QuizService,
    private router: Router,
    private Actived: ActivatedRoute
  ) {
    this.examid = Actived.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.QuizService.getQuizByID(this.examid).subscribe({
      next: (data) => {
        this.quiz = data;
      },
      error: (err) => {
        this.router.navigate([
          '/Error',
          { errormessage: err.message as string },
        ]);
      },
    });

    this.QuestionService.getQuestionByQuizID(this.examid).subscribe({
      next: (data) => {
        this.Questions = data;
      },
      error: (err) => {
        this.router.navigate([
          '/Error',
          { errormessage: err.message as string },
        ]);
      },
    });
  }


  getAnswer(event: any) {
    
    let value = event.value;

    console.log(event);

  }



  myForm = new FormGroup({
    //answer: new FormControl(null, [Validators.required]),
  });


  //   ID=0;
  //   selectedAnswers:any
  //   student:any[]=[];
  //   std:any
  username = '';
  //  oneExam:any

  //  questionIndex:any

  // constructor( private myservice:CourseibrahemService,private router:Router,Active:ActivatedRoute)
  // {

  //   this.ID=Active.snapshot.params["id"]
  // }
  // ngOnInit():void
  // {

  //   this.myservice.getstudent_quiz().subscribe({
  //     next:(data:any)=>this.student=data,
  //     error:(err)=>console.log(err)
  //   })

  //   this.myservice.getExambyid(this.ID).subscribe({
  //     next:(data)=>this.oneExam=data,
  //     error:(err)=>console.log(err)
  //   })

  // }

  Submit() {
    //  const data={
    //   StdAnswer:this.myForm.value.answer,
    //   Stdname:this.username,
    //   Stdid:this.std.id,
    //   //question id?
    //  };
    //  this.myservice.addstudentanswer(data).subscribe({
    //   next:(data)=>{
    //     window.location.reload();
    //   },
    //   error:(err)=>{window.alert("sorry there is an error when add: ")}
    //  })
    //   this.router.navigate(['/send']);
    //   this.std = this.student.find(s=>s.username===this.username);
  }


  // checkanswers() {
  //   return this.myForm.controls['answer'].valid;
  // }
}
