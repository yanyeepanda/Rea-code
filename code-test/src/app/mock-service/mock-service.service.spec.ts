import { TestBed, inject } from '@angular/core/testing';

import { MockService } from './mock-service.service';

describe('MockServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockService]
    });
  });

  // it('should ...', inject([MockServiceService], (service: MockServiceService) => {
  //   expect(service).toBeTruthy();
  // }));
});
