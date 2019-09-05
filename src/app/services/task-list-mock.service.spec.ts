import { TestBed } from '@angular/core/testing';

import { TaskListMockService } from './task-list-mock.service';

describe('TaskListMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskListMockService = TestBed.get(TaskListMockService);
    expect(service).toBeTruthy();
  });
});
