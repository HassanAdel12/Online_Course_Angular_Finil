import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './grade2.component.html',
  styleUrl: './grade2.component.css'
})
export class Grade2Component {
  items = [
    { imageUrl: 'assets/images/Arabic.jpeg', text: 'Small Word 1' },
    { imageUrl: 'assets/images/Math.jpeg', text: 'Small Word 2' },
    { imageUrl: 'assets/images/SCience.jpeg', text: 'Small Word 3' },
    { imageUrl: 'assets/images/English.jpeg', text: 'Small Word 3' },
    { imageUrl: 'assets/images/History.jpeg', text: 'Small Word 3' },
    { imageUrl: 'assets/images/Computer.jpeg', text: 'Small Word 3' },

  ];

  constructor() { }

  ngOnInit(): void {
  }
}
