import {MODAL_VISIBILITY} from '../actions/modalVisibleChanger';

const initialState = {
    modalVisible: false
}

function changeVisibleState(state = initialState, action){
    return {modalVisible: !state.modalVisible}
}

export default changeVisibleState