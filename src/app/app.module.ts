import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {increment} from './redux/app.reducers';
import {StoreModule} from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({increment: increment})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
