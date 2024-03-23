import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './Home/home/home.component';
import { ErrorComponent } from './error/error.component';
import { Grade1Component } from './Student/grades/grade1/grade1.component';
import { Grade2Component } from './Student/grades/grade2/grade2.component';
import { Grade3Component } from './Student/grades/grade3/grade3.component';
import { AllCoursesComponent } from './Instructor/creategroup/all-courses/all-courses.component';

import { CourseselectedComponent } from './Student/courseselected/courseselected/courseselected.component';
import { ExamPageComponent } from './Student/showExam/std-exam/exam-page/exam-page.component';
import { choosegradeComponent } from './Student/grades/choocegrade/chooseinstructor.component';
import { ChooseinstructorComponent } from './Student/chooseinstructor/chooseinstructor.component';
import { ProfileComponent } from './Instructor/Profile/profile/profile.component';
import { StepsCreateComponent } from './Instructor/Profile/steps-create/steps-create.component';
import { InstgroupsComponent } from './Instructor/instgroups/instgroups.component';
import { CreateexamComponent } from './Instructor/createExam/createexam/createexam.component';
import { AddGroupComponent } from './Instructor/creategroup/add-group/add-group.component';

export const routes: Routes = [
    {path:"",redirectTo:"Home",pathMatch:"full"},
    {path:"Home",component:HomeComponent},
    {path:"Login",component:LoginComponent},
    {path:"Register",component:RegisterComponent},
    {path:"grade1",component:Grade1Component},
    {path:"grade2",component:Grade2Component},
    {path:"grade3",component:Grade3Component},
    {path:"choocegrade",component:choosegradeComponent},
    {path:"chooseinstructor",component:ChooseinstructorComponent},
    {path:"courseselected",component:CourseselectedComponent},
    {path:"Exam",component:ExamPageComponent},
    {path:"profile",component:ProfileComponent},
    {path:"stepscreate",component:StepsCreateComponent},
    {path:"MYGroup",component:InstgroupsComponent},
    {path:"createExam",component:CreateexamComponent},
    {path:"createGroup",component:AddGroupComponent},


    {path:"**",component:ErrorComponent}

];
