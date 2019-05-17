import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllersPage } from './controllers.page';

describe('ControllersPage', () => {
  let component: ControllersPage;
  let fixture: ComponentFixture<ControllersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
