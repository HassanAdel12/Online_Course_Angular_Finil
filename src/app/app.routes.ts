import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { ErrorComponent } from './error/error.component';

import { AllCoursesComponent } from './Instructor/creategroup/all-courses/all-courses.component';

import { CourseselectedComponent } from './Student/courseselected/courseselected/courseselected.component';
import { ExamPageComponent } from './Student/showExam/std-exam/exam-page/exam-page.component';
import { choosegradeComponent } from './Student/grades/choocegrade/chooseinstructor.component';
import { ChooseinstructorComponent } from './Student/grades/chooseinstructor/chooseinstructor.component';
import { ProfileComponent } from './Instructor/Profile/profile/profile.component';
import { StepsCreateComponent } from './Instructor/Profile/steps-create/steps-create.component';
import { InstgroupsComponent } from './Instructor/instgroups/instgroups.component';
import { CreateexamComponent } from './Instructor/createExam/createexam/createexam.component';
import { AddGroupComponent } from './Instructor/creategroup/add-group/add-group.component';
import { DashBoardGradeOneComponent } from './Instructor/creategroup/dash-board-grade-one/dash-board-grade-one.component';
import { DashBoardGradeTwoComponent } from './Instructor/creategroup/dash-board-grade-two/dash-board-grade-two.component';
import { DashBoardGradeThreeComponent } from './Instructor/creategroup/dash-board-grade-three/dash-board-grade-three.component';
import { GradeComponent } from './Student/grades/grade/grade.component';
import { StdExamComponent } from './Student/showExam/std-exam/std-exam.component';

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
    {path:"profile",component:ProfileComponent},
    {path:"stepscreate",component:StepsCreateComponent},
    {path:"MYGroup",component:InstgroupsComponent},
    {path:"createExam",component:CreateexamComponent},
    {path:"createGroup",component:AddGroupComponent},
    {path:"First",component:DashBoardGradeOneComponent},
    {path:"Second",component:DashBoardGradeTwoComponent},
    {path:"Third",component:DashBoardGradeThreeComponent},

    {path:"**",component:ErrorComponent}

];
