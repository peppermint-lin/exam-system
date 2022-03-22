import React, { Component } from 'react'
import { Button } from 'antd';
import { MyIcon } from '../../../assets/iconfont.js';
import BuildCss from './index.module.css'

export default class Build extends Component {

  /* 新建试卷实时统计信息 */
  realTimeData = {
    // cover：考纲覆盖率；same：近三年试卷重复率；year：年份；rate：某年份对应的重复率
    cover: 0,
    same: [
      { year: 2021, rate: 0 },
      { year: 2020, rate: 0 },
      { year: 2019, rate: 0 }
    ]
  }

  render() {
    return (
      <div className={BuildCss.mainWrapper}>
        <div className={BuildCss.leftWrapper}>
          {/* 添加题目 */}
          <div className={BuildCss.leftTopWrapper}>
            <div className={BuildCss.leftTopLine}> <p style={{fontSize: 16}}>添加题目</p> </div>
            <div className={BuildCss.leftTopLine}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-danxuan' style={{color: '#7B7B7B'}} />}>单选题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-duoxuan' style={{color: '#7B7B7B'}} />}>多选题</Button>
            </div>
            <div className={BuildCss.leftTopLine}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-tiankong' style={{color: '#7B7B7B'}} />}>填空题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-panduan' style={{color: '#7B7B7B'}} />}>判断题</Button>
            </div>
            <div className={BuildCss.leftTopLine}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-jisuan' style={{color: '#7B7B7B'}} />}>计算题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-lianxian' style={{color: '#7B7B7B'}} />}>连线题</Button>
            </div>
            <div className={BuildCss.leftTopLine}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-paixu' style={{color: '#7B7B7B'}} />}>排序题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-jieda' style={{color: '#7B7B7B'}} />}>解答题</Button>
            </div>
            <div className={BuildCss.leftTopLine}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-fenduan' style={{color: '#7B7B7B'}} />}>分段题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-chengxu' style={{color: '#7B7B7B'}} />}>程序题</Button>
            </div>
            <div className={BuildCss.leftTopLine}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-kouyu' style={{color: '#7B7B7B'}} />}>口语题</Button>
            </div>
          </div>
          <div className={BuildCss.leftBottomWrapper}>
            <div className={BuildCss.leftBottomLine}>
              <p style={{fontSize: 16}}>实时统计</p>
              <Button size='small' type="primary" ghost>&nbsp;刷&nbsp;新&nbsp;</Button>
            </div>
          </div>
        </div>
        <div className={BuildCss.middleWrapper}>

        </div>
        <div className={BuildCss.rightWrapper}>

        </div>
      </div>
    )
  }
}
