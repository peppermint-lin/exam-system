import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

export default class GoOver extends Component {
    render() {
        const {studentNumber, selectValue} = this.props.location.state
        return (
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={{pathname: "/teacher/mark", state: {isJumpe: true}}}>人工阅卷</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={{pathname: "/teacher/mark", state: {isJumpe: true, defaultSelect: selectValue.value}}}>
                        {selectValue.label}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{studentNumber}</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
