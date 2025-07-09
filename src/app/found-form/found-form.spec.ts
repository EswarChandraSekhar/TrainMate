import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundForm } from './found-form';

describe('FoundForm', () => {
  let component: FoundForm;
  let fixture: ComponentFixture<FoundForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoundForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
