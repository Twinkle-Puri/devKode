import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMachinePage } from './intro-machine.page';

describe('IntroMachinePage', () => {
  let component: IntroMachinePage;
  let fixture: ComponentFixture<IntroMachinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroMachinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroMachinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
