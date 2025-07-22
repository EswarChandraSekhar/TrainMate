import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionList } from './reaction-list';

describe('ReactionList', () => {
  let component: ReactionList;
  let fixture: ComponentFixture<ReactionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
