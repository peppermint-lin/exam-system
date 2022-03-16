import React, { Component } from 'react';
import { Tabs } from 'antd';
import Arrange from './Arrange'
import Build from './Build';
import Invigilate from './Invigilate'
import './index.css';

const { TabPane } = Tabs;
export default class Exam extends Component {
  render() {
    return (
      <div className="examContainer">
        <Tabs type="card">
          <TabPane tab="考务安排" key="1">
            <Arrange />
          </TabPane>
          <TabPane tab="新建试卷" key="2">
            <Build />
          </TabPane>
          <TabPane tab="监考任务" key="3">
            <Invigilate />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}