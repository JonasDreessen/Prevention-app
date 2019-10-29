import {MODAL_VISIBILITY} from '../actions/modalVisibleChanger';


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