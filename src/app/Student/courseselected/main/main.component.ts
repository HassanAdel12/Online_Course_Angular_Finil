<<<<<<< HEAD
import { Component, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
=======
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
>>>>>>> eb2f1d6c64c92adf45258da95a56dc16adfe388e
import { CourseibrahemService } from '../../../../Service/courseibrahem.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink,HttpClientModule,CommonModule,FormsModule],
  providers:[CourseibrahemService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() Groupid: any;
  id=0;
course:any


constructor(myActivat:ActivatedRoute, private myservic:CourseibrahemService){
this.id=myActivat.snapshot.params["id"];
}
  ngOnInit():void
  {


  this.myservic.getcoursebyid(this.id).subscribe(
    {
      next:(data:any)=>this.course=data,
     
      error:(err)=>console.log(err)
    }
  )
  }
  
  

}
