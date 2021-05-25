import { TestBed } from '@angular/core/testing';

import { AscentisMessageService } from './ascentisMessage.service';

describe('AscentisMessageService', () => {
  let ascentisMessageService: AscentisMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    ascentisMessageService = TestBed.inject(AscentisMessageService);
  });

  it('should be created', () => {
    expect(ascentisMessageService).toBeTruthy();
  });
});
