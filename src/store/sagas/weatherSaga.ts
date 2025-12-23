import {call,  put, takeLatest } from "redux-saga/effects";
import { getWeatherApi } from "@Api/dashboard";
import {
    fetchApiRequest,
    fetchApiSuccess,
    fetchApiFailure
} from '../reducers/weatherReducer'

function* fetchWeatherApi(action: ReturnType<typeof fetchApiRequest>) : Generator{
    try{
        const response = yield call(getWeatherApi, action.payload)
        yield put(fetchApiSuccess(response.data))
    }catch(error: any) {
        yield put(fetchApiFailure(error.message))
    }
}

export function* weatherSaga(){
    yield takeLatest(fetchApiRequest.type, fetchWeatherApi)
}