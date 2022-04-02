import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Tabs } from 'antd';
import Objective from './Objective'
import Artificial from './Artificial';
import GoOver from './Artificial/GoOver';
import './index.css';

const { TabPane } = Tabs;
export default class Mark extends Component {

    state = {isList: false, activeKey: '1'}
  
    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
      const {isJump} = this.props.location.state || {}
      if(isJump) this.setState({activeKey: '2'})
    }
  
    /* 组件即将卸载的钩子 */
    componentWillUnmount = () => {
      this.setState({activeKey: '1'})
    }
    render() {
        return (
            <div className="markContainer">
                <Tabs type="card" activeKey={this.state.activeKey} 
                onChange={(key)=>{ this.setState({ activeKey: key })}}>
                    <TabPane tab="客观结果" key="1">
                        <Objective />
                    </TabPane>
                    <TabPane tab="人工阅卷" key="2">
                        <Route exact={true} key="/teacher/mark" path="/teacher/mark" component={Artificial} />
                        <Route exact={true} key="/teacher/mark/goover" path="/teacher/mark/goover" component={GoOver} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
