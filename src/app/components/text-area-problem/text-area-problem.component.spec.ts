import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaProblemComponent } from './text-area-problem.component';

describe('TextAreaProblemComponent', () => {
  let component: TextAreaProblemComponent;
  let fixture: ComponentFixture<TextAreaProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaProblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextAreaProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
