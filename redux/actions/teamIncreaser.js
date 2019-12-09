// -- adding new action that will create new team -- //
export const ADD_NEW_TEAM = 'ADD_NEW_TEAM'
export function teamIncreaser(payload){
    return {
        type: ADD_NEW_TEAM,
        payload: payload
    }
}

// -- the reducer will change the state and add a new team with the given name -- //
const initialState = {
    teamName: '',
    Id: 0,
    allTeams: []
}

function addNewTeam(state = initialState, action){
    switch(action.type){
        case ADD_NEW_TEAM:
            return {
                teamName: action.payload, 
                Id: state.Id + 1,
                }
        default:
            return state;
            }
}
export default addNewTeam