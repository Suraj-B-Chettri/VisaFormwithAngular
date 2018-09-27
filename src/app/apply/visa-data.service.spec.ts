import { TestBed, inject } from '@angular/core/testing';

import { VisaDataService } from './visa-data.service';

describe('VisaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisaDataService]
    });
  });

  it('should be created', inject([VisaDataService], (service: VisaDataService) => {
    expect(service).toBeTruthy();
  }));
});
