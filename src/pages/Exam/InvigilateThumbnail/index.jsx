import React, { Component } from 'react'
import { Button, Tooltip } from 'antd';
import { nanoid } from 'nanoid';
import { MyIcon } from '../../../assets/iconfont.js';
import NailItem from './NailItem/index.jsx';
import InvigilateThumbnailCss from './index.module.css'
export default class InvigilateThumbnail extends Component {

  state = {showWhat: 0} // 0全部，1考试中，2已交卷，3缺考，4人脸识别失败

  /* 监考任务缩略图的信息 */
  invigilateInfo = [
    // pic：照片地址；name：真实姓名；number：学号；snap：抓拍；cutting：切屏；authentication：认证；tag：1考试中，2已交卷，3缺考，4人脸识别失败
    {
      pic: 'http://api.sciuridae.xyz/image/Exam/QingMengyao.png',
      name: '秦梦瑶',
      number: '2020001',
      snap: 3,
      cutting: 1,
      authentication: 3,
      tag: 4
    },
    {
      pic: 'http://api.sciuridae.xyz/image/Exam/WangDanzhen.png',
      name: '王淡真',
      number: '2020002',
      snap: 3,
      cutting: 0,
      authentication: 2,
      tag: 2
    },
    {
      pic: 'http://api.sciuridae.xyz/image/Exam/ShiFeixuan.png',
      name: '师妃喧',
      number: '2020003',
      snap: 2,
      cutting: 0,
      authentication: 4,
      tag: 1
    },
    {
      pic: 'http://api.sciuridae.xyz/image/Exam/YunHanye.png',
      name: '允寒夜',
      number: '2020004',
      snap: 0,
      cutting: 0,
      authentication: 0,
      tag: 3
    },
    {
      pic: 'http://api.sciuridae.xyz/image/Exam/YingXueting.png',
      name: '樱雪婷',
      number: '2020005',
      snap: 3,
      cutting: 5,
      authentication: 2,
      tag: 2
    },
    {
      pic: 'http://api.sciuridae.xyz/image/Exam/YueHanyi.png',
      name: '月韩依',
      number: '2020006',
      snap: 1,
      cutting: 0,
      authentication: 3,
      tag: 4
    },
    {
      pic: 'http://api.sciuridae.xyz/image/Exam/WenXinyu.png',
      name: '雯欣雨',
      number: '2020007',
      snap: 3,
      cutting: 0,
      authentication: 6,
      tag: 1
    },
    {
      pic: 'http://api.sciuridae.xyz/image/Exam/KeYilin.png',
      name: '可一琳',
      number: '2020008',
      snap: 5,
      cutting: 0,
      authentication: 5,
      tag: 1
    }
  ]

  /* 改变监考界面列表和缩略图的回调 */
  changeMode = () => {
    this.props.changeMode()
  }

  /* 计算总人数 */
  countTotal = () => {
    return this.invigilateInfo.length
  }

  /* 计算考试中人数 */
  countIng = () => {
    var cnt = 0
    this.invigilateInfo.map((item) => {
      if(item.tag === 1) cnt += 1
      return null
    })
    return cnt
  }

  /* 计算已交卷人数 */
  countFinish = () => {
    var cnt = 0
    this.invigilateInfo.map((item) => {
      if(item.tag === 2) cnt += 1
      return null
    })
    return cnt
  }

  /* 计算缺考人数 */
  countMiss = () => {
    var cnt = 0
    this.invigilateInfo.map((item) => {
      if(item.tag === 3) cnt += 1
      return null
    })
    return cnt
  }

  /* 计算人脸识别未通过人数 */
  countFail = () => {
    var cnt = 0
    this.invigilateInfo.map((item) => {
      if(item.tag === 4) cnt += 1
      return null
    })
    return cnt
  }
  
  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <div className={InvigilateThumbnailCss.topWrapper}>
          {/* 左侧按钮组 */}
          <div className={InvigilateThumbnailCss.leftWrapper}>
            <Button onClick={() => {this.setState({showWhat: 0})}} type='primary' ghost={this.state.showWhat}>全部 - {this.countTotal()}人</Button>
            <Button onClick={() => {this.setState({showWhat: 1})}} type='primary' ghost={this.state.showWhat !== 1}>考试中 - {this.countIng()}人</Button>
            <Button onClick={() => {this.setState({showWhat: 2})}} type='primary' ghost={this.state.showWhat !== 2}>已交卷 - {this.countFinish()}人</Button>
            <Button onClick={() => {this.setState({showWhat: 3})}} type='primary' ghost={this.state.showWhat !== 3}>缺考 - {this.countMiss()}人</Button>
            <Button onClick={() => {this.setState({showWhat: 4})}} type='primary' ghost={this.state.showWhat !== 4}>人脸识别未通过人数 - {this.countFail()}人</Button>
          </div>
          {/* 右侧按钮组 */}
          <div className={InvigilateThumbnailCss.rightWrapper}>
            <Button style={{color: '#3EB575', borderColor: '#3EB575'}}>允许考试</Button>
            <Button danger ghost>强制交卷</Button>
          </div>
        </div>
        {/* 循环渲染缩略图卡片 */}
        <div className={InvigilateThumbnailCss.nailWrapper}>
          {this.invigilateInfo.map((item) => {
            if(this.state.showWhat === 0 || item.tag === this.state.showWhat)
              return <NailItem key={nanoid()} changeMode={this.changeMode} {...item} />
            else return ''
          })}
          {/* 保证最后一行不满四个也不横跨至两端 */}
          <div style={{width: '25%', height: 0, visibility: 'hidden'}}></div>
          <div style={{width: '25%', height: 0, visibility: 'hidden'}}></div>
          <div style={{width: '25%', height: 0, visibility: 'hidden'}}></div>
          <div style={{width: '25%', height: 0, visibility: 'hidden'}}></div>
        </div>
        <div className={InvigilateThumbnailCss.switchButton} onClick={this.changeMode}>
          <Tooltip title="切换为列表模式"><MyIcon type='icon-liebiao' /></Tooltip>
        </div>
      </div>
    )
  }
}
