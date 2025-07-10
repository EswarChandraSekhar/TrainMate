import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundList } from './found-list';

describe('FoundList', () => {
  let component: FoundList;
  let fixture: ComponentFixture<FoundList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoundList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
