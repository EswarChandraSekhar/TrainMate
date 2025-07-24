import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgeDialog } from './imge-dialog';

describe('ImgeDialog', () => {
  let component: ImgeDialog;
  let fixture: ComponentFixture<ImgeDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgeDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
