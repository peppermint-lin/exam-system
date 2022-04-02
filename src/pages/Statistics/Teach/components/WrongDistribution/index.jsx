import React, { Component } from 'react'
import { Pie, G2 } from '@ant-design/plots';
import { nanoid } from 'nanoid';
import WrongDistributionCss from './index.module.css'

export default class WrongDistribution extends Component {
    render() {
        const G = G2.getEngine('canvas');

        /* 饼状图数据 */
        const data = [
            // point：考点；rate：错误率
            {
                point: '数据链路层',
                rate: 0.05
            },
            {
                point: '网络协议',
                rate: 0.20
            },
            {
                point: '分组交换技术',
                rate: 0.15
            },
            {
                point: '网络体系结构',
                rate: 0.25
            },
            {
                point: '拓扑结构',
                rate: 0.35
            }
        ]

        const config = {
            appendPadding: 10,
            data,
            angleField: 'rate',
            colorField: 'point',
            radius: 0.75,
            legend: false,
            color: ['#7D90A9', '#D0D0D0', '#8183FF', '#8CBCFF', '#85CDFD'],
            label: {
                type: 'spider',
                labelHeight: 40,
                formatter: (data, mappingData) => {
                    const group = new G.Group({})
                    group.addShape({
                        type: 'circle',
                        attrs: {
                            x: 0,
                            y: 0,
                            width: 40,
                            height: 50,
                            r: 5,
                            fill: mappingData.color
                        }
                    })
                    group.addShape({
                        type: 'text',
                        attrs: {
                            x: 10,
                            y: 8,
                            text: `${data.point}`,
                            fill: mappingData.color,
                        }
                    })
                    group.addShape({
                        type: 'text',
                        attrs: {
                            x: 0,
                            y: 25,
                            fill: 'rgba(0, 0, 0, 0.65)',
                            fontWeight: 700,
                        }
                    })
                    return group
                }
            },
            meta: {
                point: { alias: '考点' },
                rate: { alias: '错误率', formatter: (value) => `${(value * 100).toFixed(0)}%` }
            },
            interactions: [
                {  type: 'element-selected' }, { type: 'element-active' }
            ]
        }

        return (
            <div className={WrongDistributionCss.mainWrapper}>
                <div className={WrongDistributionCss.tableWrapper}>
                    <p style={{lineHeight: '1.88em'}}>错题分布</p>
                    {data.map((item) => {
                        return <div key={nanoid()} className={WrongDistributionCss.tableLine} style={{lineHeight: '1.88em'}}>
                            <p style={{width: '50%', textAlign: 'center', borderRight: '1px solid #67A1F3'}}>{item.point}</p>
                            <p style={{width: '50%', textAlign: 'center'}}>{item.rate * 100}%</p>
                        </div>
                    })}
                </div>
                <Pie width={350} {...config} />
            </div>
        )
    }
}