import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'
import LoginCss from './index.module.css'


export default class Login extends Component {

    state = {loginFlag: false}

    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
        this.setState({loginFlag: true})
    }

    /* 单击登录按钮时的回调 */
    clickLogin = () => {
        if(this.state.loginFlag){
            this.props.history.replace('/teacher')
        }
    }
    
    onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

    render() {
        return (
            <div className={LoginCss.mainWrapper}>
                <div className={LoginCss.cardWrapper}>
                    <h1 style={{ marginBottom: '10%', fontWeight: 'bold' }}>Login</h1>
                    <Form className={LoginCss.formWrapper}>
                        <Form.Item label="Username" name="username" style={{alignSelf: 'flex-start'}}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        > <Input /> </Form.Item>

                        <Form.Item label="&nbsp;Password" name="password" style={{alignSelf: 'flex-start'}}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        > <Input type="password" /> </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Link> Forgot password </Link>
                        </Form.Item>

                        <Form.Item style={{marginBottom: 10, width: '100%'}}>
                            <Button type="primary" htmlType="submit" onClick={this.clickLogin}
                                style={{width: '100%', 
                                backgroundImage: 'linear-gradient(60deg , #606BFF, #82B8FF)'}}> 
                            Login In </Button>
                        </Form.Item>
                        
                        <Link style={{width: '100%', textAlign: 'center'}}> Or register now! </Link>
                    </Form>
                </div>
            </div>
        )
    }
}
