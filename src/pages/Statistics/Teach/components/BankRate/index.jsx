import React, { Component } from 'react'
import { Button } from 'antd';
import { Line } from '@ant-design/plots';
import BankRateCss from './index.module.css'

export default class BankRate extends Component {
    render() {
        /* 折线图数据 */
        const data = [
          // index：考纲序号；rate：错误率
          {
            index: '1',
            rate: 0.4
          },
          {
            index: '2',
            rate: 0.29
          },
          {
            index: '3',
            rate: 0.32
          },
          {
            index: '4',
            rate: 0.2
          },
          {
            index: '5',
            rate: 0.6
          },
          {
            index: '6',
            rate: 0.55
          },
          {
            index: '7',
            rate: 0.23
          },
          {
            index: '8',
            rate: 0.17
          },
          {
            index: '9',
            rate: 0.22
          },
          {
            index: '10',
            rate: 0.38
          },
          {
            index: '11',
            rate: 0.36
          },
          {
            index: '12',
            rate: 0.56
          },
          {
            index: '13',
            rate: 0.6
          }
        ]

        const config = {
          data,
          xField: 'index',
          yField: 'rate',
          label: {},
          point: {
            size: 3,
            shape: 'dot',
            style: {
              fill: 'white',
              stroke: '#5B8FF9',
              lineWidth: 2
            }
          },
          tooltip: {
            showMarkers: false,
          },
          state: {
            active: {
              style: {
                shadowBlur: 4,
                stroke: '#000',
                fill: 'red'
              }
            }
          },
          meta: {
              index: { alias: '考纲序号' },
              rate: { alias: '错误率', formatter: (value) => `${(value * 100).toFixed(0)}%`, max: 0.7 }
          },
          interactions: [ { type: 'marker-active' } ]
        }

        return (
            <div className={BankRateCss.mainWrapper}>
                <div className={BankRateCss.lineWrapper}>
                    <p>考纲错误率</p>
                    <Button size='small' shape='round' type='primary' ghost>查看考纲</Button>
                </div>
                <Line width={500} {...config} />
            </div>
        )
    }
}