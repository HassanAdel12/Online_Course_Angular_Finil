import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InstgroupsComponent } from './Instructor/instgroups/instgroups.component';
import { ProfileComponent } from './Instructor/Profile/profile/profile.component';
import { CreateexamComponent } from './Instructor/createExam/createexam/createexam.component';
import { InstructorComponent } from './Student/Component/instructors/instructors.component';
import { CourseselectedComponent } from './Student/courseselected/courseselected/courseselected.component';


import { ExamPageComponent } from './Student/showExam/std-exam/exam-page/exam-page.component';
import { StdExamComponent } from './Student/showExam/std-exam/std-exam.component';

import { DashBoardGradeOneComponent } from './Instructor/creategroup/dash-board-grade-one/dash-board-grade-one.component';
import { DashBoardGradeTwoComponent } from './Instructor/creategroup/dash-board-grade-two/dash-board-grade-two.component';
import { DashBoardGradeThreeComponent } from './Instructor/creategroup/dash-board-grade-three/dash-board-grade-three.component';
import { Grade1Component } from './Student/grades/grade1/grade1.component';
import { Grade2Component } from './Student/grades/grade2/grade2.component';
import { Grade3Component } from './Student/grades/grade3/grade3.component';
import { AddGroupComponent } from './Instructor/creategroup/add-group/add-group.component';
import { choosegradeComponent } from './Student/grades/choocegrade/chooseinstructor.component';
import { AllCoursesComponent } from './Instructor/creategroup/all-courses/all-courses.component';
import { ChooseinstructorComponent } from './Student/chooseinstructor/chooseinstructor.component';
import { MainUComponent } from './Student/courseselected/main-u/main-u.component';
import { MainComponent } from './Student/courseselected/main/main.component';
import { StdExamEnrollComponent } from './Student/showExam/std-exam/std-exam-enroll/std-exam-enroll.component';
import { SendComponent } from './Student/showExam/std-exam/send/send.component';
import { InstructorDateHeaderComponent } from './Instructor/Profile/instructor-data/instructor-date-header/instructor-date-header.component';
import { InstructorDataComponent } from './Instructor/Profile/instructor-data/instructor-data.component';
import { InstructordatatwoComponent } from './Instructor/Profile/instructor-data/instructordatatwo/instructordatatwo.component';
import { TermsAndAdvicesComponent } from './Instructor/Profile/Terms and Advices/terms-and-advices/terms-and-advices.component';
import { InstructordashboardComponent } from './Instructor/instructorfinalDashboard/instructordashboard/instructordashboard.component';
import { TestComponent } from './testfile/test/test.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ProfileComponent
    ,InstgroupsComponent,
    CreateexamComponent,InstructorComponent,
    CourseselectedComponent,MainComponent,MainUComponent,ExamPageComponent,
    StdExamComponent,SendComponent,StdExamEnrollComponent,DashBoardGradeOneComponent,DashBoardGradeTwoComponent,
    DashBoardGradeThreeComponent,Grade1Component,Grade2Component,Grade3Component,AddGroupComponent
    ,choosegradeComponent,AllCoursesComponent,ChooseinstructorComponent,choosegradeComponent,InstructorDateHeaderComponent,
    InstructorDataComponent,TestComponent,InstructordatatwoComponent,TermsAndAdvicesComponent,InstructordashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: any;

}
