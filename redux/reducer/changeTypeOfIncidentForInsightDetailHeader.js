import {CHANGE_INCIDENT} from '../actions/typeOfIncidentForInsightDetailHeader'
const initialState = {
    incident: ''
}

function changeTypeOfIncident(state = initialState, action){
    switch(action.type) {
        case CHANGE_INCIDENT:
            console.log(action.payload, 'inside reducer') 
            return {incident: action.payload}
        default:
            return state
    }
}
export default changeTypeOfIncident
