import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostForm } from './lost-form';

describe('LostForm', () => {
  let component: LostForm;
  let fixture: ComponentFixture<LostForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LostForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
