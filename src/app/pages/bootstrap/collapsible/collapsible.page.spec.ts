import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsiblePage } from './collapsible.page';

describe('CollapsiblePage', () => {
  let component: CollapsiblePage;
  let fixture: ComponentFixture<CollapsiblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsiblePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
