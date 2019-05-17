import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCodePage } from './model-code.page';

describe('ModelCodePage', () => {
  let component: ModelCodePage;
  let fixture: ComponentFixture<ModelCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
