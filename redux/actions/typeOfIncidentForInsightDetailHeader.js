// action types
export const CHANGE_INCIDENT = 'CHANGE_INCIDENT'

// action creators
export function ChangeIncident(payload){
    console.log('action changeINcieent')
    return {
        type: CHANGE_INCIDENT,
        payload: payload
    }
}


