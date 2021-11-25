import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { FailedAction, LOAD, SuccessAction } from '../actions/todos.action';


@Injectable()
export class TodosEffect {

    todoEffect$ = createEffect(() => this.actions.pipe(
        ofType(LOAD),
        mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/todos')
        .pipe(
            map((data) => new SuccessAction(data)),
            catchError((err) => of(new FailedAction(err)))
        ))
    ))

    constructor(private http: HttpClient, private actions: Actions) {

    }
}