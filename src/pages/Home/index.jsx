import React, { Component } from 'react';
import InfoCard from './components/InfoCard';
import TaskList from './components/TaskList';
import BottomCard from './components/BottomCard';
import HomeCss from './index.module.css'

export default class Home extends Component {
  render() {
    return (
      <div className={HomeCss.mainWrapper}>
        <div className={HomeCss.firstLineWrapper}>
          {/* 个人信息卡片 */}
          <InfoCard />
          {/* 任务清单卡片 */}
          <TaskList />
        </div>
        <div className={HomeCss.secondLineWrapper}>
          <BottomCard />
        </div>
      </div>
    )
  }
}
