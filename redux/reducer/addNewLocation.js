import {GET_LOCATION} from '../actions/getLocation'

const initialState = {
    isLoaded: false,
    userLocation: [],
    error: null
}

function addNewLocation(state = initialState, action){
    switch(action.type){
        case GET_LOCATION:
            const randomNumber = Math.random() * 1000
            return {
                ...state,
                isLoaded: true,
                userLocation:[...state.userLocation, {latitude: action.payload.latitude, longitude: action.payload.longitude, key:randomNumber}]
                // latitude: action.payload.latitude,
                // longitude: action.payload.longitude
                }
        default:
            return state;
            }
}
export default addNewLocation