import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPage } from './bootstrap.page';

describe('BootstrapPage', () => {
  let component: BootstrapPage;
  let fixture: ComponentFixture<BootstrapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
