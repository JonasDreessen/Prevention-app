const HEADER = 'HEADER';

// action creators
export function changeHeader(headertitle){
    console.log("FIRING UP THE increment")
    return {
        type: HEADER,
        payload: headertitle,
    }
}