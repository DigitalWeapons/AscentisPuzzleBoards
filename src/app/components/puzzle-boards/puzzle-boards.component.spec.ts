import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleBoardsComponent } from './puzzle-boards.component';

describe('PuzzleBoardsComponent', () => {
  let component: PuzzleBoardsComponent;
  let fixture: ComponentFixture<PuzzleBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
