import { Component, Input, signal } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GroupService } from '../../../../Service/group.service';
import { SessionService } from '../../../../Service/session.service';
=======
import { ActivatedRoute, RouterLink } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CourseibrahemService } from '../../../../Service/courseibrahem.service';
>>>>>>> eb2f1d6c64c92adf45258da95a56dc16adfe388e

@Component({
  selector: 'app-main-u',
  standalone: true,
  imports: [
    RouterLink,HttpClientModule
  ],
<<<<<<< HEAD
  providers:[GroupService,SessionService],
=======
  providers:[CourseibrahemService],
>>>>>>> eb2f1d6c64c92adf45258da95a56dc16adfe388e
  templateUrl: './main-u.component.html',
  styleUrl: './main-u.component.css'
})
export class MainUComponent {

  Group : any;
  @Input() Groupid: any;
  Sessions :any;

  constructor(private GroupService:GroupService ,private SessionService:SessionService ,
    private router: Router){ 

 }

  

 ngOnInit(): void {

  this.GroupService.getGroupByID(this.Groupid).subscribe({
    next:(data)=>{
      this.Group = data;
    },
    error:(err)=>{
      this.router.navigate(['/Error',{errormessage : err.message as string}]);
    }
  })

  this.SessionService.getSessionByGroupID(this.Groupid).subscribe({
    next:(data)=>{
      this.Sessions = data;
    },
    error:(err)=>{
      this.router.navigate(['/Error',{errormessage : err.message as string}]);
    }
  })
 }

}



