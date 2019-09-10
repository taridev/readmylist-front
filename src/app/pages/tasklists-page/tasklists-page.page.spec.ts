import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistsPagePage } from './tasklists-page.page';

describe('TasklistsPagePage', () => {
  let component: TasklistsPagePage;
  let fixture: ComponentFixture<TasklistsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistsPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
