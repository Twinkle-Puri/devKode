import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbModelPage } from './mongodb-model.page';

describe('MongodbModelPage', () => {
  let component: MongodbModelPage;
  let fixture: ComponentFixture<MongodbModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongodbModelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongodbModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
