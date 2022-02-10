import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom'
import { Layout, Menu, Input } from 'antd';
import { MyIcon } from '../../assets/iconfont.js';
import { routes } from "../../router.js"
import './index.css'

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

export default class Frame extends Component {

    render() {
        return (
            <Layout>
                <Sider id='frameSider'
                breakpoint="lg"
                collapsedWidth="0"
                >
                    <div className="logo">
                        <h1 id='logoText'>考试系统教师端</h1>
                        <div id='logoBottom' />
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
                        {routes.map((route) => {
                            return <Menu.Item key={route.path} icon={route.icon}>
                            <Link to={route.path}><span className="menuTextChiness">{route.Chinese}</span> {route.English}</Link>
                            </Menu.Item>
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                        <Search size="large" placeholder=""
                            prefix={<MyIcon id='searchIcon' type='icon-yuejuan' />} enterButton="Search" />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {routes.map((route) => {
                                return <Route key={route.path} path={route.path} component={route.component}/>
                            })}
                            <Redirect to="/home" />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Examination system ©2022 Created by Gunara, God of darkness</Footer>
                </Layout>
            </Layout>
        );
    }
}
