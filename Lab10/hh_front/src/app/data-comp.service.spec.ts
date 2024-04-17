import { TestBed } from '@angular/core/testing';

import { DataCompService } from './data-comp.service';

describe('DataCompService', () => {
  let service: DataCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
