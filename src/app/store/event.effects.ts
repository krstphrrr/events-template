import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EventService } from '../services/event.service';
import { loadEvents, loadEventsSuccess, loadEventsFailure, loadEventsByDate } from './event.actions';

@Injectable()
export class EventEffects {
  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEvents),
      mergeMap(() =>
        this.eventService.getEvents().pipe(
          map(events => loadEventsSuccess({ events })),
          catchError(error => of(loadEventsFailure({ error })))
        )
      )
    )
  );
  
  loadEventsByDate$ = createEffect(() =>
    
    this.actions$.pipe(
      ofType(loadEventsByDate),
      mergeMap(action =>
        this.eventService.getEventsByDate(action.date).pipe(
          map(events => loadEventsSuccess({ events })),
          catchError(error => of(loadEventsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) {}
}
