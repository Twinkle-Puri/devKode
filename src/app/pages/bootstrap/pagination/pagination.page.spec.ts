import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPage } from './pagination.page';

describe('PaginationPage', () => {
  let component: PaginationPage;
  let fixture: ComponentFixture<PaginationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
