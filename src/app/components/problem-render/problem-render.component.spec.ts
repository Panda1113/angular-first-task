import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemRenderComponent } from './problem-render.component';

describe('ProblemRenderComponent', () => {
  let component: ProblemRenderComponent;
  let fixture: ComponentFixture<ProblemRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
