import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscentisMessagesComponent } from './ascentisMessages.component';

describe('AscentisMessagesComponent', () => {
  let component: AscentisMessagesComponent;
  let fixture: ComponentFixture<AscentisMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscentisMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscentisMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
