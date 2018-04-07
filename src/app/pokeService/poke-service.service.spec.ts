import { TestBed, inject } from '@angular/core/testing';

import { PokeServiceService } from './poke-service.service';

describe('PokeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeServiceService]
    });
  });

  it('should be created', inject([PokeServiceService], (service: PokeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
