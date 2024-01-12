import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxProblemComponent } from './check-box-problem.component';

describe('CheckBoxProblemComponent', () => {
  let component: CheckBoxProblemComponent;
  let fixture: ComponentFixture<CheckBoxProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBoxProblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckBoxProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
