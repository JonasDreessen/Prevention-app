import { Decipher } from "crypto"

// action types

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action creators
export function addIncrement(){
    return {
        type: INCREMENT,
    }
}

export function addDecrement (){
    return {
        type: DECREMENT,
    }
}
