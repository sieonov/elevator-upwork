import { Table as TableAnt } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { getElevatorList } from '../../actions/elevators';
import { tablePage, tableSize } from '../../lib/constants';
import './style.scss';

const ListElevator = (props) => {
  const [elevatorList, setElevatorList] = useState([]);
  const [pagination, setPagination] = useState({
    page: tablePage,
    size: tableSize,
  });

  const getListElevators = (pagination) => {
    props.getElevatorList({
      url: '/elevators',
      success: (res) => {
        if (res.success) {
          setElevatorList(res.data);
        }
        console.log('Successfully getListElevators', res);
      },
      fail: (err) => {
        console.log('Error getListElevators:', err);
      },
    });

    // get mockups
    // getList(pagination).then((data) => {
    //   setPagination({ ...pagination, total: data.total });
    //   setElevatorList(data.items);
    // });
  };

  useEffect(() => {
    getListElevators(pagination);
  }, []);

  // const onPaginationChange = (page, size) => {
  //   getListElevators({ ...pagination, page: page, size: size });
  // };
  const handleSizeChange = (page, size) => {
    setPagination({ ...pagination, page: page, size: size });
    // getListElevators({ ...pagination, page: page, size: size });
  };
  return (
    <Container className="list-elevator">
      <h1 className="py-4">Elevator List</h1>
      <TableAnt
        columns={[
          {
            title: 'Serial Number',
            dataIndex: 'sn',
            key: '1',
            render: (value, item) => {
              return <a href={item.link}>{value}</a>;
            },
            sorter: (a, b) => (a.sn > b.sn ? 1 : -1),
          },
          {
            title: 'Firmware Version ',
            dataIndex: 'firmwareVersion',
            key: '2',
            sorter: (a, b) => (a.firmwareVersion > b.firmwareVersion ? 1 : -1),
          },
          {
            title: 'Factory Code',
            dataIndex: 'factoryCode',
            key: '3',
            sorter: (a, b) => (a.factoryCode > b.factoryCode ? 1 : -1),
          },
          {
            title: 'Device',
            dataIndex: 'device',
            key: '4',
            sorter: (a, b) => (a.device > b.device ? 1 : -1),
          },
          {
            title: 'Time',
            dataIndex: 'time',
            key: '5',
            sorter: (a, b) => {
              return a.time > b.time ? 1 : -1;
            },
          },

          {
            title: 'Date',
            dataIndex: 'date',
            key: '6',
            sorter: (a, b) => (a.date > b.date ? 1 : -1),
          },
          {
            title: 'Car Door Openings',
            dataIndex: 'carDoorOpenings',
            key: '7',
            sorter: (a, b) => (a.carDoorOpenings > b.carDoorOpenings ? 1 : -1),
          },
          // {
          //   title: 'Action',
          //   dataIndex: 'sn',
          //   key: '8',
          //   render: (value, item) => {
          //     return '';
          //   },
          // },
        ]}
        dataSource={elevatorList}
        pagination={{
          pageSize: pagination.size,
          showSizeChanger: true,
          showQuickJumper: true,
          onShowSizeChange: handleSizeChange,
        }}
      />
      {/* {elevatorList.length && <div />}
      <Pagination
        onChange={onPaginationChange}
        showQuickJumper
        showSizeChanger
        onShowSizeChange={handleSizeChange}
        pageSize={pagination.size}
        current={pagination.page}
        total={pagination.total}
      /> */}
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { getElevatorList };

export default connect(mapStateToProps, mapDispatchToProps)(ListElevator);
