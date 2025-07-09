import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLostDialog } from './edit-lost-dialog';

describe('EditLostDialog', () => {
  let component: EditLostDialog;
  let fixture: ComponentFixture<EditLostDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditLostDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLostDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
