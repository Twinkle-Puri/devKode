import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoosePage } from './mongoose.page';

describe('MongoosePage', () => {
  let component: MongoosePage;
  let fixture: ComponentFixture<MongoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoosePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
