import React, { Component } from 'react';
import { Button, Tabs } from 'antd';
import Teacher from './Teacher';
import Student from './Student';
import Character from './Character';
import Handle from './Handle';
import Notice from './Notice';
import './index.css';

const { TabPane } = Tabs;
export default class Manage extends Component {
  render() {
    return (
      <div className="manageContainer">
          <div className='createButtonWrapper'>
            <Button id='createNewCharacter' shape='round' size='middle'> 创建新角色 </Button>
            <Button id='createNewUser' shape='round' size='middle'> 创建新用户 </Button>
          </div>
          <Tabs type="card">
              <TabPane tab="教师用户" key="1">
                  <Teacher />
              </TabPane>
              <TabPane tab="学生用户" key="2">
                  <Student />
              </TabPane>
              <TabPane tab="角色管理" key="3">
                  <Character />
              </TabPane>
              <TabPane tab="操作审批" key="4">
                  <Handle />
              </TabPane>
              <TabPane tab="系统公告" key="5">
                  <Notice />
              </TabPane>
          </Tabs>
      </div>
    )
  }
}
