// action types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action creators
export function addIncrement(){
    console.log("FIRING UP THE increment")
    return {
        type: INCREMENT,
    }
}

export function addDecrement (){
    console.log("FIRNING UP THE decrement")
    return {
        type: DECREMENT,
    }
}

