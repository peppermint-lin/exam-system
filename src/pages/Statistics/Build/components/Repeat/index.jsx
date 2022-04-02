import React, { Component } from 'react'
import RepeatCss from './index.module.css'

export default class Repeat extends Component {
    render() {

        /* 试卷重复率信息 */
        const repeatData = [
            // year：年份；value：与该年份期末考核试卷试题的重复率
            {year: 2020, value: 0.12},
            {year: 2019, value: 0.23},
            {year: 2018, value: 0.18}
        ]

        return (
            <div className={RepeatCss.mainWrapper}>
                <p>考纲覆盖率</p>
                <div className={RepeatCss.tableWrapper}>
                    <p style={{lineHeight: '2.74em'}}>与近三年期末考核试卷试题重复率</p>
                    {repeatData.map((item) => {
                        return <div className={RepeatCss.tableLine} style={{lineHeight: '2.74em'}}>
                            <p style={{width: '50%', textAlign: 'center', borderRight: '1px solid #67A1F3'}}>{item.year}</p>
                            <p style={{width: '50%', textAlign: 'center'}}>{item.value * 100}%</p>
                        </div>
                    })}
                    <p style={{lineHeight: '2.74em'}}>Ps：若重复率为Null，则表示该年份试卷数据未录入系统</p>
                </div>
            </div>
        )
    }
}
