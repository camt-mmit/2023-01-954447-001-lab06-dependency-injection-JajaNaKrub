import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaysComponent } from './two-ways.component';

describe('TwoWaysComponent', () => {
  let component: TwoWaysComponent;
  let fixture: ComponentFixture<TwoWaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TwoWaysComponent]
    });
    fixture = TestBed.createComponent(TwoWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
