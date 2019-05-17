import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoShellPage } from './mongo-shell.page';

describe('MongoShellPage', () => {
  let component: MongoShellPage;
  let fixture: ComponentFixture<MongoShellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoShellPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoShellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
