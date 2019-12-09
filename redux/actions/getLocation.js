
// -- action for getting the new incident location -- //
export const GET_LOCATION = 'GET_LOCATION'
export const SET_LOCATION = 'SET_LOCATION'

export function getLocation(payload){   
    return {
        type: GET_LOCATION,
        payload: payload
    }
}

// -- reducer for changing the state to the new fetched location -- //
const initialState = {
    isLoaded: false,
    userLocation: [],
    error: null,
    time: null, 
    incident: null,
    Id: 0,
}
function addNewLocation(state = initialState, action){
    switch(action.type){
        case GET_LOCATION:
            const newId = state.Id + 1
            console.log(state)
            return {
                ...state,
                Id: newId,
                isLoaded: true,
                userLocation:[...state.userLocation, {
                    latitude: action.payload.position.coords.latitude,
                    longitude: action.payload.position.coords.longitude,
                    city: action.payload.area.city,
                    country: action.payload.area.country,
                    time: action.payload.time, 
                    incident: action.payload.incident,
                    userId: newId,
                    weather: {
                        weather: action.payload.weather
                    }
                }],
                }
        default:
            return state;
            }
}
export default addNewLocation
