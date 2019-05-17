import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellsPage } from './wells.page';

describe('WellsPage', () => {
  let component: WellsPage;
  let fixture: ComponentFixture<WellsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
