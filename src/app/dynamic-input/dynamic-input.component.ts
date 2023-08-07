import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  items = [{ value: 0 }, { value: 0 }];
  isDisabled = false;
  disabled() {
    if (this.items.length == 1) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
  onChange(index: number, value: number): void {
    this.items[index].value = value;
    console.debug(this.items);
  }
  add(): void {
    this.items.push({ value: 0 });
    this.disabled();
  }
  delete(index: number): void {
    this.items.splice(index, 1);
    this.disabled();
  }
  getResult(): number {
    this.items.map((item) => item.value).join(',');
    return this.items.reduce(
      (carry, currentValue) => carry + currentValue.value,
      0,
    );
  }
}
