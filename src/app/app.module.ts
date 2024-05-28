import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EventListComponent } from './event-list/event-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { NgOptimizedImage } from '@angular/common';
import { EventHolderComponent } from './event-holder/event-holder.component';
import { CalendarComponent } from './event-calendar/calendar.component'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { eventReducer } from './store/event.reducer';
import { EventEffects } from './store/event.effects';
import { EventService } from './services/event.service';
// import { EventListComponent } from './event-list/event-list.component';
// import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventCardComponent,
    EventHolderComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatDatepickerModule,
    NgOptimizedImage,
    StoreModule.forRoot({ event: eventReducer }),
    EffectsModule.forRoot([EventEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    provideAnimationsAsync(),
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
