
import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import {REGISTER} from '../redux/actions/loginAPIcall'

function* callAPIregister(payload){ 
    const json = yield fetch('http://spotlight-api.local/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Saga user created',
          email: payload.email,
          password: payload.password
        }),
      })
      .then(yield(response) => response.json())
              .then(data => {
                  return data
              })
    yield put({type: 'REGISTER_SAGA', payload: {json,payload}})
}


export function* watchAPIcall(){
    yield takeLatest(REGISTER, callAPIregister)
    
}