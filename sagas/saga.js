
import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import {REGISTER} from '../redux/actions/loginAPIcall'

function* callAPIregister(){ 
    yield delay(4000)
    yield put({type: 'REGISTER_SAGA'})
}

export function* watchAPIcall(action){
    console.log('inside saga')
    yield takeEvery(REGISTER, callAPIregister)
}