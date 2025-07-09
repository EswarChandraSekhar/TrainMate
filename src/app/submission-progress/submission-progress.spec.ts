import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionProgress } from './submission-progress';

describe('SubmissionProgress', () => {
  let component: SubmissionProgress;
  let fixture: ComponentFixture<SubmissionProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
