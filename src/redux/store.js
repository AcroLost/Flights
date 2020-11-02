import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import flightReducer from "./flightReducer";
import { sagaFlightsWatcher } from "./sagas";

const saga = createSagaMiddleware();

const store = createStore(flightReducer, applyMiddleware(saga));

saga.run(sagaFlightsWatcher)

export default store;