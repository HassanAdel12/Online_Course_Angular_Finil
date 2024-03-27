import { Component, Input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CourseibrahemService } from '../../../../Service/courseibrahem.service';

@Component({
  selector: 'app-main-u',
  standalone: true,
  imports: [
    RouterLink,HttpClientModule
  ],
  providers:[CourseibrahemService],
  templateUrl: './main-u.component.html',
  styleUrl: './main-u.component.css'
})
export class MainUComponent {
@Input() courses:any;


}



