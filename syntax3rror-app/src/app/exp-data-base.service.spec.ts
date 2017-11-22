import { TestBed, inject } from '@angular/core/testing';

import { ExpDataBaseService } from './exp-data-base.service';

describe('ExpDataBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpDataBaseService]
    });
  });

  it('should be created', inject([ExpDataBaseService], (service: ExpDataBaseService) => {
    expect(service).toBeTruthy();
  }));
});
