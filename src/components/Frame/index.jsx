import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link, Route, Redirect } from 'react-router-dom'
import { Layout, Menu, Input } from 'antd';
import { MyIcon } from '../../assets/iconfont.js';
import { routes } from "../../router.js"
import './index.css'

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

class Frame extends Component {

    state = {current: "/teacher/home"}

    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
        this.props.history.listen( event => {
            this.setState({current: event.pathname})
        })
    }

    render() {

        return (
            <Layout hasSider>
                {/* 左侧导航栏 */}
                <Sider id='frameSider'
                    // breakpoint="lg"
                    // collapsedWidth="0"
                    style={{
                        overflow: 'auto', height: '100vh', position: 'fixed',
                        left: 0, top: 0, bottom: 0, zIndex: 9999
                    }}
                >
                    {/* 产品Logo */}
                    <div className="logo">
                        <h1 id='logoText'>考试系统教师端</h1>
                        <div id='logoBottom' />
                    </div>
                    {/* 导航标签 */}
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} selectedKeys={[this.state.current]}>
                        {routes.map((route) => {
                            return <Menu.Item key={route.path} icon={route.icon}>
                            <Link to={route.path}><span className="menuTextChiness">{route.Chinese}</span> {route.English}</Link>
                            </Menu.Item>
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                {/* <Layout> */}
                    {/* 右侧顶部搜索栏 */}
                    <Header className="site-layout-sub-header-background"
                        style={{ position: "fixed", zIndex: 1999, width: '100%', right: 0, padding: 0 }}>
                        {/* style={{ padding: 0 }}> */}
                        <Search size="large" placeholder=""
                            prefix={<MyIcon id='searchIcon' type='icon-yuejuan' />} enterButton="Search" />
                    </Header>
                    {/* 右侧中间正文 */}
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {routes.map((route) => {
                                return <Route key={route.path} path={route.path} component={route.component}/>
                            })}
                            <Redirect to="/teacher/home" />
                        </div>
                    </Content>
                    {/* 右侧底部版权栏 */}
                    <Footer style={{ textAlign: 'center' }}>Examination system ©2022 Created by Gunara, God of darkness</Footer>
                </Layout>
            </Layout>
        );
    }
}

// 组件外包裹withRouter，使组件实例对象的props中具有history对象
export default withRouter(Frame)