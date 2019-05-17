import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbPage } from './mongodb.page';

describe('MongodbPage', () => {
  let component: MongodbPage;
  let fixture: ComponentFixture<MongodbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongodbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongodbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
