// -- actions that listen to the press of a severity type -- /
export const ADD_EXTREME_SEVERITY = 'ADD_EXTREME_SEVERITY'
export const ADD_HIGH_SEVERITY = 'ADD_HIGH_SEVERITY'
export const ADD_MEDIUM_SEVERITY = 'ADD_MEDIUM_SEVERITY'
export const ADD_LOW_SEVERITY = 'ADD_LOW_SEVERITY'
export const ADD_TRIVIAL_SEVERITY = 'ADD_TRIVIAL_SEVERITY'
export function SevertyIncreaser(payload){
    if(payload == 'extreme'){
        return{
            type: ADD_EXTREME_SEVERITY,
            payload: payload,
        }
    } else if(payload == 'high'){
        return{
            type: ADD_HIGH_SEVERITY,
            payload: payload
        }
    } else if (payload == 'medium'){
        return{
            type: ADD_MEDIUM_SEVERITY,
            payload: payload
        }
    } else if (payload == 'low'){
        return{
            type: ADD_LOW_SEVERITY,
            payload: payload
        }
    } else if (payload == 'trivial'){
        return{
            type: ADD_TRIVIAL_SEVERITY,
            payload: payload
        }
    }
}

// -- reducers that change the state to the chosen severity, this will be visible in the graphics -- //

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

