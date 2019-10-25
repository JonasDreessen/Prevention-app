const MODAL_VISIBILITY = 'MODAL_VISIBILITY'

// action creators
export function changeModalVisibility(){
    console.log("FIRING UP THE changeModalVisibility")
    return {
        type: MODAL_VISIBILITY,
    }
}

