import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpMongoosePage } from './set-up-mongoose.page';

describe('SetUpMongoosePage', () => {
  let component: SetUpMongoosePage;
  let fixture: ComponentFixture<SetUpMongoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUpMongoosePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpMongoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
