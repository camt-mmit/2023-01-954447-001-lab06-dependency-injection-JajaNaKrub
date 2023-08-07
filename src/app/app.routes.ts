import { Routes } from '@angular/router';
import { TryOneComponent } from './try-one/try-one.component';
import { TryTwoComponent } from './try-two/try-two.component';
import { TryThreeComponent } from './try-three/try-three.component';
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { ExampleComponent } from './example/router/example/example.component';
import { ExampleInputComponent } from './example/router/example-input/example-input.component';

export const routes: Routes = [
  { path: 'try-one', component: TryOneComponent },
  { path: 'try-two', component: TryTwoComponent },
  { path: 'try-three', component: TryThreeComponent },
  { path: 'lab-5', component: DynamicSectionComponent },
  { path: 'test', component: DynamicInputComponent },
  {
    path: '',
    component: ExampleComponent,
    children: [
      { path: '', redirectTo: 'input', pathMatch: 'full' },
      { path: 'input', component: ExampleInputComponent },
    ],
  },
];
