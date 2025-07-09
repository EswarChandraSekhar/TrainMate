import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundFormSubmission } from './found-form-submission';

describe('FoundFormSubmission', () => {
  let component: FoundFormSubmission;
  let fixture: ComponentFixture<FoundFormSubmission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoundFormSubmission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundFormSubmission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
