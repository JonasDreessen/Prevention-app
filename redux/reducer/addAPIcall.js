import {REGISTER, LOGIN} from '../actions/loginAPIcall'

const initialState = {
    apiCalling: false, 
    occupation: null
}

function addAPIcall(state = initialState, action){
    console.log('inside the api reducer')
    switch(action.type){
        case "REGISTER_SAGA":
            console.log('inside register_saga reducer, it works!!')
            return {
                apiCalling: true,
                occupation: 'REGISTER'
                }
        case LOGIN:
            return {
                apiCalling: true,
                occupation: 'LOGIN'
            }
        default:
            return state;
            }
}
export default addAPIcall