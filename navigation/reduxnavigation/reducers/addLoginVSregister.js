import {REGISTER_USER, LOGIN_USER} from '../actions/loginVSregister'

const initialState = {
    accountExists: true
}

function addLoginVSregister(state = initialState, action){
    console.log(state.accountExists)
    switch(action.type){
        case REGISTER_USER:
            return {
                accountExists: false
                }
        case LOGIN_USER:
            return {
                accountExists: true
            }
        default:
            return state;
            }
}
export default addLoginVSregister