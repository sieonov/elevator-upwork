import { set } from 'lodash';
import { elevatorParams, carDoorOpening, inputParams, voltagesLevel, voltageTH, outputFunc, outputParams } from './constants';

export const binArrToNumber = (arr) => (
  arr.reduce((t, currentValue) => t = t * 2 + currentValue)
)

export const calcElevatorConfig = (val) => {
  let binArray = Array(16);
  for (let i = 0; i < 4; i++) {
    let num = parseInt(val[i], 16);
    Array.from(Array(4)).forEach((value, idx) => {
      binArray[i * 4 + 3 - idx] = (num % 2);
      num = Math.floor(num / 2);
    });
  }

  console.log('binArray:', binArray);

  let elevatorConfig = {};
  // b2 - b0
  let idx = binArrToNumber(binArray.slice(13, 16));
  console.log('idx:', idx);
  set(elevatorConfig, elevatorParams[0], carDoorOpening[idx]);
  // b3
  set(elevatorConfig, elevatorParams[1], binArrToNumber(binArray.slice(12, 13)) ? 'Used' : 'Unused');
  // b4
  set(elevatorConfig, elevatorParams[2], binArrToNumber(binArray.slice(11, 12)) ? 'Used' : 'Unused');
  // b5
  set(elevatorConfig, elevatorParams[3], binArrToNumber(binArray.slice(10, 11)) ? 'Valid' : 'Invalid');
  // b8 - b6
  set(elevatorConfig, elevatorParams[4], `${binArrToNumber(binArray.slice(7, 10))} Seconds`);
  return elevatorConfig;
}

export const calcInputConfig = (val) => {
  let inputConfig = {};

  for (let inputI = 0; inputI < 12; inputI++) {
    let binArray = Array(8);
    for (let i = 0; i < 2; i++) {
      let num = parseInt(val[inputI][i], 16);
      Array.from(Array(4)).forEach((value, idx) => {
        binArray[i * 4 + 3 - idx] = (num % 2);
        num = Math.floor(num / 2);
      });
    }

    // b2 - b0
    let idx = binArrToNumber(binArray.slice(5, 8));
    let thIdx = binArrToNumber(binArray.slice(1, 4));
    console.log('idx:', idx, thIdx);
    set(
      inputConfig,
      inputParams[inputI],
      [
        `${voltagesLevel[idx]}${binArray[4] ? 'Ct' : 'V'}`,
        voltageTH[thIdx],
        binArray[0] ? 'Active High' : 'Active Low',
      ]
    );
  }

  return inputConfig;
}

export const calcOutputConfig = (val) => {
  let outputConfig = {};

  for (let outputI = 0; outputI < 4; outputI++) {
    let binArray = Array(8);
    for (let i = 0; i < 2; i++) {
      let num = parseInt(val[outputI][i], 16);
      Array.from(Array(4)).forEach((value, idx) => {
        binArray[i * 4 + 3 - idx] = (num % 2);
        num = Math.floor(num / 2);
      });
    }

    // b4 - b0
    let idx = binArrToNumber(binArray.slice(3, 8));
    console.log('idx:', idx);
    set(
      outputConfig,
      outputParams[outputI],
      [
        outputFunc[idx],
        binArray[2] ? 'Active High' : 'Active Low',
      ]
    );
  }

  return outputConfig;
}
