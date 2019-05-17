import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloningPage } from './cloning.page';

describe('CloningPage', () => {
  let component: CloningPage;
  let fixture: ComponentFixture<CloningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
