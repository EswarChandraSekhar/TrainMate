import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigateMatch } from './investigate-match';

describe('InvestigateMatch', () => {
  let component: InvestigateMatch;
  let fixture: ComponentFixture<InvestigateMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestigateMatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigateMatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
