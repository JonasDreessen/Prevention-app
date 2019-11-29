import { combineReducers } from 'redux'
import AddCounter from './AddCounter'
import AddIncidentIncrease from './AddIncidentIncrease'
import changeVisibleState from './changeModalVisibleState'
import addNewLocation from './addNewLocation'
import addNewTeam from './addNewTeam'
import addSeverity from './addSeverity'
import changeTypeOfIncidentForInsightDetailHeader from './changeTypeOfIncidentForInsightDetailHeader'
import addAPIcall from './addAPIcall'

export default combineReducers({
    addSeverity,
    AddCounter,
    AddIncidentIncrease,
    changeVisibleState,
    addNewLocation,
    addNewTeam,
    changeTypeOfIncidentForInsightDetailHeader,
    addAPIcall
})
