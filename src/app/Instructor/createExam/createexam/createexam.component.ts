import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { QuizService } from '../../../../Service/quiz.service';
import { QuestionService } from '../../../../Service/question.service';
import { ChoiseService } from '../../../../Service/choise.service';

interface Question {
  question: string;
  options: { option: string; selected: boolean }[];
}

interface Exam {
  name: string;
  questions: Question[];
}

@Component({
  selector: 'app-createexam',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink,
    RouterModule],
  templateUrl: './createexam.component.html',
  styleUrl: './createexam.component.css'
})
export class CreateexamComponent {


  instructor_ID = 1;
  course_ID = 1;



  examSaved: boolean = false;
  exam: Exam = {
    name: '',
    questions: [
      {
        question: "",
        options: [
          { option: "", selected: false },
          { option: "", selected: false },
          { option: "", selected: false },
          { option: "", selected: false }
        ]
      }
    ]
  };

  constructor(private readonly QuizService : QuizService ,
    private readonly QuestionService : QuestionService ,
    private readonly ChoiseService : ChoiseService , 
    private router : Router){ }

  addQuestion() {
    const id = this.exam.questions.length + 1;
    this.exam.questions.push({
      question: '',
      options: [
        { option: '', selected: false },
        { option: '', selected: false },
        { option: '', selected: false },
        { option: '', selected: false }
      ]
    });
  }


  deleteQuestion(index: number) {
    this.exam.questions.splice(index, 1);
  }


  saveExam() {
    
    //console.log('Saving exam:', this.exam);

    var examIndex : any;
    var questionIndex : any;
    var optionIndex : any;

    var myExam = {
      quiz_Name : this.exam.name,
      instructor_ID : this.instructor_ID,
      course_ID : this.course_ID
    } 
    this.QuizService.AddNewQuiz(myExam).subscribe({
        next:(data)=>{
          examIndex = data;
        },
        error:(err)=>{
          this.router.navigate(['/Error',{errormessage : err.message as string}]);
        }
      }
    );

    this.exam.questions.forEach(question => {

      var myquestion = {
        question_Text : question.question,
        quiz_ID : examIndex
      } 
      this.QuestionService.AddNewQuestion(myquestion).subscribe({
          next:(data)=>{
            questionIndex = data;
          },
          error:(err)=>{
            this.router.navigate(['/Error',{errormessage : err.message as string}]);
          }
        }
      );


      this.exam.questions[questionIndex].options.forEach(option => {

        var myoption = {
          text : option.option,
          isCorrect : option.selected,
          question_ID : questionIndex
        } 
        
        this.QuestionService.AddNewQuestion(myoption).subscribe({
            next:(data)=>{
              optionIndex = data;
            },
            error:(err)=>{
              this.router.navigate(['/Error',{errormessage : err.message as string}]);
            }
          }
        );
      
      
      });
      
    });

    this.exam.questions = [];

    this.examSaved = true;
    
    setTimeout(() => {
      this.examSaved = false;
    }, 3000);
  }


  addOption(questionIndex: number) {
    this.exam.questions[questionIndex].options.push({ option: '', selected: false });
  }
  
  deleteOption(questionIndex: number, optionIndex: number) {
    this.exam.questions[questionIndex].options.splice(optionIndex, 1);
  }

  CheckOption(questionIndex: number, optionIndex: number){

    this.exam.questions[questionIndex].options.forEach(option => {
      option.selected = false;
    });
    
    this.exam.questions[questionIndex].options[optionIndex].selected = true;
  }
  
  getTotalQuestions(): number {
    return this.exam.questions.length;
  }
  
  getTotalOptions(questionIndex: number): number {
    return this.exam.questions[questionIndex].options.length;
  }
}
