import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffixPage } from './affix.page';

describe('AffixPage', () => {
  let component: AffixPage;
  let fixture: ComponentFixture<AffixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffixPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
