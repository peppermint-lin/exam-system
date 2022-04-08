import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import CampusCss from './index.module.css'

export default class Campus extends Component {

    /* 新建考试校区的回调 */
    submit = () => {
        message.success({
            content: '新建校区成功！',
            style: {marginTop: '8.5vh'}
        })
    }

    render() {
        return (
            <div className={CampusCss.rightTop}>
                <Form name="newTest"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ offset: 1, span: 16 }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="true"
                    size="small"
                    >

                    <Form.Item label="校区名称" name="campus"
                      wrapperCol={{ offset: 1, span: 10 }}
                      style={{ marginTop: 15, marginBottom: 10 }}
                      rules={[{ required: true, message: '请输入校区名称'}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 20, span: 4 }} style={{marginBottom: 0}}>
                        <div className={CampusCss.buttonWrapper}>
                            <Button danger type="ghost" htmlType="reset" style={{marginRight: '10%'}}> 清空重置 </Button>
                            <Button type="primary" htmlType="submit" style={{marginRight: '20%'}}
                                onClick={this.submit}> 新建考试校区 </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
