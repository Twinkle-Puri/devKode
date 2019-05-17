import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCoursePage } from './available-course.page';

describe('AvailableCoursePage', () => {
  let component: AvailableCoursePage;
  let fixture: ComponentFixture<AvailableCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
