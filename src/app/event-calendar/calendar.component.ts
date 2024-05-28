import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDate, loadEventsByDate } from '../store/event.actions';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
// selected!: Date  | null;

  constructor(private store: Store) {}

  onDateSelected(date: Date): void {
    console.log(date)
    const formattedDate = date.toISOString().split('T')[0]; // Format date as needed
    this.store.dispatch(selectDate({ date: formattedDate }));
    this.store.dispatch(loadEventsByDate({ date: formattedDate }));
  }
}