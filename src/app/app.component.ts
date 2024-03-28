import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";


<<<<<<< HEAD
=======
//import { ExamPageComponent } from './Student/showExam/exam-page/exam-page.component';
//import { StdExamComponent } from './Student/showExam/std-exam/std-exam.component';

import { DashBoardGradeOneComponent } from './Instructor/creategroup/dash-board-grade/dash-board-grade.component';
//import { DashBoardGradeTwoComponent } from './Instructor/creategroup/dash-board-grade-two/dash-board-grade-two.component';
//import { DashBoardGradeThreeComponent } from './Instructor/creategroup/dash-board-grade-three/dash-board-grade-three.component';

import { AddGroupComponent } from './Instructor/creategroup/add-group/add-group.component';
import { choosegradeComponent } from './Student/grades/choocegrade/chooseinstructor.component';
import { AllCoursesComponent } from './Instructor/creategroup/all-courses/all-courses.component';
import { ChooseinstructorComponent } from './Student/grades/chooseinstructor/chooseinstructor.component';

>>>>>>> 73646067df807fd8bf2a1f25efd624b2de13fd26



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,FooterComponent,RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: any;

}
