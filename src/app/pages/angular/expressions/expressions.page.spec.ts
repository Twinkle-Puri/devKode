import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionsPage } from './expressions.page';

describe('ExpressionsPage', () => {
  let component: ExpressionsPage;
  let fixture: ComponentFixture<ExpressionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
