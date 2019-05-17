import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictsPage } from './conflicts.page';

describe('ConflictsPage', () => {
  let component: ConflictsPage;
  let fixture: ComponentFixture<ConflictsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConflictsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
