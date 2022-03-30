import React, { Component } from 'react';
import { Tabs } from 'antd';
import Objective from './Objective'
import Artificial from './Artificial';
import './index.css';

const { TabPane } = Tabs;
export default class Mark extends Component {
  render() {
    return (
      <div className="markContainer">
          <Tabs type="card">
              <TabPane tab="客观结果" key="1">
                  <Objective />
              </TabPane>
              <TabPane tab="人工阅卷" key="2">
                  <Artificial />
              </TabPane>
          </Tabs>
      </div>
  )
  }
}
