import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Table } from 'reactstrap';
import get from 'lodash/get';
import { calcElevatorConfig, calcInputConfig, calcOutputConfig } from '../../lib/utils';
import { elevatorParams, inputParams, outputParams } from '../../lib/constants';
import './style.scss';

const ElevatorDetails = (props) => {
  const [elevatorConfig, setElevatorConfig] = useState({});
  const [inputConfig, setInputConfig] = useState({});
  const [outputConfig, setOutputConfig] = useState({});

  useEffect(() => {
    // Elevator Configuration
    const params = new URLSearchParams(props.location.search);
    const elevatorVal = params.get('e').substr(1, 4);
    console.log('Elevator Value', elevatorVal);
    const inputVal = Array.from({ length: 12 }, (_, i) => i + 1).map((idx) => (params.get(`i${idx}`).substr(1, 2)))
    const outputVal = Array.from({ length: 4 }, (_, i) => i + 1).map((idx) => (params.get(`o${idx}`).substr(1, 2)))
    setElevatorConfig(calcElevatorConfig(elevatorVal));
    setInputConfig(calcInputConfig(inputVal));
    setOutputConfig(calcOutputConfig(outputVal));
  }, []);

  console.log('Elevator Configuration', elevatorConfig);

  return (
    <Container className="elevator-details">
      <h1 className="p-4">Elevator Details Screen</h1>
      <h4 className="text-center">ELEVATOR CONFIGURATION</h4>
      <Table striped>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            elevatorParams.map((elevatorParam) => (
              <tr>
                <td>{elevatorParam}</td>
                <td>{get(elevatorConfig, elevatorParam)}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <h4 className="mt-4 text-center">INPUTS CONFIGURATION</h4>
      <Table striped>
        <thead>
          <tr>
            <th>Input Name</th>
            <th>Voltage</th>
            <th>TH</th>
            <th>Logic</th>
          </tr>
        </thead>
        <tbody>
          {
            inputParams.map((inputParam) => (
              <tr>
                <td>{inputParam}</td>
                <td>{get(inputConfig, `${inputParam}.0`)}</td>
                <td>{get(inputConfig, `${inputParam}.1`)}</td>
                <td>{get(inputConfig, `${inputParam}.2`)}</td>
                <td>{get(inputConfig, `${inputParam}.3`)}</td>
                <td />
              </tr>
            ))
          }
        </tbody>
      </Table>

      <h4 className="mt-4 text-center">OUTPUTS CONFIGURATION</h4>
      <Table striped>
        <thead>
          <tr>
            <th>Output Name</th>
            <th>Function</th>
            <th>Logic</th>
          </tr>
        </thead>
        <tbody>
          {
            outputParams.map((outputParam) => (
              <tr>
                <td>{outputParam}</td>
                <td>{get(outputConfig, `${outputParam}.0`)}</td>
                <td>{get(outputConfig, `${outputParam}.1`)}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>

    </Container>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ElevatorDetails);
