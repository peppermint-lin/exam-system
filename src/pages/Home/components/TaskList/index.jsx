import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { nanoid } from 'nanoid'
import TaskListCss from './index.module.css'

export default class TaskList extends Component {
    /* 任务清单列表信息 */
    taskList = [
        // content：任务标题；url：立即前往的跳路由；show：跳转后展示的tab标签页
        {"content": "为《计算机网络》课程选择题题库扩充100题", "url": "/bank", "show": "create"},
        {"content": "出一份《网络安全》期中考试试卷", "url": "/exam", "show": "new"},
        {"content": "担任12月25日《数据库原理》考试监考", "url": "/exam", "show": "invigilate"},
        {"content": "完成《计算机组成原理》主观题阅卷", "url": "/mark", "show": "manual"},
    ]

    render() {
        return (
            <div className={TaskListCss.cardWrapper}>
                <h3>任务清单</h3>
                <div className={TaskListCss.listWrapper}>
                    {/* 循环渲染清单内容 */}
                    {this.taskList.map((task, index) => {
                        return (
                            <div key={nanoid()} className={TaskListCss.listItem}>
                                <p> {index+1}. {task.content} </p>
                                <Link to={task.url}>
                                    <Button id={TaskListCss.gotoButton} shape="round" size='small'>立即前往</Button>
                                </Link>
                            </div>
                        )
                    })}
                    
                </div>
                {/* 清单底部的编辑和清空按钮 */}
                <div className={TaskListCss.buttonWrapper}>
                    <Button id={TaskListCss.editButton} type="default" shape="round" size='small'>编辑清单</Button>
                    <Button danger shape="round" size='small'>清空清单</Button>
                </div>
            </div>
        )
    }
}
