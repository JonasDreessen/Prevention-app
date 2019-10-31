import {GET_LOCATION} from '../actions/getLocation'
const initialState = {
    isLoaded: false,
    userLocation: [],
    error: null,
    time: null, 
    incident: null
}

function addNewLocation(state = initialState, action){
    switch(action.type){
        case GET_LOCATION:
            return {
                ...state,
                isLoaded: true,
                userLocation:[...state.userLocation, {
                    latitude: action.payload.position.coords.latitude,
                    longitude: action.payload.position.coords.longitude,
                    city: action.payload.area.city,
                    country: action.payload.area.country,
                    time: action.payload.time, 
                    incident: action.payload.incident
                }],
                }
        default:
            return state;
            }
}
export default addNewLocation