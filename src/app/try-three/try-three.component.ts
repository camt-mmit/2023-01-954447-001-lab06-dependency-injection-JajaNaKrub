import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-try-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './try-three.component.html',
  styleUrls: ['./try-three.component.scss'],
})
export class TryThreeComponent {
  items = [{ value: 0 }, { value: 0 }];

  onChange(index: number, value: number): void {
    this.items[index].value = value;
    console.debug(this.items);
  }
  add(): void {
    this.items.push({ value: 0 });
  }
  delete(index: number): void {
    this.items.splice(index, 1);
  }
  getResult(): string {
    return this.items.map((item) => item.value).join(',');
  }
}
