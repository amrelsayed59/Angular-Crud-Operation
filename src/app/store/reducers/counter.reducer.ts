import { createFeatureSelector, createSelector } from '@ngrx/store'
import { DECREAMENT, INCREMENT } from '../actions/counter.action'
import {CustomAction} from '../store'


export interface Counter {
    n: number,
    changes: number,
}

let initialState = {
    n: 0,
    changes: 0,
}



export function counterReducer(state = initialState, action: CustomAction) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                n: state.n + action.payload
            }
        case DECREAMENT:
            return {
                ...state,
                n: state.n - action.payload
            }
        default:
            return state
    }

}


let counterFS = createFeatureSelector<Counter>('counter')
export let nSelector = createSelector(counterFS, state => state.n)