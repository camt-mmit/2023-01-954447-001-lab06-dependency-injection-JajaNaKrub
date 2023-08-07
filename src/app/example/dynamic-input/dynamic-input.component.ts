import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputData } from '../types';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  @Input({ required: true }) items!: InputData;
  @Input({ required: true }) section!: number;
  @Input() nonDeleteabled = false;

  @Output() readonly deleteSelf = new EventEmitter<void>();
  @Output() readonly dataChange = new EventEmitter<void>();

  // isDisabled = false;
  // disabled() {
  //   if (this.items.length == 1) {
  //     this.isDisabled = true;
  //   } else {
  //     this.isDisabled = false;
  //   }
  // }
  onChange(index: number, value: number): void {
    this.items[index].value = value;
    this.dataChange.emit();
    console.debug(this.items);
  }
  add(): void {
    this.items.push({ value: 0 });
    this.dataChange.emit();
  }
  delete(index: number): void {
    this.items.splice(index, 1);
    this.dataChange.emit();
  }
  getResult(): number {
    this.items.map((item) => item.value).join(',');
    return this.items.reduce(
      (carry, currentValue) => carry + currentValue.value,
      0,
    );
  }
}
