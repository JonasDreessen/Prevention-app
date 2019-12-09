// -- action that will listen to login or register and pass it to the reducer -- /
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export function loginAPIcall(payload){
    if(payload.type === 'login'){
        return {
            type: LOGIN,
            email: payload.email,
            password: payload.password,

        }
    }else if(payload.type === 'register'){
        return {
            type: REGISTER,
            email: payload.email,
            password: payload.password
        }
    }
}

// -- recuder that will change the state to store the api key returned from the api call  -- /

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