import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { ErrorComponent } from './error/error.component';

import { AllCoursesComponent } from './Instructor/creategroup/all-courses/all-courses.component';

import { CourseselectedComponent } from './Student/courseselected/courseselected/courseselected.component';
//import { ExamPageComponent } from './Student/showExam/exam-page/exam-page.component';
import { choosegradeComponent } from './Student/grades/choocegrade/chooseinstructor.component';
import { ChooseinstructorComponent } from './Student/grades/chooseinstructor/chooseinstructor.component';
import { ProfileComponent } from './Instructor/Profile/profile/profile.component';
import { InstgroupsComponent } from './Instructor/instgroups/instgroups.component';
import { CreateexamComponent } from './Instructor/createExam/createexam/createexam.component';
import { AddGroupComponent } from './Instructor/creategroup/add-group/add-group.component';
import { DashBoardGradeOneComponent } from './Instructor/creategroup/dash-board-grade/dash-board-grade.component';
//import { DashBoardGradeTwoComponent } from './Instructor/creategroup/dash-board-grade-two/dash-board-grade-two.component';
//import { DashBoardGradeThreeComponent } from './Instructor/creategroup/dash-board-grade-three/dash-board-grade-three.component';
import { GradeComponent } from './Student/grades/grade/grade.component';
import { ExamPageComponent } from './Student/showExam/std-exam/exam-page/exam-page.component';
import { StdExamComponent } from './Student/showExam/std-exam/std-exam/std-exam.component';
import { SesstionAndVidosComponent } from './Student/courseselected/sesstion-and-vidos/sesstion-and-vidos.component';
import { InstructordashboardComponent } from './Instructor/instructorfinalDashboard/instructordashboard/instructordashboard.component';
<<<<<<< HEAD
import { TermsAndAdvicesComponent } from './Instructor/Profile/Terms and Advices/terms-and-advices/terms-and-advices.component';
import { InstructorDataComponent } from './Instructor/Profile/instructor-data/instructor-data.component';
import { InstructordatatwoComponent } from './Instructor/Profile/instructor-data/instructordatatwo/instructordatatwo.component';
import { InstructorDateHeaderComponent } from './Instructor/Profile/instructor-data/instructor-date-header/instructor-date-header.component';
=======
import { CreatesessionComponent } from './Instructor/createsession/createsession.component';
import { SendComponent } from './Student/showExam/std-exam/send/send.component';
>>>>>>> e878750e79482c1c0f8af6a1b0dc94bd551f97a8
//import { StdExamComponent } from './Student/showExam/std-exam/std-exam.component';

export const routes: Routes = [
    {path:"",redirectTo:"Home",pathMatch:"full"},
    {path:"Home",component:HomeComponent},
    {path:"Login",component:LoginComponent},
    {path:"Register",component:RegisterComponent},
    {path:"grade/:id",component:GradeComponent},

    {path:"choocegrade",component:choosegradeComponent},
    {path:"chooseinstructor/:id",component:ChooseinstructorComponent},
    {path:"courseselected/:id",component:CourseselectedComponent},
    {path:"Exam/:id",component:ExamPageComponent},
    {path:"StdExam/:id",component:StdExamComponent},
    {path:"SesstionAndVidos/:id",component:SesstionAndVidosComponent},
    {path:"Send/:id",component:SendComponent},

    {path:"Instructordashboard",component : InstructordashboardComponent},
    {path:"profile",component:ProfileComponent},
<<<<<<< HEAD
    {path:"stepscreate",component:InstructorDateHeaderComponent},
    {path:"step1",component:InstructorDataComponent},
    {path:"step2",component:InstructordatatwoComponent},
    {path:"step3",component:TermsAndAdvicesComponent},
=======
    {path:"Createsession",component : CreatesessionComponent},
    // {path:"stepscreate",component:InstructorDateHeaderComponent},
    // {path:"step1",component:InstructorDataComponent},
    // {path:"step2",component:InstructordatatwoComponent},
    // {path:"step3",component:TermsAndAdvicesComponent},
>>>>>>> e878750e79482c1c0f8af6a1b0dc94bd551f97a8
    {path:"MYGroup",component:InstgroupsComponent},
    {path:"createExam",component:CreateexamComponent},
    {path:"createGroup",component:AddGroupComponent},
    {path:"Dashboard",component:InstructordashboardComponent},
    {path:"First",component:DashBoardGradeOneComponent},
   

    {path:"**",component:ErrorComponent}

];
