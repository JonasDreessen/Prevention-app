import { combineReducers } from 'redux'
import AddCounter from './AddCounter'
import AddIncidentIncrease from './AddIncidentIncrease'
import changeVisibleState from './changeModalVisibleState'
import addNewLocation from './addNewLocation'

export default combineReducers({
    AddCounter,
    AddIncidentIncrease,
    changeVisibleState,
    addNewLocation
})
