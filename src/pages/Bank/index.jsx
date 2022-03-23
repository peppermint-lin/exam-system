import React, { Component } from 'react';
import { Button, Tabs } from 'antd';
import Create from './Create'
import Share from './Share';
import Reference from './Reference'
import Outline from './Outline'
import './index.css';

const { TabPane } = Tabs;
export default class Bank extends Component {
    render() {
        return (
            <div className="bankContainer">
                <Button id='createNewOutline' shape='round' size='middle'> 创建新题库 </Button>
                <Tabs type="card">
                    <TabPane tab="我创建的" key="1">
                        <Create />
                    </TabPane>
                    <TabPane tab="全校共享" key="2">
                        <Share />
                    </TabPane>
                    <TabPane tab="参考题库" key="3">
                        <Reference />
                    </TabPane>
                    <TabPane tab="考纲管理" key="4">
                        <Outline />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}