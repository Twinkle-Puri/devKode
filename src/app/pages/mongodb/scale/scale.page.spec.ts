import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalePage } from './scale.page';

describe('ScalePage', () => {
  let component: ScalePage;
  let fixture: ComponentFixture<ScalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
