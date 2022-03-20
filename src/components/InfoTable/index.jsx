import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

export default class InfoTable extends Component {

  render() {

    const {columns, data, showTotal, pageSize} = this.props

    const pagination = {
      showTotal: showTotal,
      total: data.length,
      pageSize: pageSize,
      showQuickJumper: true,
      showSizeChanger: false,
      position: ['bottomCenter'],
      style: {marginTop: '1.5%'}
    }

    const rowClassName = (record, index) => {
      let className = index % 2 ? 'even_row' : 'odd_row';
      return className
    }

    return <Table bordered columns={columns} dataSource={data}
      pagination={pagination} rowClassName={rowClassName} />;
  }
}