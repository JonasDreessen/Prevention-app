// action types
export const LOGIN_USER = 'LOGIN_USER'
export const REGISTER_USER = 'REGISTER_USER'

// action creators
export function loginVSregister(payload){
    console.log('in action loginvsregister', payload)
    if(payload === 'LOGIN_USER'){
        return {
            type: LOGIN_USER,
        }
    }else if(payload === 'REGISTER_USER'){
        return {
            type: REGISTER_USER,
        }
    }
}