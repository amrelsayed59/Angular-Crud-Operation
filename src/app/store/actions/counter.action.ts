
export const INCREMENT = '[Counter] INCREMENT'
export const DECREAMENT = '[Counter] DECREAMENT'

export class IncrementAction {
    type: string = INCREMENT
    payload: number

    constructor(payload: number) {
        this.payload = payload
    }
}

export class DecrementAction {
    type: string = DECREAMENT
    payload: number

    constructor(payload: number) {
        this.payload = payload
    }
}