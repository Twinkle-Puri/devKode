import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VscPage } from './vsc.page';

describe('VscPage', () => {
  let component: VscPage;
  let fixture: ComponentFixture<VscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VscPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
