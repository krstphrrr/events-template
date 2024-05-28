import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../store/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  getEvents(): Observable<Event[]> {
    // Replace this with actual API call
    return of([
      {
        title: 'CR Summit East - 2019',
        date: '06 February 2020',
        description: 'Lorem Ipsum is simply dummy text of the printing and',
        location: 'Omnnego In',
        time: '2 PM to 4 PM',
        price: '$151.00',
        imageUrl: 'path/to/image1.jpg'
      },
      {
        title: 'CR Summit East - 2019',
        date: '08 February 2020',
        description: 'Lorem Ipsum is simply dummy text of the printing and',
        location: 'Omnnego In',
        time: '2 PM to 4 PM',
        price: '$175.00',
        imageUrl: 'path/to/image2.jpg'
      }
    ]);
  }

  getEventsByDate(date: string): Observable<Event[]> {
    console.log("EL DATE ES: ",date )
    // Replace this with actual API call
    if (date === '2024-05-27') {
      console.log("llegue")
      return of([
        {
          title: 'Test Event #1',
          date: '27 May 2024',
          description: 'Lorem Ipsum wanabana',
          location: 'Omnnego In',
          time: '2 PM to 4 PM',
          price: '$151.00',
          imageUrl: 'wanabana.jpg'
        }
      ]);
    } else if (date === '2024-05-28') {
      return of([
        {
          title: 'Test Event #2',
          date: '28 May 2024',
          description: 'Lorem Ipsum acerola',
          location: 'Omnnego In',
          time: '2 PM to 4 PM',
          price: '$175.00',
          imageUrl: 'cerola.jpg'
        }
      ]);
    } else {
      return of([]);
    }
  }
}
