import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-try-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './try-one.component.html',
  styleUrls: ['./try-one.component.scss'],
})
export class TryOneComponent {
  items = [0, 0];

  onChange(index: number, value: number): void {
    this.items[index] = value;
    // this.items = [...this.items]
    console.debug(this.items);
  }
}
