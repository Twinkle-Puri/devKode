import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitPage } from './git.page';

describe('GitPage', () => {
  let component: GitPage;
  let fixture: ComponentFixture<GitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
