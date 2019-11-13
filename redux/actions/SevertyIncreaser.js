export const ADD_EXTREME_SEVERITY = 'ADD_EXTREME_SEVERITY'
export const ADD_HIGH_SEVERITY = 'ADD_HIGH_SEVERITY'
export const ADD_MEDIUM_SEVERITY = 'ADD_MEDIUM_SEVERITY'
export const ADD_LOW_SEVERITY = 'ADD_LOW_SEVERITY'
export const ADD_TRIVIAL_SEVERITY = 'ADD_TRIVIAL_SEVERITY'
// action creators

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

