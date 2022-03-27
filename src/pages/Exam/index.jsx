import React, { Component } from 'react';
import { Tabs } from 'antd';
import Arrange from './Arrange'
import Build from './Build';
import InvigilateList from './InvigilateList'
import InvigilateThumbnail from './InvigilateThumbnail';
import './index.css';

const { TabPane } = Tabs;
export default class Exam extends Component {

  state = {isList: false}

  /* 改变监考界面列表和缩略图的回调 */
  changeMode = () => {
    const {isList} = this.state
    if(isList) this.setState({isList: false})
    else this.setState({isList: true})
  }

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
            {this.state.isList ? <InvigilateList changeMode={this.changeMode} />
              : <InvigilateThumbnail changeMode={this.changeMode} />}
          </TabPane>
        </Tabs>
      </div>
    )
  }
}