import {CHANGE_INCIDENT} from '../actions/typeOfIncidentForInsightDetailHeader'
const initialState = {
    incident: ''
}

function changeTypeOfIncident(state = initialState, action){
    switch(action.type) {
        case CHANGE_INCIDENT:
            return {incident: action.payload}
        default:
            return state
    }
}
export default changeTypeOfIncident
