import { combineReducers } from 'redux';
import elevators from './elevators';

const appReducer = combineReducers({
  elevators,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
