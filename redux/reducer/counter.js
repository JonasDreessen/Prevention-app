import {INCREMENT, DECREMENT} from '../actions/AddTodo';

const initialState = {
    counter: 0
}

function counter(state = initialState, action){
    switch(action.type) {
        case INCREMENT: 
            return state + 1
        case DECREMENT:
            return state -1
        default:
            return state
    }
}

export default counter
