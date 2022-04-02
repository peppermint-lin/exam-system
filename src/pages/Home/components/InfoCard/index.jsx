import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'
import { MyIcon } from '../../../../assets/iconfont.js'
import InfoCardCss from'./index.module.css'

export default class InfoCard extends Component {
    
    state = {userInfo: {}}

    /* 当前登录用户正在授课的均分变化信息 */
    classInfo = [
        // name：课程名；number：均分增减幅度；icon：均分变化图标（增-up、减-down、不变-unchanged）
        {"name": "计算机网络", "number": 1.25, "icon": "up"},
        {"name": "计算机网络实践", "number": 0, "icon": "unchanged"},
        {"name": "网络安全", "number": 0.37, "icon": "down"},
        {"name": "网络安全实践", "number": 0, "icon": "unchanged"}
    ]

    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
        axios.post("https://api.sciuridae.xyz/server/userInfo.php").then(
            response => this.setState({userInfo: response.data})
        )
    }

    /* 组件即将卸载的钩子 */
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{ return }
    }

    render() {
        return (
            <div className={InfoCardCss.cardWrapper}>
                {/* 简要信息部分 */}
                <div className={InfoCardCss.simpleInfo}>
                    <img id={InfoCardCss.avatar} src={this.state.userInfo.avatar} alt='用户头像' />
                    <h1 id={InfoCardCss.name}> {this.state.userInfo.name} </h1>
                    <p id={InfoCardCss.miniInfo}> 昵称：{this.state.userInfo.nickname} <br /> 昵称：{this.state.userInfo.jobNumber} </p>
                </div>
                {/* 半圆虚线 */}
                <div className={InfoCardCss.cardDashedWrapper}>
                    <div className={InfoCardCss.dashed}></div>
                    <div className={InfoCardCss.topCircleBg}></div>
                    <div className={InfoCardCss.topCircle}></div>
                    <div className={InfoCardCss.bottomCircleBg}></div>
                    <div className={InfoCardCss.bottomCircle}></div>
                </div>
                {/* 详细信息部分 */}
                <div className={InfoCardCss.detailInfo}>
                    <img id={InfoCardCss.modify} src='http://api.sciuridae.xyz/image/Home/modify.png' alt='修改信息'></img>
                    <div className={InfoCardCss.infoContent}>
                        <p> 职称：{this.state.userInfo.title} </p>
                        <p> 邮箱：{this.state.userInfo['e-mail']} </p>
                        <p> 座机：{this.state.userInfo.landline} </p>
                        <p> 手机：{this.state.userInfo.mobile} </p>
                        <p> 办公室：{this.state.userInfo.office} </p>
                        <p> 校内住址：{this.state.userInfo.dorm} </p>
                    </div>
                </div>
                {/* 半圆虚线 */}
                <div className={InfoCardCss.cardDashedWrapper}>
                    <div className={InfoCardCss.dashed}></div>
                    <div className={InfoCardCss.topCircleBg}></div>
                    <div className={InfoCardCss.topCircle}></div>
                    <div className={InfoCardCss.bottomCircleBg}></div>
                    <div className={InfoCardCss.bottomCircle}></div>
                </div>
                {/* 授课信息部分 */}
                <div className={InfoCardCss.classInfo}>
                    <h4>正在授课</h4>
                    <div className={InfoCardCss.classLine} style={{fontWeight: "600", color: "#555"}}>
                        <p className={InfoCardCss.classInfoContent}>课程名</p>
                        <p className={InfoCardCss.classInfoContent}>最近考试均分变化</p>
                    </div>
                    {this.classInfo.map(item => {
                        return (
                            <div key={nanoid()} className={InfoCardCss.classLine}>
                                <p className={InfoCardCss.classInfoContent}>{item.name}</p>
                                <div> 
                                    {item.number !== 0 ? item.number : "  "} &nbsp; 
                                    <MyIcon type={`icon-${item.icon}`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
