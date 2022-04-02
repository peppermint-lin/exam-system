import React, { Component } from 'react'
import { Column } from '@ant-design/plots';

export default class GradeDistribution extends Component {
    render() {
        /* 柱状图数据 */
        const data = [
            // grade：分数；student：学生人数
            {
                grade: '0-19分',
                student: 2
            },
            {
                grade: '20-39分',
                student: 3
            },
            {
                grade: '40-59分',
                student: 20
            },
            {
                grade: '60-79分',
                student: 30
            },
            {
                grade: '80-99分',
                student: 45
            },
            {
                grade: '100分',
                student: 5
            }
        ]
    
        const config = {
            data,
            xField: 'grade',
            yField: 'student',
            label: {},
            xAxis: {
                label: {
                    autoHide: true,
                    autoRotate: false,
                }
            },
            meta: {
                grade: { alias: '分数段' },
                student: { alias: '人数', formatter: (value) => `${value}人` }
            },
            color: 'l(90) 0:#82B8FF 1:#606BFF',
        }

        return (
            <Column width={550} {...config} />
        )
    }
}