import { createAction, props } from '@ngrx/store';
import { Event } from './event.model';

export const loadEvents = createAction('[Event List] Load Events');
export const loadEventsSuccess = createAction('[Event List] Load Events Success', props<{ events: Event[] }>());
export const loadEventsFailure = createAction('[Event List] Load Events Failure', props<{ error: any }>());

export const selectDate = createAction('[Event Calendar] Select Date', props<{ date: string }>());
export const loadEventsByDate = createAction('[Event List] Load Events By Date', props<{ date: string }>());