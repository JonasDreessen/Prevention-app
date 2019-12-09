// -- adding the action -- //

export const MODAL_VISIBILITY = 'MODAL_VISIBILITY'
export function changeModalVisibility(){
    return {
        type: MODAL_VISIBILITY,
    }
}

// -- reducer that will change the state of the visibilty so that a modal will (dis)appear -- //
const initialState = {
    modalVisible: false
}
function changeVisibleState(state = initialState, action){
    switch(action.type){
        case MODAL_VISIBILITY: 
            return {modalVisible: !state.modalVisible}
        default:
            return state
    }
}
export default changeVisibleState
