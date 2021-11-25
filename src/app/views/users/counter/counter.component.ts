import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  StoreInterface } from 'src/app/store/store';
import { DecrementAction, IncrementAction } from 'src/app/store/actions/counter.action';
import { nSelector } from 'src/app/store/reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count: number = 0;

  constructor(private _store: Store<StoreInterface>) { 

    // this._store.subscribe(data => this.count = data.counter.n); OLD

    this._store.select(nSelector).subscribe(data => this.count = data);

  }

  ngOnInit(): void {
  }

  increase() {
    // this._store.dispatch({ type: 'INCREMENT', payload: 1 })  OLD
    this._store.dispatch(new IncrementAction(1))
  }

  decrease() {
    this._store.dispatch(new DecrementAction(1))
  }

}
