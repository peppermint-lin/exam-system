import React, { Component } from 'react'
import { Pie } from '@ant-design/plots';
import BottomCardCss from './index.module.css'

export default class BottomCard extends Component {

    /* 考纲覆盖率百分比环图数据 */
    CoverPie = () => {
        // 第二个对象的value值为覆盖率的小数形式
        const data = [
            { type: '未覆盖', value: 0.15 },
            { type: '覆盖', value: 0.85 }
        ];
        const config = {
            // appendPadding: 10,
            data,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.6,
            legend: false,
            color: ['#F2F2F2', 'l(60) 0:#82B8FF 1:#606BFF'],
            tooltip: {
                showContent: false
            },
            label: {
                type: 'spider',
                offset: '-50%'
            },
            statistic: {
                title: false,
                content: {
                    style: {
                        whiteSpace: 'pere-wrap',
                        ovrflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '1.2em',
                        color: "#3B90FF"
                    },
                    content: `${data[1].value * 100}%`,
                },
            },
        };
        return <Pie {...config} />;
    };

    /* 历年重复率百分比环图数据 */
    RepeatPie = () => {
        // 第二个对象的value值为重复率的小数形式
        const data = [
            { type: '未重复', value: 0.85 },
            { type: '重复', value: 0.15 }
        ];
        const config = {
            // appendPadding: 10,
            data,
            angleField: 'value',
            colorField: 'type',
            radius: 1,
            innerRadius: 0.6,
            legend: false,
            color: ['#F2F2F2', 'l(60) 0:#82B8FF 1:#606BFF'],
            tooltip: {
                showContent: false
            },
            label: {
                type: 'spider',
                offset: '-50%'
            },
            statistic: {
                title: false,
                content: {
                    style: {
                        whiteSpace: 'pere-wrap',
                        ovrflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: '1.2em',
                        color: "#3B90FF"
                    },
                    content: `${data[1].value * 100}%`,
                },
            },
        };
        return <Pie {...config} />;
    };

    /* 方框内的工作数据 */
    workingData = {
        "courses": 4, //任课门数
        "exams": 3, //出卷次数
        "banks": 3500, //题库录入
        "invigilations": 1 //监考次数
    }

    render() {
        return (
            <div className={BottomCardCss.cardWrapper}>
                {/* 工作数据部分 */}
                <div className={BottomCardCss.workingData}>
                    <h3>工作数据</h3>
                    <div className={BottomCardCss.dataWrapper}>
                        {/* 环图 */}
                        <div className={BottomCardCss.dataItem}>
                            <this.CoverPie />
                            <p>历史出卷平均考纲覆盖率</p>
                        </div>
                        <div className={BottomCardCss.dataItem} style={{marginLeft: "-2%"}}>
                            <this.RepeatPie />
                            <p>历史出卷平均历年重复率</p>
                        </div>
                        {/* 方框 */}
                        <div className={BottomCardCss.dataItemSquare}>
                            <h3>任课门数</h3>
                            <p><span>{this.workingData.courses}</span>&nbsp;门</p>
                        </div>
                        <div className={BottomCardCss.dataItemSquare}>
                            <h3>出卷次数</h3>
                            <p><span>{this.workingData.exams}</span>&nbsp;次</p>
                        </div>
                        <div className={BottomCardCss.dataItemSquare}>
                            <h3>题库录入</h3>
                            <p><span>{this.workingData.banks}</span>&nbsp;题</p>
                        </div>
                        <div className={BottomCardCss.dataItemSquare}>
                            <h3>监考次数</h3>
                            <p><span>{this.workingData.invigilations}</span>&nbsp;次</p>
                        </div>
                    </div>
                </div>
                {/* 半圆虚线 */}
                <div className={BottomCardCss.cardDashedWrapper}>
                    <div className={BottomCardCss.dashed}></div>
                    <div className={BottomCardCss.leftCircleBg}></div>
                    <div className={BottomCardCss.leftCircle}></div>
                    <div className={BottomCardCss.rightCircleBg}></div>
                    <div className={BottomCardCss.rightCircle}></div>
                </div>
            </div>
        )
    }
}
