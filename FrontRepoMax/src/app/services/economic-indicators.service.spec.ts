import { TestBed } from '@angular/core/testing';

import { EconomicIndicatorsService } from './economic-indicators.service';

describe('EconomicIndicatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EconomicIndicatorsService = TestBed.get(EconomicIndicatorsService);
    expect(service).toBeTruthy();
  });
});
