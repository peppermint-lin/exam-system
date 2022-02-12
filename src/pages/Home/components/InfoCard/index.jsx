import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { MyIcon } from '../../../../assets/iconfont.js';
import avaterPng from './avatar.png'
import modifyInformation from './modify.png'
import InfoCardCss from'./index.module.css'

export default class InfoCard extends Component {
    /* 当前登录用户的个人信息 */
    userInfo = {
        "avatar": avaterPng, //网络图片地址字符串
        "name": "张三", //姓名
        "nickname": "Zhang San", //昵称
        "jobNumber": "20191522", //工号
        "title": "副教授", //职称
        "e-mail": "20191520@school.edu.cn", //邮箱
        "landline": "0571-28861522", //座机
        "mobile": "15315201522", //手机
        "office": "办公楼A-522", //办公室
        "dorm": "寝室楼B-502" //校内住址
    }

    /* 当前登录用户正在授课的均分变化信息 */
    classInfo = [
        // name：课程名；number：均分增减幅度；icon：均分变化图标（增-up、减-down、不变-unchanged）
        {"name": "计算机网络", "number": 1.25, "icon": "up"},
        {"name": "计算机网络实践", "number": 0, "icon": "unchanged"},
        {"name": "网络安全", "number": 0.37, "icon": "down"},
        {"name": "网络安全实践", "number": 0, "icon": "unchanged"}
    ]

    render() {
        return (
            <div className={InfoCardCss.cardWrapper}>
                {/* 简要信息部分 */}
                <div className={InfoCardCss.simpleInfo}>
                    <img id={InfoCardCss.avatar} src={this.userInfo.avatar} alt='用户头像' />
                    <h1 id={InfoCardCss.name}> {this.userInfo.name} </h1>
                    <p id={InfoCardCss.miniInfo}> 昵称：{this.userInfo.nickname} <br /> 昵称：{this.userInfo.jobNumber} </p>
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
                    <img id={InfoCardCss.modify} src={modifyInformation} alt='修改信息'></img>
                    <div className={InfoCardCss.infoContent}>
                        <p> 职称：{this.userInfo.title} </p>
                        <p> 邮箱：{this.userInfo['e-mail']} </p>
                        <p> 座机：{this.userInfo.landline} </p>
                        <p> 手机：{this.userInfo.mobile} </p>
                        <p> 办公室：{this.userInfo.office} </p>
                        <p> 校内住址：{this.userInfo.dorm} </p>
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
