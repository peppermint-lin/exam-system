import React, { Component } from 'react'
import { Form, Input, Button, Select  } from 'antd';
import NewTestCss from './index.module.css'

const { Option } = Select;

export default class NewTest extends Component {

  onFinish = (values) => {
    console.log('Success:', values);
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <div className={NewTestCss.leftWrapper}>
        <Form name="newTest"
          labelCol={{ span: 4 }}
          wrapperCol={{ offset: 1, span: 12 }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="true"
        >
          <Form.Item label="考试科目" name="subject"
            rules={[
              {
                required: true,
                message: '请输入考试科目',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div className={NewTestCss.lineWrapper}>
            <Form.Item label="考试类型" name="type"
              labelCol={{ span: 8 }}
              wrapperCol={{ offset: 1, span: 4 }}
              rules={[
                {
                  required: true,
                  message: '请选择考试类型',
                },
              ]}
            >
                <Select style={{ width: 120 }} onChange={this.handleChange}>
                  <Option value="final">期末考试</Option>
                  <Option value="middle">期中考试</Option>
                  <Option value="other">其他</Option>
                </Select>
            </Form.Item>
            <Form.Item label="考试章节" name="chapter" 
              labelCol={{ span: 8 }}
              wrapperCol={{ offset: 1, span: 4 }}
              rules={[
                {
                  required: true,
                  message: '请选择考试章节',
                },
              ]}
            >
                <Select style={{ width: 120 }} onChange={this.handleChange}>
                  <Option value="final">期末考试</Option>
                  <Option value="middle">期中考试</Option>
                  <Option value="other">其他</Option>
                </Select>
            </Form.Item>
          </div>

          <Form.Item wrapperCol={{ offset: 10, span: 4 }}>
            <div className={NewTestCss.lineWrapper}>
              <Button danger type="ghost" htmlType="reset" style={{marginRight: '10%'}}> 清空重置 </Button>
              <Button ghost type="primary" style={{marginRight: '10%'}}> 暂时保存 </Button>
              <Button type="primary" htmlType="submit"> 立即发布 </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
