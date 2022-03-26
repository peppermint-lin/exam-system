import React, { Component } from 'react'
import { Tooltip } from 'antd';
import { MyIcon } from '../../../assets/iconfont.js';
import InvigilateThumbnailCss from './index.module.css'

export default class InvigilateThumbnail extends Component {

  /* 改变监考界面列表和缩略图的回调 */
  changeMode = () => {
    this.props.changeMode()
  }
  
  render() {
    return (
      <div>
        <div>InvigilateThumbnail</div>
        <div className={InvigilateThumbnailCss.switchButton} onClick={this.changeMode}>
          <Tooltip title="切换为列表模式"><MyIcon type='icon-liebiao' /></Tooltip>
        </div>
      </div>
    )
  }
}
