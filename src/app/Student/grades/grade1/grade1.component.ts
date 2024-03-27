import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-grade1',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink,
    RouterModule],
  templateUrl: './grade1.component.html',
  styleUrl: './grade1.component.css'
})
export class Grade1Component {
  items = [
    { imageUrl: 'assets/images/Arabic.jpeg', text: 'Arabic' },
    { imageUrl: 'assets/images/Math.jpeg', text: 'Math' },
    { imageUrl: 'assets/images/SCience.jpeg', text: 'Science' },
    { imageUrl: 'assets/images/English.jpeg', text: 'English' },
    { imageUrl: 'assets/images/History.jpeg', text: 'History' },
    { imageUrl: 'assets/images/Computer.jpeg', text: 'Computer' },

  ];

  constructor() { }

  ngOnInit(): void {
  }
}
