// action types
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

// action creators
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