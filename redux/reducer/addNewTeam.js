import {ADD_NEW_TEAM} from '../actions/teamIncreaser'

const initialState = {
    teamName: '',
    Id: 0,
    allTeams: []
}

function addNewTeam(state = initialState, action){
    console.log('firing up the new addteam reducer')
    console.log(action.payload, state.Id, state.allteams)
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