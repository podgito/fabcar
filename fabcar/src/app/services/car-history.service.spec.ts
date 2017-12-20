import { TestBed, inject } from '@angular/core/testing';

import { CarHistoryService } from './car-history.service';

describe('CarHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarHistoryService]
    });
  });

  it('should be created', inject([CarHistoryService], (service: CarHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
