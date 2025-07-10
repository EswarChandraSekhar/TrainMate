import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoundDialog } from './edit-found-dialog';

describe('EditFoundDialog', () => {
  let component: EditFoundDialog;
  let fixture: ComponentFixture<EditFoundDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFoundDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFoundDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
