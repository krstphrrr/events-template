import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Event } from '../store/event.model';
import { loadEvents } from '../store/event.actions';
import { selectAllEvents } from '../store/event.selectors';
import { filter, switchMap, map } from 'rxjs/operators';
import { selectEventsByDate, selectSelectedDate } from '../store/event.selectors';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class EventListComponent {
  // @Input() events: any[] | undefined;
  events$!: Observable<Event[]>;
  selectedDate$!:any;
  filteredEvents$:any;
  

  constructor(
    private store: Store) {
      // this.selectedDate$ = "2024-05-27"
    }

  ngOnInit(): void {
    this.selectedDate$ = this.store.select(selectSelectedDate);
    this.events$ = this.store.select(selectAllEvents);

    console.log("DESDE EL EVENT LIST: ", this.events$)
    this.filteredEvents$ = this.store.select(selectSelectedDate).pipe(
      filter((date: string | null): date is string => date !== null),
      switchMap((date) => 
        this.events$.pipe(
          map(events => events.filter(event => event.date === date))
        ))
        // this.store.select(selectEventsByDate, { date }))
    );
    console.log(this.filteredEvents$)
  }

}