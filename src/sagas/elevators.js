import { call, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ElevatorConstants from '../constants/Elevators';
import { request } from '../components/Fetch';

function* getElevatorList(action) {
  yield call(request({
    type: ElevatorConstants.GET_ELEVATOR_LIST,
    method: 'GET',
    url: action.payload.url,
  }), action);
}

function* createElevator(action) {
  yield call(request({
    type: ElevatorConstants.POST_ELEVATOR,
    method: 'POST',
    url: action.payload.url,
  }), action);
}

function* clearElevators(action) {
  yield call(request({
    type: ElevatorConstants.CLEAR_ELEVATORS,
    method: 'delete',
    url: action.payload.url,
  }), action);
}

function* elevatorsSaga() {
  yield takeEvery(ElevatorConstants.GET_ELEVATOR_LIST, getElevatorList);
  yield takeEvery(ElevatorConstants.POST_ELEVATOR, createElevator);
  yield takeLatest(ElevatorConstants.CLEAR_ELEVATORS, clearElevators);
}

export default elevatorsSaga;
