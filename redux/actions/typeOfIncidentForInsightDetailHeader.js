// action types
export const CHANGE_INCIDENT = 'CHANGE_INCIDENT'

// action creators
export function ChangeIncident(payload){
    return {
        type: CHANGE_INCIDENT,
        payload: payload
    }
}


