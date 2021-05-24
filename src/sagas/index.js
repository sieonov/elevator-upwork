import { all } from 'redux-saga/effects';
import elevatorsSaga from './elevators';

function* rootSaga() {
  yield all([
    elevatorsSaga(),
  ]);
}

export default rootSaga;
