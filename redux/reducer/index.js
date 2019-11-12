import { combineReducers } from 'redux'
import AddCounter from './AddCounter'
import AddIncidentIncrease from './AddIncidentIncrease'
import changeVisibleState from './changeModalVisibleState'
import addNewLocation from './addNewLocation'
import addNewTeam from './addNewTeam'

export default combineReducers({
    AddCounter,
    AddIncidentIncrease,
    changeVisibleState,
    addNewLocation,
    addNewTeam
})
