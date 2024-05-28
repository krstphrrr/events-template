import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventState } from './event.model';

export const selectEventState = createFeatureSelector<EventState>('event');

export const selectAllEvents = createSelector(
  selectEventState,
  (state: EventState) => state.events
);

export const selectSelectedDate = createSelector(
  selectEventState,
  (state: EventState) => state.selectedDate
);

export const selectEventsByDate = createSelector(
  selectEventState,
  (state: EventState, props: { date: string }) => state.events.filter(event => event.date === props.date)
);