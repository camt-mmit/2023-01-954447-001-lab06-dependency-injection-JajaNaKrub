import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
})
export class DynamicSectionComponent {
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
  addSec(): void {
    this.items.push({ value: 0 });
    this.disabled();
  }
  deleteSec(index: number): void {
    this.items.splice(index, 1);
    this.disabled();
  }
}
