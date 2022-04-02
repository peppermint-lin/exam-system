import React, { Component } from 'react'
import AnalysisCss from './index.module.css'

export default class Analysis extends Component {
  render() {

    /* 成绩分析的信息 */
    const data = {
        // highest：最高分；lowest：最低分；average：平均分；passRate：及格率；total：考生总数；excellentRate：优秀率；difficulty：难度系数；discrimination：成绩区分度
        highest: 100,
        lowest: 15,
        average: 73.5,
        passRate: 0.7619,
        total: 105,
        excellentRate: 0.333,
        difficulty: 0.52,
        discrimination: 0.44
    }

    return (
      <div className={AnalysisCss.mainWrapper}>
        <p> 成绩分析 </p>
        <div className={AnalysisCss.tableWrapper}>
            <div className={AnalysisCss.tableLine}>
                <p className={AnalysisCss.textItem} style={{backgroundColor: '#F0F0F0',
                    borderRight: '1px solid #67A1F3'}}>最高分</p>
                <p className={AnalysisCss.textItem}>{data.highest}分</p>
                <p className={AnalysisCss.textItem} style={{backgroundColor: '#F0F0F0',
                    borderLeft: '1px solid #67A1F3', borderRight: '1px solid #67A1F3'}}>最低分</p>
                <p className={AnalysisCss.textItem}>{data.lowest}分</p>
            </div>
            <div className={AnalysisCss.tableLine}>
                <p className={AnalysisCss.textItem} style={{backgroundColor: '#F0F0F0',
                    borderRight: '1px solid #67A1F3'}}>平均分</p>
                <p className={AnalysisCss.textItem}>{data.average}分</p>
                <p className={AnalysisCss.textItem} style={{backgroundColor: '#F0F0F0',
                    borderLeft: '1px solid #67A1F3', borderRight: '1px solid #67A1F3'}}>及格率</p>
                <p className={AnalysisCss.textItem}>{(data.passRate * 100).toFixed(2)}%</p>
            </div>
            <div className={AnalysisCss.tableLine}>
                <p className={AnalysisCss.textItem} style={{backgroundColor: '#F0F0F0',
                    borderRight: '1px solid #67A1F3'}}>考生总数</p>
                <p className={AnalysisCss.textItem}>{data.total}人</p>
                <p className={AnalysisCss.textItem} style={{backgroundColor: '#F0F0F0',
                    borderLeft: '1px solid #67A1F3', borderRight: '1px solid #67A1F3'}}>优秀率</p>
                <p className={AnalysisCss.textItem}>{(data.excellentRate * 100).toFixed(2)}%</p>
            </div>
            <div className={AnalysisCss.tableLine}>
                <p className={AnalysisCss.textItem} style={{backgroundColor: '#F0F0F0',
                    borderRight: '1px solid #67A1F3'}}>难度系数</p>
                <p className={AnalysisCss.textItem}>{data.difficulty}</p>
                <p className={AnalysisCss.textItem} style={{backgroundColor: '#F0F0F0',
                    borderLeft: '1px solid #67A1F3', borderRight: '1px solid #67A1F3'}}>成绩区分度</p>
                <p className={AnalysisCss.textItem}>{data.discrimination}</p>
            </div>
        </div>
      </div>
    )
  }
}
