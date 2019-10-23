import {INCREMENT_INCIDENT} from '../actions/incidentIncrease';

const initialState = {
    amountOfIncidents: 0
}

function AddIncidentIncrease(state = initialState, action, payload){
    console.log("FIRING UP THE INCIDENT INCREASE REDUCER")
    switch(action.type) {
        case INCREMENT_INCIDENT: 
            return {amountOfIncidents: state.amountOfIncidents + 1,
                    typeOfIncident: action.payload
            }
        default:
            return state
    }
}
export default AddIncidentIncrease
