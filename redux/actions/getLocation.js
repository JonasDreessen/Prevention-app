export const GET_LOCATION = 'GET_LOCATION'

export function getLocation(position){
    return {
        type: GET_LOCATION,
        payload: {latitude: position.coords.latitude, longitude: position.coords.longitude}
    }
}

