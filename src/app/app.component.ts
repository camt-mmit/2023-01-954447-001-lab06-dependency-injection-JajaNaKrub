import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TwoWaysComponent } from './two-ways/two-ways.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TwoWaysComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WEEK06';

  products = [
    { code: 'PD001', name: 'Product 001' },
    { code: 'PD002', name: 'Product 002' },
    { code: 'PD003', name: 'Product 003' },
    { code: 'BK001', name: 'Book 001' },
    { code: 'BK002', name: 'Book 002' },
  ];

  externalMessage = 'Cindy';
}
