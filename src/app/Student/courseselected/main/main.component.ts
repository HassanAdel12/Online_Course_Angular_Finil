import { Component, Input, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseibrahemService } from '../../../../Service/courseibrahem.service';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
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
    next:(data)=>this.course=data
  }
)
}

}
