import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { CourseibrahemService } from '../../../../Service/courseibrahem.service';
<<<<<<< HEAD
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { GroupService } from '../../../../Service/group.service';
=======
import { RouterLink, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MainUComponent } from '../main-u/main-u.component';



>>>>>>> eb2f1d6c64c92adf45258da95a56dc16adfe388e

@Component({
  selector: 'app-courseselected',
  standalone: true,
  imports: [
<<<<<<< HEAD
    MainComponent,
    MainUComponent,
    HttpClientModule,
    RouterLink,
    RouterModule,
=======
 MainComponent,
 HttpClientModule,
 RouterLink,
 RouterModule,MainUComponent
    
  ],
  providers:[
CourseibrahemService
>>>>>>> eb2f1d6c64c92adf45258da95a56dc16adfe388e
  ],
  providers: [GroupService],
  templateUrl: './courseselected.component.html',
  styleUrl: './courseselected.component.css',
})
export class CourseselectedComponent {
  id: any;
  constructor(
    private router: Router , private Actived : ActivatedRoute){ 
   this.id = this.Actived.snapshot.params["id"];
 }

}
