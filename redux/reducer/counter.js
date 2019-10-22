import {INCREMENT, DECREMENT} from '../actions';

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
