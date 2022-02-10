import React, { Component } from 'react'
import { MyIcon } from '../../assets/iconfont.js';
import avaterPng from './avatar.png'
import modifyInformation from './modify.png'
import './index.css'

export default class InfoCard extends Component {
    userInfo = {
        "avatar": avaterPng,
        "name": "张三",
        "nickname": "Zhang San",
        "jobNumber": "20191522",
        "title": "副教授",
        "e-mail": "20191520@school.edu.cn",
        "landline": "0571-28861522",
        "mobile": "15315201522",
        "office": "办公楼A-522",
        "dorm": "寝室楼B-502"
    }

    classInfo = [
        {"name": "计算机网络", "number": 1.25, "icon": <MyIcon type='icon-up' />},
        {"name": "计算机网络实践", "number": 0, "icon": <MyIcon type='icon-unchanged' />},
        {"name": "网络安全", "number": 0.37, "icon": <MyIcon type='icon-down' />},
        {"name": "网络安全实践", "number": 0, "icon": <MyIcon type='icon-unchanged' />}
    ]

    render() {
        return (
            <div className='cardWrapper'>
                <div className='simpleInfo'>
                    <img id='avatar' src={this.userInfo.avatar} alt='用户头像' />
                    <h1 id='name'> {this.userInfo.name} </h1>
                    <p id='miniInfo'> 昵称：{this.userInfo.nickname} <br /> 昵称：{this.userInfo.jobNumber} </p>
                </div>
                <div className='cardDashedWrapper'>
                    <div className='dashed'></div>
                    <div className='topCircleBg'></div>
                    <div className='topCircle'></div>
                    <div className='bottomCircleBg'></div>
                    <div className='bottomCircle'></div>
                </div>
                <div className='detailInfo'>
                    <img id='modify' src={modifyInformation} alt='修改信息'></img>
                    <div className='infoContent'>
                        <p> 职称：{this.userInfo.title} </p>
                        <p> 邮箱：{this.userInfo['e-mail']} </p>
                        <p> 座机：{this.userInfo.landline} </p>
                        <p> 手机：{this.userInfo.mobile} </p>
                        <p> 办公室：{this.userInfo.office} </p>
                        <p> 校内住址：{this.userInfo.dorm} </p>
                    </div>
                </div>
                <div className='cardDashedWrapper'>
                    <div className='dashed'></div>
                    <div className='topCircleBg'></div>
                    <div className='topCircle'></div>
                    <div className='bottomCircleBg'></div>
                    <div className='bottomCircle'></div>
                </div>
                <div className='classInfo'>
                    <h4>正在授课</h4>
                    <div className='classLine' style={{fontWeight: "600", color: "#555"}}>
                        <p className='classInfoContent'>课程名</p>
                        <p className='classInfoContent'>最近考试均分变化</p>
                    </div>
                    {this.classInfo.map(item => {
                        return (
                            <div className='classLine'>
                                <p className='classInfoContent'>{item.name}</p>
                                <div> {item.number !== 0 ? item.number : "  "} &nbsp; {item.icon} </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
