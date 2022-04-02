import React, { Component } from 'react'
import { DualAxes } from '@ant-design/plots';

export default class Chart extends Component {
    render() {
        /* 双轴图数据 */
        const data = [
            // grade：分数；frequency：频数；curve：正态分布
            {
                grade: 15,
                frequency: 3,
                curve: 0.05
            },
            {
                grade: 25,
                frequency: 2,
                curve: 0.04
            },
            {
                grade: 35,
                frequency: 3,
                curve: 0.05
            },
            {
                grade: 42,
                frequency: 7,
                curve: 0.07
            },
            {
                grade: 45,
                frequency: 5,
                curve: 0.07
            },
            {
                grade: 49,
                frequency: 5,
                curve: 0.08
            },
            {
                grade: 52,
                frequency: 7,
                curve: 0.09
            },
            {
                grade: 62,
                frequency: 10,
                curve: 0.14
            },
            {
                grade: 66,
                frequency: 12,
                curve: 0.15
            },
            {
                grade: 71,
                frequency: 10,
                curve: 0.17
            },
            {
                grade: 73,
                frequency: 18,
                curve: 0.19
            },
            {
                grade: 79,
                frequency: 25,
                curve: 0.3
            },
            {
                grade: 84,
                frequency: 38,
                curve: 0.48
            },
            {
                grade: 88,
                frequency: 28,
                curve: 0.3
            },
            {
                grade: 91,
                frequency: 19,
                curve: 0.22
            },
            {
                grade: 95,
                frequency: 12,
                curve: 0.13
            },
            {
                grade: 100,
                frequency: 5,
                curve: 0.07
            }
        ]
        
        const config = {
            data: [data, data],
            xField: 'grade',
            yField: ['frequency', 'curve'],
            geometryOptions: [
                {
                    geometry: 'column',
                    color: 'l(90) 0:#82B8FF 1:#606BFF'
                },
                {
                    geometry: 'line',
                    lineStyle: { lineWidth: 2 },
                    smooth: true,
                    color: '#07C160'
                }
            ],
            meta: {
                grade: { alias: '人数', type: 'linear', min: 0, max: 100, formatter: (value) => `${value}分` },
                frequency: { alias: '频数', min: 0, max: 50, formatter: (value) => `${value}人` },
                curve: { alias: '正态分布', min: 0, max: 0.5 }
            },
        }
    
        return (
            <DualAxes width={650} {...config} />
        )
    }
}