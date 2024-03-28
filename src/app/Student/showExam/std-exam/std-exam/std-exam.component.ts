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
import { StudentService } from '../../../../../Service/student.service';
import { StudentQuizService } from '../../../../../Service/student-quiz.service';
//import { CourseibrahemService } from '../../../../Service/courseibrahem.service';
//import { CourseService } from '../../../../Service/course.service';

@Component({
  selector: 'app-std-exam',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [QuestionService, QuizService,StudentQuizService,StudentService],
  templateUrl: './std-exam.component.html',
  styleUrl: './std-exam.component.css',
})
export class StdExamComponent implements OnInit {

  
  studentid: any;
  student: any;
  quiz: any;
  @Input() examid: any;
  Questions: any;

  constructor(
    private QuizService: QuizService,
    private QuestionService: QuestionService,
    private StudentQuizService: StudentQuizService,
    private StudentService: StudentService,
    private router: Router,
    Actived: ActivatedRoute
  ) {
    this.examid = Actived.snapshot.params['id'];
    this.grade = 0;
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

    this.StudentService.getStudentByID(this.studentid).subscribe({
      next: (data) => {
        this.student = data;
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

  answers_user: { Questionid: any; iscorrect: any }[] = [];
  grade = 0;

  // getAnswer(event: any) {
  //   let value = event.value;
  //   //console.log(event);
  // }

  onChange(Questionid: any, iscorrect: any) {
    this.answers_user.forEach((answer) => {
      if (answer.Questionid == Questionid) {
        answer.iscorrect = iscorrect;
      }
    });

    this.answers_user.push({ Questionid: Questionid, iscorrect: iscorrect });
  }

  Submit() {
    this.answers_user.forEach((answer) => {
      if (answer.iscorrect) {
        this.grade++;
      }
    });

    var StudentQuiz = {
      Student_ID: this.studentid,
      Quiz_ID: this.examid,
      Grade: this.grade,
    };

    this.StudentQuizService.AddNewStudentQuiz(StudentQuiz).subscribe({
      next: (data) => {
        window.alert(
          'grade : ' +
          this.grade
        );
        //this.router.navigate(['/send/'+this.grade]);
      },
      error: (err) => {
        window.alert('sorry there is an error when add: ');
      },
    });
  }

  myForm = new FormGroup({
    //answer: new FormControl(null, [Validators.required]),
  });

  // ID = 0;
  // selectedAnswers: any;
  // student: any[] = [];
  // std: any;
  //username = '';
  // oneExam: any;

  // constructor(
  //   private myservice: CourseibrahemService,
  //   private router: Router,
  //   Active: ActivatedRoute
  // ) {
  //   this.ID = Active.snapshot.params['id'];
  // }
  // ngOnInit(): void {
  //   this.myservice.getstudent_quiz().subscribe({
  //     next: (data: any) => (this.student = data),
  //     error: (err) => console.log(err),
  //   });

  //   this.myservice.getExambyid(this.ID).subscribe({
  //     next: (data) => (this.oneExam = data),
  //     error: (err) => console.log(err),
  //   });
  // }

  // Submit() {
  //   // const data = {
  //   //   StdAnswer: this.myForm.value.answer,
  //   //   Stdname: this.username,
  //   //   Stdid: this.std.id,
  //   //   //question id?
  //   // };
  //   // this.myservice.addstudentanswer(data).subscribe({
  //   //   next: (data) => {
  //   //     window.location.reload();
  //   //   },
  //   //   error: (err) => {
  //   //     window.alert('sorry there is an error when add: ');
  //   //   },
  //   // });
  //   // this.router.navigate(['/send']);
  //   // this.std = this.student.find((s) => s.username === this.username);
  // }
  // checkanswers() {
  //   return this.myForm.controls['answer'].valid;
  // }
}
