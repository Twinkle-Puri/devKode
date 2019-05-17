import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlMongoPage } from './sql-mongo.page';

describe('SqlMongoPage', () => {
  let component: SqlMongoPage;
  let fixture: ComponentFixture<SqlMongoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlMongoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlMongoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
