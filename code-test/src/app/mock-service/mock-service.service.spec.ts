import { TestBed, inject } from '@angular/core/testing';

import { MockServiceService } from './mock-service.service';

describe('MockServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockServiceService]
    });
  });

  // it('should ...', inject([MockServiceService], (service: MockServiceService) => {
  //   expect(service).toBeTruthy();
  // }));
});
