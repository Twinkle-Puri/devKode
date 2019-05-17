import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuralPage } from './neural.page';

describe('NeuralPage', () => {
  let component: NeuralPage;
  let fixture: ComponentFixture<NeuralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
