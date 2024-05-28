import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-holder',
  templateUrl: './event-holder.component.html',
  styleUrl: './event-holder.component.css'
})
export class EventHolderComponent {
  @Input() events: any[] | undefined;
}
