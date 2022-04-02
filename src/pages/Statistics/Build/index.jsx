import React, { Component } from 'react'
import { Button, Select } from 'antd';
import { nanoid } from 'nanoid';
import Chart from './components/Chart';
import Analysis from './components/Analysis';
import Cover from './components/Cover';
import Repeat from './components/Repeat';
import BuildCss from './index.module.css'

const { Option } = Select;

export default class Build extends Component {

  /* 查看科目的可选列表 */
  subjectChildren = ["计算机网络", "网络安全", "信息管理", "操作系统"]

  /* 具体考试的可选列表 */
  testChildren = ["期末考试A卷", "期末考试B卷", "期中考试A卷", "期中考试B卷"]

  render() {
    return (
      <div className={BuildCss.mainWrapper}>
        <div className={BuildCss.infoWrapper}>
          <div className={BuildCss.selectWrapper}>
            <div className={BuildCss.selectItem}>
              <p>查看科目</p>
              <Select className={BuildCss.selectInput} onChange={this.selectChange} defaultValue={1}>
                {this.subjectChildren.map((item, index) => {
                    return <Option key={nanoid()} value={index+1}>{item}</Option>
                  })}
              </Select>
            </div>
            <div className={BuildCss.selectItem}>
              <p>具体考试</p>
              <Select className={BuildCss.selectInput} onChange={this.selectChange} defaultValue={1}>
                {this.testChildren.map((item, index) => {
                    return <Option key={nanoid()} value={index+1}>{item}</Option>
                  })}
              </Select>
            </div>
          </div>
          <div>
            <Button shape='round' type='primary' ghost style={{marginRight: 15, color: '#8183FF', borderColor: '#8183FF'}}>查看试卷原题</Button>
            <Button shape='round' type='primary' ghost>打印试卷报告</Button>
          </div>
        </div>

        <div className={BuildCss.chartWrapper}>
          <div className={BuildCss.lineWrapper}>
            <div className={BuildCss.cardWrapper} style={{width: '63%'}}>
              <Chart />
            </div>
            <div className={BuildCss.cardWrapper} style={{width: '34%'}}>
              <Analysis />
            </div>
          </div>
          <div className={BuildCss.lineWrapper}>
            <div className={BuildCss.cardWrapper}>
              <Cover />
            </div>
            <div className={BuildCss.cardWrapper}>
              <Repeat />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
