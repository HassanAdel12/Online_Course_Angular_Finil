import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { GradeService } from '../../../../Service/grade.service';

@Component({
  selector: 'app-chooseinstructor',
  standalone: true,
  imports: [ RouterLink,
    RouterModule],
  templateUrl: './choocegrade.component.html',
  styleUrl: './choocegrade.component.css'
})
export class choosegradeComponent {

  Grades:any;

  constructor(private readonly GradeService : GradeService , private router: Router){ }

  ngOnInit(): void {

    this.GradeService.getAllGrades().subscribe({
      next:(data)=>{
        this.Grades = data;
      },
      error:(err)=>{
        this.router.navigate(['/Error',{errormessage : err.message as string}]);
      }
    })

  }
  
}
