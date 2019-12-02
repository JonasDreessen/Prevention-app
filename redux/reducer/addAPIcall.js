import {REGISTER, LOGIN} from '../actions/loginAPIcall'

const initialState = {
    apiCalling: false, 
    occupation: null,
}

function addAPIcall(state = initialState, action){
    switch(action.type){
        case "REGISTER_SAGA":
            return {
                apiCalling: true,
                occupation: 'REGISTER',
                loginStatus: action.payload
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