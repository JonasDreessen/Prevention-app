// Creating the action for adding the amount of incidents

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
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

// Reducers 

const initialState = {
    counter: 0
}

function counter(state = initialState, action, payload){
    switch(action.type) {
        case INCREMENT: 
            return {counter: state.counter + 1}
        case DECREMENT:
            return {counter: state.counter -1}
        default:
            return state
    }
}
export default counter

