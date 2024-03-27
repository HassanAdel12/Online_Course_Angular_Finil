import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-chooseinstructor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,
    RouterModule],
  templateUrl: './chooseinstructor.component.html',
  styleUrl: './chooseinstructor.component.css'
})
export class ChooseinstructorComponent {

  items: any[] = [
    {
      photo: 'assets/images/teacher1.jpeg',
      alt: 'Photo 1',
      description: ' MR/Mohamed AbdElhamid ',
      button1: { label: ' Enroll', clicked: false },
      button2: { label: ' Details', clicked: false }
    },
    {
      photo: 'assets/images/teacher1.jpeg',
      alt: 'Photo 1',
      description: ' MR/Mohamed AbdElhamid ',
      button1: { label: ' Enroll', clicked: false },
      button2: { label: ' Details', clicked: false }
    }
  ];

  constructor() { }

  

  ngOnInit(): void {
  }

  


}
