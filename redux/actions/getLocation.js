export const GET_LOCATION = 'GET_LOCATION'
export const SET_LOCATION = 'SET_LOCATION'

export function getLocation(payload){   
    return {
        type: GET_LOCATION,
        payload: payload
    }
}


