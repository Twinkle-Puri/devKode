import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerPage } from './pager.page';

describe('PagerPage', () => {
  let component: PagerPage;
  let fixture: ComponentFixture<PagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
