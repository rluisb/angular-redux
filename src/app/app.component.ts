import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {INCREMENT} from './redux/app.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  counter: Observable<{counter: 0}>;


  constructor(private store: Store<{ increment: {counter: 0}}>) {
  }

  ngOnInit(): void {
    this.counter = this.store.select('increment');
    this.counter.subscribe(
      value => console.log('Value', value)
    )
  }

  increment () {
    this.store.dispatch({type: INCREMENT, payload: 1})
  }
}
