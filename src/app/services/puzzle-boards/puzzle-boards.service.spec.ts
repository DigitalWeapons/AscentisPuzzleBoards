import { TestBed } from '@angular/core/testing';

import { PuzzleBoardsService } from './puzzle-boards.service';

describe('PuzzleBoardsService', () => {
  let service: PuzzleBoardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuzzleBoardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
