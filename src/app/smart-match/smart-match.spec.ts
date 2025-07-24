import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartMatch } from './smart-match';

describe('SmartMatch', () => {
  let component: SmartMatch;
  let fixture: ComponentFixture<SmartMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartMatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartMatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
