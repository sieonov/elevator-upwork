import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Table } from 'reactstrap';
import get from 'lodash/get';
import './style.scss';

const ListElevator = (props) => {
  const [elevatorList, setElevatorList] = useState([]);

  useEffect(() => {
    setElevatorList([{ sn: 'test', firmwareVersion: '1.2', factoryCode: '5', device: 'Microsoft', time: '10-23', date: '2020-10-20', carDoorOpenings: 'r', link: '/q-s-e?d="A100-DLM"&s="15785"&fv="1.9.2"&fc="31458"&e="00A3"&i1="C4"&i2="4A"&i3="C4"&i4="C4"&i5="C4"&i6="C4"&i7="C4"&i8="C4"&i9="C4"&i10="C4"&i11="C4"&i12="C4"&o1="21"&o2="22"&o3="04"&o4="35"' }]);
  }, []);

  return (
    <Container className="list-elevator">
      <h1 className="py-4">Elevator List</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Serial Number (s)</th>
            <th>Firmware Version (fv)</th>
            <th>Factory Code (fc)</th>
            <th>Device</th>
            <th>Time</th>
            <th>Date</th>
            <th>Car Door Openings</th>
          </tr>
        </thead>
        <tbody>
          {
            elevatorList.map((elevator) => (
              <tr onClick={() => {props.history.push(get(elevator, 'link'))}}>
                <td>{get(elevator, 'sn')}</td>
                <td>{get(elevator, 'firmwareVersion')}</td>
                <td>{get(elevator, 'factoryCode')}</td>
                <td>{get(elevator, 'device')}</td>
                <td>{get(elevator, 'time')}</td>
                <td>{get(elevator, 'date')}</td>
                <td>{get(elevator, 'carDoorOpenings')}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListElevator);
