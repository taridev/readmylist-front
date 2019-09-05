import { TestBed } from '@angular/core/testing';

import { ITaskListServiceService } from './itask-list-service.service';

describe('ITaskListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ITaskListServiceService = TestBed.get(ITaskListServiceService);
    expect(service).toBeTruthy();
  });
});
