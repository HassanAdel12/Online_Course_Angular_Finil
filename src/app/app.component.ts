import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InstgroupsComponent } from './Instructor/instgroups/instgroups.component';
import { ProfileComponent } from './Instructor/Profile/profile/profile.component';
import { CreateexamComponent } from './Instructor/createExam/createexam/createexam.component';
import { InstructorComponent } from './Student/Component/instructors/instructors.component';
import { CourseselectedComponent } from './Student/courseselected/courseselected/courseselected.component';
import { MainComponent } from './Student/courseselected/main/main.component';
import { MainUComponent } from './Student/courseselected/main-u/main-u.component';
import { ExamPageComponent } from './Student/showExam/std-exam/exam-page/exam-page.component';
import { StdExamComponent } from './Student/showExam/std-exam/std-exam.component';
import { SendComponent } from './Student/showExam/std-exam/send/send.component';
import { StdExamEnrollComponent } from './Student/showExam/std-exam/std-exam-enroll/std-exam-enroll.component';
import { DashBoardGradeOneComponent } from './Instructor/creategroup/dash-board-grade-one/dash-board-grade-one.component';
import { DashBoardGradeTwoComponent } from './Instructor/creategroup/dash-board-grade-two/dash-board-grade-two.component';
import { DashBoardGradeThreeComponent } from './Instructor/creategroup/dash-board-grade-three/dash-board-grade-three.component';

import { AddGroupComponent } from './Instructor/creategroup/add-group/add-group.component';

import { StepsCreateComponent } from './Instructor/Profile/steps-create/steps-create.component';
import { choosegradeComponent } from './Student/grades/choocegrade/chooseinstructor.component';
import { AllCoursesComponent } from './Instructor/creategroup/all-courses/all-courses.component';
import { ChooseinstructorComponent } from './Student/grades/chooseinstructor/chooseinstructor.component';




@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet,
  //   HeaderComponent,
  //   FooterComponent,
  //   ProfileComponent
  //   ,InstgroupsComponent,
  //   CreateexamComponent,InstructorComponent,
  //   CourseselectedComponent,MainComponent,MainUComponent,ExamPageComponent,
  //   StdExamComponent,SendComponent,StdExamEnrollComponent,DashBoardGradeOneComponent,DashBoardGradeTwoComponent,
  //   DashBoardGradeThreeComponent,Grade1Component,Grade2Component,Grade3Component,AddGroupComponent
  //   ,StepsCreateComponent,choosegradeComponent,AllCoursesComponent,ChooseinstructorComponent
  // ],
  imports: [
    HeaderComponent,FooterComponent,RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: any;

}
