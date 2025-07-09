import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostList } from './lost-list';

describe('LostList', () => {
  let component: LostList;
  let fixture: ComponentFixture<LostList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LostList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
