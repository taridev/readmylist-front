import { TestBed } from '@angular/core/testing';

import { TaskMockService } from './task-mock.service';

describe('TaskMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskMockService = TestBed.get(TaskMockService);
    expect(service).toBeTruthy();
  });
});
