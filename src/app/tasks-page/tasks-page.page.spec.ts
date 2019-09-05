import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPagePage } from './tasks-page.page';

describe('TasksPagePage', () => {
  let component: TasksPagePage;
  let fixture: ComponentFixture<TasksPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
