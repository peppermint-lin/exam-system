import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd';
import { nanoid } from 'nanoid';
import NewNoticeCss from './index.module.css'

const { Option } = Select;
const { TextArea } = Input;

export default class NewNotice extends Component {

  state = { textAreaValue: '' }

  /* 接收对象可选列表 */
  receiver = ["张三", "李四", "王五"]

  render() {
    return (
      <div className={NewNoticeCss.cardWrapper}>
        <Form name="newNotice"
          labelCol={{ span: 5 }}
          wrapperCol={{ offset: 1, span: 16 }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="true"
          size="small"
        >

          <Form.Item label="公告标题" name="title"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '必填'}]}
          >
            <Input></Input>
          </Form.Item>

          <Form.Item label="公告内容" name="content"
            wrapperCol={{ offset: 1, span: 16 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '必填'}]}
          >
            <TextArea
              value={this.state.textAreaValue}
              onChange={this.onChange}
              placeholder="请输入公告详情"
              autoSize={{ minRows: 6, maxRows: 15 }}
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
            <div className={NewNoticeCss.buttonWrapper}>
              <Button danger type="ghost" htmlType="reset" style={{marginRight: '10%'}}> 清空重置 </Button>
              <Button type="primary" htmlType="submit" style={{marginRight: '20%'}}> 发布公告 </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
