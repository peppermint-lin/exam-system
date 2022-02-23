import React, { Component } from 'react';
import ItemCss from './index.module.css'

export default class Share extends Component {
  render() {
    return (
      <div className={ItemCss.cardWrapper}>
        <div className={ItemCss.courseTopWrapper}>
          <img src={this.props.picURL} alt="课程图片" />
          <div className={ItemCss.infoWrapper}>
            <div className={ItemCss.infoLeft}>
              <p>课程代码：{this.props.code}</p>
              <p>班级：{this.props.class}</p>
              <p>时间：{this.props.time}</p>
            </div>
            <div className={ItemCss.infoRight}>
              <p>学年：{this.props.year}</p>
              <p>学期：{this.props.semester}</p>
              <p>课程归属：{this.props.belong}</p>
            </div>
          </div>
        </div>
        {/* 半圆虚线 */}
        <div className={ItemCss.cardDashedWrapper}>
            <div className={ItemCss.dashed}></div>
            <div className={ItemCss.leftCircleBg}></div>
            <div className={ItemCss.leftCircle}></div>
            <div className={ItemCss.rightCircleBg}></div>
            <div className={ItemCss.rightCircle}></div>
        </div>
      </div>
    );
  }
}
