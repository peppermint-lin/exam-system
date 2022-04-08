import React, { Component } from 'react'
import { Button, Tabs, Modal, Form, Input, Select, message } from 'antd'
import { nanoid } from 'nanoid'
import Create from './Create'
import Share from './Share'
import Reference from './Reference'
import Outline from './Outline'
import './index.css'

const { TabPane } = Tabs;
const { Option } = Select;
export default class Bank extends Component {

    state = {activeKey: '1', isModalVisible: false}

    /* 所属科目的可选列表 */
    subjectChildren = ["计算机网络", "网络安全", "信息管理", "操作系统"]
  
    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
      const {isJump, whichTask} = this.props.location.state || {}
      if(isJump && whichTask !== 'create') this.setState({activeKey: '4'})
    }
  
    /* 组件即将卸载的钩子 */
    componentWillUnmount = () => {
      this.setState({activeKey: '1'})
    }

    /* 显示对话框 */
    showModal = () => {
        this.setState({isModalVisible: true})
    }

    /* 点击对话框确定按钮 */
    handleOk = () => {
        this.setState({isModalVisible: false})
        message.success({
            content: '创建题库成功！',
            style: {marginTop: '8.5vh'}
        })
    }

    /* 点击对话框取消按钮 */
    handleCancel = () => {
      this.setState({isModalVisible: false})
    }

    render() {
        const {isModalVisible} = this.state
        return (
            <div className="bankContainer">
                <Button id='createNewOutline' shape='round' size='middle'
                    onClick={this.showModal}> 创建新题库 </Button>
                <Tabs type="card" activeKey={this.state.activeKey} 
                    onChange={(key)=>{ this.setState({ activeKey: key })}}>
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
                
                {/* 创建新题库对话框 */}
                <Modal title="创建新题库" maskClosable={false} visible={isModalVisible} onOk={this.handleOk} okText='提交'
                    onCancel={this.handleCancel} cancelText='取消' centered bodyStyle={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'
                    }}>
                    <Form name="createNewBank" style={{width: '80%'}}
                        initialValues={{belongSubject: this.subjectChildren[0], sharingWay: '私有'}}>
                        <Form.Item label="题库名称" name="nickname" style={{ marginBottom: '5%' }}
                            rules={[{ required: true, message: '必填' }]} >
                            <Input />
                        </Form.Item>
                        <Form.Item label="所属课程" name="belongSubject" style={{ marginBottom: '5%', width: '100%' }} required>
                            <Select allowClear style={{width: '100%'}}>
                                {this.subjectChildren.map((item) => {
                                    return <Option key={nanoid()} value={item}>{item}</Option>
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item label="共享方式" name="sharingWay" style={{ marginBottom: '5%', width: '100%' }} required>
                            <Select allowClear style={{width: '100%'}}>
                                <Option value='private'>私有</Option>
                                <Option value='viewable'>可查看</Option>
                                <Option value='canForm'>可组卷</Option>
                            </Select>
                        </Form.Item>
                        <p style={{color: '#ACACAC', marginBottom: 0}}>注：“共享方式”若设置为“可查看”或“可组卷”即为非私有，需要等管理员审核通过后方可实现操作</p>
                    </Form>
                </Modal>
            </div>
        )
    }
}
