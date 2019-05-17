import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaObjectPage } from './media-object.page';

describe('MediaObjectPage', () => {
  let component: MediaObjectPage;
  let fixture: ComponentFixture<MediaObjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaObjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaObjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
