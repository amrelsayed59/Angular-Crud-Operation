import { ActionReducerMap } from '@ngrx/store';
import { CounterComponent } from '../views/users/counter/counter.component';
import { Counter, counterReducer } from './reducers/counter.reducer';
import { ToDo, TodosReducer } from './reducers/todos.reducer';


export interface StoreInterface {
    counter: Counter
    todos: ToDo[]
}

export interface CustomAction {
    type: string
    payload: any
}


export const reducers: ActionReducerMap<StoreInterface> = {
    counter: counterReducer,
    todos: TodosReducer,
}