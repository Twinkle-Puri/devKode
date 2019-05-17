import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepPage } from './rep.page';

describe('RepPage', () => {
  let component: RepPage;
  let fixture: ComponentFixture<RepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
