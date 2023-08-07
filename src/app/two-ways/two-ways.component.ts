import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-ways',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two-ways.component.html',
  styleUrls: ['./two-ways.component.scss']
})
export class TwoWaysComponent {
  @Input() message = '';

  @Output() messageChange = new EventEmitter<string>();

  private updateMessage():void {
    this.messageChange.emit(this.message);
  }

  changeToAdam(): void {
    this.message = 'Adam';
    this.updateMessage();
  }

  changeToBob(): void {
    this.message = 'Bob';
    this.updateMessage();
  }



}
