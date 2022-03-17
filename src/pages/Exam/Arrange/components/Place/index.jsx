import React, { Component } from 'react'
import { Form, Input, Select, Switch, Button } from 'antd';
import { nanoid } from 'nanoid';
import PlaceCss from './index.module.css'

const { Option } = Select;
export default class Place extends Component {
  
    /* 所属校区可选列表 */
    campusBelong = ["A市B区", "B市C区", "C市D区"];

    /* 选择器发生变化时的回调 */
    selectChange = (value) => {
      console.log(`selected ${value}`);
    }

    render() {
        return (
            <div className={PlaceCss.rightBottom}>
                <Form name="newTest"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ offset: 1, span: 16 }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="true"
                    size="small"
                    >

                    <Form.Item label="地点名称" name="place"
                    wrapperCol={{ offset: 1, span: 10 }}
                    style={{ marginTop: 12, marginBottom: 10 }}
                    rules={[{ required: true, message: '请输入地点名称'}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="所属校区" name="belong"
                    wrapperCol={{ offset: 1, span: 10 }}
                    style={{ marginBottom: 10 }}
                    rules={[{ required: true, message: '请选择所属校区'}]}
                    >
                    <Select onChange={this.selectChange}>
                        {this.campusBelong.map((item, index) => {
                            return <Option key={nanoid} value={`belong${index}`}>{item}</Option>
                        })}
                    </Select>
                    </Form.Item>

                    <Form.Item label="可容纳人数上限" style={{marginBottom: 0}} required>
                        <Form.Item name="noSeptum"
                        rules={[{ required: true, message: '必填' }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginBottom: 10 }}>
                            <Input placeholder='不隔位就坐'/>
                        </Form.Item>

                        <Form.Item name="septum"
                        rules={[{ required: true, message: '必填' }]}
                        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                            <Input placeholder='隔位就坐'/>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item label="是否为机房" name="isComputerRoom"
                    wrapperCol={{ offset: 1, span: 10 }}
                    style={{ marginBottom: 10 }}
                    rules={[{ required: true, message: '请选择是否为机房'}]}
                    >
                        <Switch size='default' checkedChildren="是" unCheckedChildren="否" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 20, span: 4 }} style={{marginBottom: 0}}>
                        <div className={PlaceCss.buttonWrapper}>
                            <Button danger type="ghost" htmlType="reset" style={{marginRight: '10%'}}> 清空重置 </Button>
                            <Button type="primary" htmlType="submit" style={{marginRight: '20%'}}> 新建考试地点 </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
