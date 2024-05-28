import { Component } from '@angular/core';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
  providers: [provideNativeDateAdapter()],
  // imports: [MatCardModule, MatDatepickerModule]
})


export class AppComponent {
  events = [
    {
      title: 'CR Summit East - 2019',
      date: '06 February 2020',
      description: 'Lorem Ipsum is simply dummy text of the printing and',
      location: 'Omnnego In',
      time: '2 PM to 4 PM',
      price: 151,
      image: 'cerola.jpg'
    },
    {
      title: 'CR Summit East - 2019',
      date: '08 February 2020',
      description: 'Lorem Ipsum is simply dummy text of the printing and',
      location: 'Omnnego In',
      time: '2 PM to 4 PM',
      price: 175,
      image: 'cerola.jpg'
    }
  ];
}
