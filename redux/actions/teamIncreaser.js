export const ADD_NEW_TEAM = 'ADD_NEW_TEAM'
// action creators

export function teamIncreaser(payload){
    console.log('firing up the addteam action')
    return {
        type: ADD_NEW_TEAM,
        payload: payload
    }
}

