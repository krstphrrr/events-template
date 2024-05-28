import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHolderComponent } from './event-holder.component';

describe('EventHolderComponent', () => {
  let component: EventHolderComponent;
  let fixture: ComponentFixture<EventHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventHolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
