import { TestBed } from '@angular/core/testing';

import { ITaskService } from './itask.service';

describe('ITaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ITaskService = TestBed.get(ITaskService);
    expect(service).toBeTruthy();
  });
});
