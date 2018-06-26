/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CollectablesService } from './collectables.service';

describe('CollectablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectablesService]
    });
  });

  it('should ...', inject([CollectablesService], (service: CollectablesService) => {
    expect(service).toBeTruthy();
  }));
});
