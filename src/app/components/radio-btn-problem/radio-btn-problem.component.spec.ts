import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBtnProblemComponent } from './radio-btn-problem.component';

describe('RadioBtnProblemComponent', () => {
  let component: RadioBtnProblemComponent;
  let fixture: ComponentFixture<RadioBtnProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioBtnProblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioBtnProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
