import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendPage } from './amend.page';

describe('AmendPage', () => {
  let component: AmendPage;
  let fixture: ComponentFixture<AmendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
