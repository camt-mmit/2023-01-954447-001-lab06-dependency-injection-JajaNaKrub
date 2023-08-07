import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';
import { SectionData, InputData } from '../types';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
})
export class DynamicSectionComponent {
  @Input({ required: true }) items!: SectionData;

  @Output() dataChange = new EventEmitter<SectionData>();

  addSec(): void {
    this.items?.push([{ value: 0 }]);
    this.dataChange.emit(this.items);
  }
  deleteSec(index: number): void {
    this.items?.splice(index, 1);
    this.dataChange.emit(this.items);
  }

  onDataChange(): void {
    this.dataChange.emit(this.items);
  }
}
