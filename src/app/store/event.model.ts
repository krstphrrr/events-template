export interface Event {
    title: string;
    date: string;
    description: string;
    location: string;
    time: string;
    price: string;
    imageUrl: string;
  }
  
  export interface EventState {
    events: Event[];
    selectedDate: string | null;
  }