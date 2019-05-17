import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollspyPage } from './scrollspy.page';

describe('ScrollspyPage', () => {
  let component: ScrollspyPage;
  let fixture: ComponentFixture<ScrollspyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollspyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollspyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
