import { Alert } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getFlightsTickets } from '../api/api';
import { REQUEST_FLIGHTS } from './constants';
import { setFlightsAC, setFlightsIdAC, setLoadingAC, setPlacesAC } from './flightReducer';

export function* sagaFlightsWatcher() {
    yield takeEvery(REQUEST_FLIGHTS, sagaFlightWorker);
}

function* sagaFlightWorker() {
    try {
        yield put(setLoadingAC(true))
        const today = new Date();
        for (let i = 0; i < 10; i++) {

            const dd = ('0' + today.getDate()).slice(-2),
                mm = ('0' + (today.getMonth() + 1)).slice(-2),
                yyyy = today.getFullYear().toString();


            const flights = yield call(getFlightsTickets, yyyy, mm, dd);

            yield put(setFlightsAC(flights.data.Quotes));
            yield put(setPlacesAC(flights.data.Places));
            yield put(setFlightsIdAC());
            today.setDate(today.getDate() + 1);
        }
        yield put(setLoadingAC(false));

    } catch (error) {
        Alert.alert('Что-то пошло не так');
    }
}
