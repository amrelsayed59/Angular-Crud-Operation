import { FAILED, SUCCESS } from '../actions/todos.action';
import { CustomAction } from '../store';

export interface ToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export function TodosReducer(state: ToDo[], action: CustomAction) {
    switch (action.type) {
        case SUCCESS:
            return action.payload
        case FAILED:
            console.log('error', action.payload)
            return state
    }
}