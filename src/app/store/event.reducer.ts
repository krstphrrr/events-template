import { Action, createReducer, on } from '@ngrx/store';
import { EventState } from './event.model';
import { loadEventsSuccess, selectDate } from './event.actions';

export const initialState: EventState = {
  events: [],
  selectedDate: null
};

const _eventReducer = createReducer(
  initialState,
  on(loadEventsSuccess, (state, { events }) => ({ ...state, events })),
  on(selectDate, (state, { date }) => ({ ...state, selectedDate: date }))
);

export function eventReducer(state: EventState | undefined, action: Action) {
  console.log("STATE: ", state)
  return _eventReducer(state, action);
}