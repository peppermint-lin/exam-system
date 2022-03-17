import React, { Component } from 'react'
import { Form, Input, Button, Cascader, Select, DatePicker, TimePicker } from 'antd';
import { nanoid } from 'nanoid';
import { MyIcon } from '../../../../../assets/iconfont.js';
import NewTestCss from './index.module.css'

const { Option } = Select;
export default class NewTest extends Component {

  /* 课程及章节信息 */
  subject = [
    // value：数据值；label：页面显示的标签；children：级联的下一层数据（其内对象属性同父层级）
    {
      value: "计算机网络",
      label: "计算机网络",
      children: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        }
      ]
    },
    {
      value: "网络安全",
      label: "网络安全",
      children: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        }
      ]
    },
    {
      value: "信息管理",
      label: "信息管理",
      children: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        }
      ]
    },
    {
      value: "操作系统",
      label: "操作系统",
      children: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        }
      ]
    }
  ]
  /* 应试学生可选列表 */
  studentChildren = ["计算机181", "计算机191", "计算机201"]
  /* 监考教师可选列表 */
  teacherChildren = ["张三", "李四", "王五"];

  /* 级联选择发生变化时的回调 */
  cascaderChange(value) {
    console.log(value);
  }
  
  /* 选择器发生变化时的回调 */
  selectChange = (value) => {
    console.log(`selected ${value}`);
  }

  /* 日期发生变化时的回调 */
  dateChange = (date, dateString) => {
    console.log(date, dateString);
  }

  onFinish = (values) => {
    console.log('Success:', values);
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  render() {
    return (
      <div className={NewTestCss.leftWrapper}>
        <Form name="newTest"
          labelCol={{ span: 6 }}
          wrapperCol={{ offset: 1, span: 16 }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="true"
          size="small"
        >

          <Form.Item label="考试科目及章节" name="subject"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '请选择考试科目及章节'}]}
          >
            <Cascader multiple options={this.subject} onChange={this.onChange} placeholder="请进行级联选择" />
          </Form.Item>

          <Form.Item label="考试类型" name="type"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '请选择考试类型'}]}
          >
            <Select onChange={this.handleChange}>
              <Option value="final">期末考试</Option>
              <Option value="middle">期中考试</Option>
              <Option value="other">其他</Option>
            </Select>
          </Form.Item>
      
          <Form.Item label="选择试卷" style={{marginBottom: 0}} required>
            <Form.Item name="paper"
              rules={[{ required: true, message: '请选择应用的试卷' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginBottom: 10 }}>
              <Select onChange={this.selectChange}>
                <Option value="1">卷1</Option>
                <Option value="2">卷2</Option>
                <Option value="3">卷3</Option>
              </Select>
            </Form.Item>
            <Form.Item name="grade"
              rules={[{ required: true, message: '请输入考试试卷总分' }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                <Input placeholder='请输入本卷总分' />
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

          <Form.Item label="考试地点" name="place"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '请选择考试地点' }]}
          >
            <Select onChange={this.selectChange}>
              <Option value="A12-101">教学楼A12-101</Option>
              <Option value="B7-203">教学楼B7-203</Option>
              <Option value="C4-305">教学楼C4-305</Option>
            </Select>
          </Form.Item>

          <Form.Item label="应试学生" name="student"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '请选择应试学生' }]}
          >
            <Select mode="multiple" allowClear style={{ width: '100%' }} onChange={this.selectChange}>
              {this.studentChildren.map((item, index) => {
                return <Option key={nanoid} value={`studentClass${index}`}>{item}</Option>
              })}
            </Select>
          </Form.Item>

          <Form.Item label="监考教师" name="teacher"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: '请选择监考教师' }]}
          >
            <Select mode="multiple" allowClear style={{ width: '100%' }} onChange={this.selectChange}>
              {this.teacherChildren.map((item, index) => {
                return <Option key={nanoid} value={`teacher${index}`}>{item}</Option>
              })}
            </Select>
          </Form.Item>

          <Form.Item label="防作弊设置" name="teacher"
            wrapperCol={{ offset: 1, span: 10 }}
            style={{ marginBottom: 10 }}
            rules={[{ required: true }]}
          >
            <Button> &nbsp;Go To Now <MyIcon type='icon-fangzuobishezhi' /> </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 4 }} style={{marginBottom: 0}}>
            <div className={NewTestCss.buttonWrapper}>
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
