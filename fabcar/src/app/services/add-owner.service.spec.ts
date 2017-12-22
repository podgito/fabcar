import { TestBed, inject } from '@angular/core/testing';

import { AddOwnerService } from './add-owner.service';

describe('AddOwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddOwnerService]
    });
  });

  it('should be created', inject([AddOwnerService], (service: AddOwnerService) => {
    expect(service).toBeTruthy();
  }));
});
