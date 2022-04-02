import React, { Component } from 'react'
import CoverCss from './index.module.css'

export default class Cover extends Component {
    render() {

        /* 考纲覆盖率信息 */
        const coverData = {
            // value：考纲覆盖率；point：本卷未覆盖考点
            value: 0.85,
            point: ['实体联系模型', '数据库设计', '数据库安全性', '关系数据理论', '安全性知识', '标准性知识', '数据库恢复技术', '数据库发展新技术']
        }

        return (
            <div className={CoverCss.mainWrapper}>
                <p>考纲覆盖率 —— {coverData.value * 100}%</p>
                <div className={CoverCss.tableWrapper}>
                    <p style={{lineHeight: '2.74em'}}>本卷未覆盖考点</p>
                    {coverData.point.map((item, index) => {
                        if(index % 2 === 0) return <div className={CoverCss.tableLine} style={{lineHeight: '2.74em'}}>
                            <p style={{width: '50%', textAlign: 'center', borderRight: '1px solid #67A1F3'}}>{item}</p>
                            <p style={{width: '50%', textAlign: 'center'}}>{coverData.point[index+1]}</p>
                        </div>
                        else return ''
                    })}
                </div>
            </div>
        )
    }
}
