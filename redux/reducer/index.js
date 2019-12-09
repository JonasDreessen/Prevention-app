import { combineReducers } from 'redux'
import AddCounter from '../actions/counterIncrease'
import AddIncidentIncrease from '../actions/incidentIncrease'
import changeVisibleState from '../actions/modalVisibleChanger'
import addNewLocation from '../actions/getLocation'
import addNewTeam from '../actions/teamIncreaser'
import addSeverity from '../actions/SevertyIncreaser'
import changeTypeOfIncidentForInsightDetailHeader from '../actions/typeOfIncidentForInsightDetailHeader'
import addAPIcall from '../actions/loginAPIcall'
import addLoginVSregister from '../../navigation/reduxnavigation/reducers/addLoginVSregister'


// -- here the reducers are combined in one component -- //

export default combineReducers({
    addSeverity,
    AddCounter,
    AddIncidentIncrease,
    changeVisibleState,
    addNewLocation,
    addNewTeam,
    changeTypeOfIncidentForInsightDetailHeader,
    addAPIcall,
    addLoginVSregister
})
