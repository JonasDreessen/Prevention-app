import {ADD_NEW_TEAM} from '../actions/teamIncreaser'

const initialState = {
    teamName: ''
}

function addNewTeam(state = initialState, action){
    switch(action.type){
        case ADD_NEW_TEAM:
            return {
                teamName: action.payload
                }
        default:
            return state;
            }
}
export default addNewTeam