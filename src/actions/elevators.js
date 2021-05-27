import * as ElevatorConstants from '../constants/Elevators';
import { createAction } from 'redux-actions';

export const getElevatorList = createAction(ElevatorConstants.GET_ELEVATOR_LIST)
export const addElevator = createAction(ElevatorConstants.POST_ELEVATOR)
