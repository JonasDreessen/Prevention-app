export const GET_WEATHER = 'GET_WEATHER'

export function getWeather(payload){    
    return {
        type: GET_WEATHER,
        payload: payload
    }
}


