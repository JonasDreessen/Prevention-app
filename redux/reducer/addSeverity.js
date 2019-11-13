import {ADD_EXTREME_SEVERITY} from '../actions/SevertyIncreaser'
import {ADD_HIGH_SEVERITY} from '../actions/SevertyIncreaser'
import {ADD_MEDIUM_SEVERITY} from '../actions/SevertyIncreaser'
import {ADD_LOW_SEVERITY} from '../actions/SevertyIncreaser'
import {ADD_TRIVIAL_SEVERITY} from '../actions/SevertyIncreaser'

const initialState = {
    extremeSeverity: 0,
    highSeverity: 0,
    mediumSeverity: 0,
    lowSeverity: 0,
    trivialSeverity: 0
}

function addSeverety(state = initialState, action){
    switch(action.type){
        case ADD_EXTREME_SEVERITY:
            return {
                ...state,
                extremeSeverity: state.extremeSeverity + 1, 
                }
        case ADD_HIGH_SEVERITY:
            return {
                ...state,
                highSeverity: state.highSeverity + 1, 
                }
        case ADD_MEDIUM_SEVERITY:
            return {
                ...state,
                mediumSeverity: state.mediumSeverity + 1, 
                }
        case ADD_LOW_SEVERITY:
            return {
                ...state,
                lowSeverity: state.lowSeverity + 1, 
                }
        case ADD_TRIVIAL_SEVERITY:
            return {
                ...state,
                trivialSeverity: state.trivialSeverity + 1, 
                }
        default:
            return state;
            }
}
export default addSeverety