import {INCREMENT_INCIDENT_HAZARD, 
        INCREMENT_INCIDENT_NEARMISS, 
        INCREMENT_INCIDENT_MAINTENANCE, 
        INCREMENT_INCIDENT_INJURY,
        INCREMENT_INCIDENT_PROPERTYDAMAGE,
        INCREMENT_INCIDENT_THEFT} from '../actions/incidentIncrease';

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
