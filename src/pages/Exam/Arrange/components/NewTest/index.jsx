import React, { Component } from 'react'
import { Form, Input, Button, Cascader, Select, DatePicker, TimePicker, message, Modal, Checkbox } from 'antd';
import { nanoid } from 'nanoid';
import { MyIcon } from '../../../../../assets/iconfont.js';
import NewTestCss from './index.module.css'

const { Option } = Select;
export default class NewTest extends Component {
    
  state = {isModalVisible: false}

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

  /* 试卷可选列表 */
  paperChildren = ["卷1", "卷2", "卷3"]

  /* 应试学生可选列表 */
  studentChildren = ["计算机181", "计算机191", "计算机201"]
  
  /* 监考教师可选列表 */
  teacherChildren = ["张三", "李四", "王五"]

  /* 级联选择发生变化时的回调 */
  cascaderChange(value) {
    console.log(value);
  }
  
  /* 选择器发生变化时的回调 */
  selectChange = (value) => {
    console.log(`selected ${value}`)
  }

  /* 日期发生变化时的回调 */
  dateChange = (date, dateString) => {
    console.log(date, dateString)
  }

  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  /* 发布考试的回调 */
  submit = () => {
      message.success({
          content: '发布考试成功！',
          style: {marginTop: '8.5vh'}
      })
  }

  /* 显示对话框 */
  showModal = () => {
      this.setState({isModalVisible: true})
  }

  /* 点击对话框确定按钮 */
  handleOk = () => {
      this.setState({isModalVisible: false})
      message.success({
          content: '设置成功！',
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
            <Select onChange={this.selectChange}>
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
                {this.paperChildren.map((item, index) => {
                    return <Option key={nanoid()} value={index+1}>{item}</Option>
                  })}
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
            style={{ marginBottom: 8 }}
            rules={[{ required: true }]}
          >
            <Button onClick={this.showModal}> &nbsp;Go To Now <MyIcon type='icon-fangzuobishezhi' /> </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 16, span: 4 }} style={{marginBottom: 0}}>
            <div className={NewTestCss.buttonWrapper}>
              <Button danger type="ghost" htmlType="reset" style={{marginRight: '10%'}}> 清空重置 </Button>
              <Button ghost type="primary" style={{marginRight: '10%'}}> 暂时保存 </Button>
              <Button type="primary" htmlType="submit" onClick={this.submit}> 立即发布 </Button>
            </div>
          </Form.Item>
        </Form>
        
        {/* 防作弊设置对话框 */}
        <Modal title="防作弊设置" maskClosable={false} visible={isModalVisible} onOk={this.handleOk} okText='提交'
            onCancel={this.handleCancel} cancelText='取消' centered width={580} bodyStyle={{
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'
            }}>
            <Form name="modifyInfo" style={{width: '100%'}} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}
                autoComplete="true" size="small" >
                <Checkbox.Group>
                  {/* 人脸身份认证 */}
                  <div className={NewTestCss.lineWrapper}>
                    <Checkbox value={1}></Checkbox>
                    <p style={{marginBottom: 0}}>&nbsp;考试前，进行人脸识别身份认证，可提前&nbsp;</p>
                    <Select>
                      <Option value='1'>1</Option>
                      <Option value='2'>2</Option>
                      <Option value='3'>3</Option>
                      <Option value='4'>4</Option>
                      <Option value='5'>5</Option>
                    </Select>
                    <p style={{marginBottom: 0}}>&nbsp;分钟进行人脸身份认证</p>
                  </div>
                  {/* 定时抓拍 */}
                  <div className={NewTestCss.lineWrapper}>
                    <Checkbox value={2}></Checkbox>
                    <p style={{marginBottom: 0}}>&nbsp;考试中，开启摄像头拍照监考，考生进入答题界面，每隔&nbsp;</p>
                    <Select>
                      <Option value='5'>5</Option>
                      <Option value='15'>15</Option>
                      <Option value='30'>30</Option>
                      <Option value='45'>45</Option>
                      <Option value='60'>60</Option>
                    </Select>
                    <p style={{marginBottom: 0}}>&nbsp;分钟定时抓拍照片</p>
                  </div>
                  {/* 切屏监控 */}
                  <div className={NewTestCss.lineWrapper}>
                    <Checkbox value={3}></Checkbox>
                    <p style={{marginBottom: 0}}>&nbsp;只允许考生切换考试页面&nbsp;</p>
                    <Select>
                      <Option value='1'>1</Option>
                      <Option value='2'>2</Option>
                      <Option value='3'>3</Option>
                      <Option value='4'>4</Option>
                      <Option value='5'>5</Option>
                    </Select>
                    <p style={{marginBottom: 0}}>&nbsp;次，否则强制交卷</p>
                  </div>
                  {/* 超时无操作 */}
                  <div className={NewTestCss.lineWrapper}>
                    <Checkbox value={4}></Checkbox>
                    <p style={{marginBottom: 0}}>&nbsp;答题时，超过&nbsp;</p>
                    <Select>
                      <Option value='1'>60</Option>
                      <Option value='2'>180</Option>
                      <Option value='3'>300</Option>
                      <Option value='4'>600</Option>
                      <Option value='5'>1800</Option>
                    </Select>
                    <p style={{marginBottom: 0}}>&nbsp;秒无操作，系统将强制交卷</p>
                  </div>
                  {/* 复制粘贴剪切 */}
                  <div className={NewTestCss.lineWrapper} style={{marginBottom: 0}}>
                    <Checkbox value={5}></Checkbox>
                    <p style={{marginBottom: 0}}>&nbsp;禁止考生复制、粘贴、剪切</p>
                  </div>
                </Checkbox.Group>
            </Form>
        </Modal>
      </div>
    )
  }
}
