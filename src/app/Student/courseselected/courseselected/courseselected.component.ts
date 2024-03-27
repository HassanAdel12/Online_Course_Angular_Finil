import { Component } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';


import { CourseibrahemService } from '../../../../Service/courseibrahem.service';
import { RouterLink, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MainUComponent } from '../main-u/main-u.component';




@Component({
  selector: 'app-courseselected',
  standalone: true,
  imports: [
 MainComponent,
 HttpClientModule,
 RouterLink,
 RouterModule,MainUComponent
    
  ],
  providers:[
CourseibrahemService
  ],
  templateUrl: './courseselected.component.html',
  styleUrl: './courseselected.component.css'
})
export class CourseselectedComponent {
  course_name:any
constructor(private myservec:CourseibrahemService){}
ngOnInit():void
{
  this.myservec.getcourses().subscribe(
    {
      next:(data)=>this.course_name=data,
      error:(err)=>console.log(err)
    }
  )
}
}
