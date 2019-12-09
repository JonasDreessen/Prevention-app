// -- creating the action for adding a new type of incident -- //

export const INCREMENT_INCIDENT_HAZARD = 'INCREMENT_INCIDENT_HAZARD'
export const INCREMENT_INCIDENT_NEARMISS = 'INCREMENT_INCIDENT_NEARMISS'
export const INCREMENT_INCIDENT_MAINTENANCE = 'INCREMENT_INCIDENT_MAINTENANCE'
export const INCREMENT_INCIDENT_INJURY = 'INCREMENT_INCIDENT_INJURY'
export const INCREMENT_INCIDENT_PROPERTYDAMAGE = 'INCREMENT_INCIDENT_PROPERTYDAMAGE'
export const INCREMENT_INCIDENT_THEFT = 'INCREMENT_INCIDENT_THEFT'
export function addHazard(){
    return {
        type: INCREMENT_INCIDENT_HAZARD,
        payload: 'hazard'
    }
}
export function addNearMiss(){
    return {
        type: INCREMENT_INCIDENT_NEARMISS,
        payload: 'Near Miss'
    }
}
export function addMaintenance(){
    return {
        type: INCREMENT_INCIDENT_MAINTENANCE,
        payload: 'Maintenance'
    }
}
export function addInjury(){
    return {
        type: INCREMENT_INCIDENT_INJURY,
        payload: 'Injury'
    }
}
export function addPropertyDamage(){
    return {
        type: INCREMENT_INCIDENT_PROPERTYDAMAGE,
        payload: 'Property Damage'
    }
}
export function addTheft(){
    return {
        type: INCREMENT_INCIDENT_THEFT,
        payload: 'theft'
    }
}

// -- adding the reducer that will update the state and adjust the type of incident -- /

const initialState = {
    amountOfIncidents: 0,
    HazardIncidents: 0,
    NearMissIncidents: 0,
    MaintenanceIncidents: 0,
    InjuryIncidents: 0,
    PropertyDamageIncidents: 0,
    TheftIncidents: 0,
    typeOfIncident: ''
}

function AddIncidentIncrease(state = initialState, action){
    switch(action.type) {
        case INCREMENT_INCIDENT_HAZARD: 
            return {
                    ...state,
                    amountOfIncidents: state.amountOfIncidents + 1,
                    HazardIncidents: state.HazardIncidents + 1,
                    typeOfIncident: action.payload
                }

        case INCREMENT_INCIDENT_NEARMISS: 
            return {
                    ...state,
                    amountOfIncidents: state.amountOfIncidents + 1,
                    NearMissIncidents: state.NearMissIncidents + 1,
                    typeOfIncident: action.payload
                }

        case INCREMENT_INCIDENT_MAINTENANCE: 
          return {...state,
                  amountOfIncidents: state.amountOfIncidents + 1,
                  MaintenanceIncidents: state.MaintenanceIncidents + 1,
                  typeOfIncident: action.payload
              }

         case INCREMENT_INCIDENT_INJURY: 
            return {...state,
                    amountOfIncidents: state.amountOfIncidents + 1,
                    InjuryIncidents: state.InjuryIncidents + 1,
                    typeOfIncident: action.payload
                }

        case INCREMENT_INCIDENT_PROPERTYDAMAGE: 
            return {...state,
                    amountOfIncidents: state.amountOfIncidents + 1,
                    PropertyDamageIncidents: state.PropertyDamageIncidents + 1,
                    typeOfIncident: action.payload
                }

       case INCREMENT_INCIDENT_THEFT: 
            return {...state,
                    amountOfIncidents: state.amountOfIncidents + 1,
                    TheftIncidents: state.TheftIncidents + 1,
                    typeOfIncident: action.payload
                }
            default:
                return state
    }
}
export default AddIncidentIncrease
