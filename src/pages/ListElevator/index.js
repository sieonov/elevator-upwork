import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import './style.scss';

const ListElevator = (props) => {
  return (
    <div className="list-elevator">
      <h1>List Elevator</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListElevator);
