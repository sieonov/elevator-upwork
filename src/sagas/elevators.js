import { call, takeEvery } from 'redux-saga/effects';
import * as ElevatorConstants from '../constants/Elevators';
import { request } from '../components/Fetch';

function* getElevatorList(action) {
  yield call(request({
    type: ElevatorConstants.GET_ELEVATOR_LIST,
    method: 'GET',
    url: action.payload.url,
  }), action);
}

function* elevatorsSaga() {
  yield takeEvery(ElevatorConstants.GET_ELEVATOR_LIST, getElevatorList);
}

export default elevatorsSaga;
