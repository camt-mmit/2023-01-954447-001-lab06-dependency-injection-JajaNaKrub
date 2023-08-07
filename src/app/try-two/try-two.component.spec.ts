import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryTwoComponent } from './try-two.component';

describe('TryTwoComponent', () => {
  let component: TryTwoComponent;
  let fixture: ComponentFixture<TryTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TryTwoComponent]
    });
    fixture = TestBed.createComponent(TryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
