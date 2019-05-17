import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullingPage } from './pulling.page';

describe('PullingPage', () => {
  let component: PullingPage;
  let fixture: ComponentFixture<PullingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
