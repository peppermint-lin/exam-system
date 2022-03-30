import React, { Component } from 'react'
import { Form, Input, Button, Select, DatePicker, TimePicker } from 'antd';
import { nanoid } from 'nanoid';
import NewTaskCss from './index.module.css'

const { Option } = Select;
const { TextArea } = Input;

export default class NewTask extends Component {

  state = { textAreaValue: '' }
  
  /* 课程可选列表 */
  subjectChildren = ["计算机网络", "网络安全", "信息管理", "操作系统"]

  /* 接收对象可选列表 */
  receiver = ["张三", "李四", "王五"]

  render() {
    return (
      <div className={NewTaskCss.cardWrapper}>
        <Form name="newTask"
          labelCol={{ span: 6 }}
          wrapperCol={{ offset: 1, span: 16 }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="true"
          size="small"
        >

          <Form.Item label="任务标题" name="title"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '必填'}]}
          >
            <Input></Input>
          </Form.Item>
      
          <Form.Item label="任务课程及类型" style={{marginBottom: 0}} required>
            <Form.Item name="paper"
              rules={[{ required: true, message: '必填' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginBottom: 10 }}>
              <Select onChange={this.selectChange} placeholder="请选择所属课程">
                {this.subjectChildren.map((item, index) => {
                    return <Option key={nanoid()} value={index+1}>{item}</Option>
                  })}
              </Select>
            </Form.Item>
            <Form.Item name="grade"
              rules={[{ required: true, message: '必填' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
              <Select onChange={this.selectChange} placeholder="请选择任务类型模块">
                <Option value="bank">题库</Option>
                <Option value="build">组卷</Option>
                <Option value="invigilate">监考</Option>
              </Select>
            </Form.Item>
          </Form.Item>
      
          <Form.Item label="考试时间" style={{marginBottom: 0}} required>
            <Form.Item name="date"
              rules={[{ required: true, message: '请输入考试日期' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginBottom: 10 }}>
              <DatePicker onChange={this.dateChange} />
            </Form.Item>
            <Form.Item name="time"
              rules={[{ required: true, message: '请选择起止时间' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                <TimePicker.RangePicker />
            </Form.Item>
          </Form.Item>

          <Form.Item label="任务内容" name="content"
            wrapperCol={{ offset: 1, span: 14 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '必填'}]}
          >
            <TextArea
              value={this.state.textAreaValue}
              onChange={this.onChange}
              placeholder="请输入任务详情"
              autoSize={{ minRows: 3, maxRows: 15 }}
            />
          </Form.Item>

          <Form.Item label="接收对象" name="receiver"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '必填'}]}
          >
            <Select mode="multiple" allowClear style={{ width: '100%' }} onChange={this.selectChange}>
              {this.receiver.map((item, index) => {
                return <Option key={nanoid} value={`studentClass${index}`}>{item}</Option>
              })}
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 18, span: 4 }} style={{marginBottom: 0}}>
            <div className={NewTaskCss.buttonWrapper}>
              <Button danger type="ghost" htmlType="reset" style={{marginRight: '10%'}}> 清空重置 </Button>
              <Button type="primary" htmlType="submit" style={{marginRight: '20%'}}> 发布任务 </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
