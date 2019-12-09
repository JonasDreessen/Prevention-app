// -- action that listens to change of incident -- //
export const CHANGE_INCIDENT = 'CHANGE_INCIDENT'
export function ChangeIncident(payload){
    return {
        type: CHANGE_INCIDENT,
        payload: payload
    }
}

// -- reducer that will make sure the correct header information is displayed when a different type of incident is chosen-- //

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


