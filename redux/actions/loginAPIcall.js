// action types
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

// action creators
export function loginAPIcall(payload){
    console.log('inside the api action')
    if(payload === 'login'){
        return {
            type: LOGIN,
            payload: payload
        }
    }else if(payload === 'register'){
        console.log('inside register_saga action')
        return {
            type: REGISTER,
            payload: payload
        }
    }
}