import React, { Component } from 'react'
import { Button, Input, Divider, Form, Select, Radio } from 'antd';
import { nanoid } from 'nanoid';
import { MyIcon } from '../../../assets/iconfont.js';
import BigQ from './components/BigQ';
import BuildCss from './index.module.css'

const { Option } = Select;
export default class Build extends Component {

  // state = {problemInfo: [], isRemoveShadow: false}
  state = {problemInfo: [], isRemoveShadow: true}

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

  /* 所属科目可选列表 */
  courseBelong = ["计算机网络", "网络安全", "信息管理", '操作系统']

  /* 选择器发生变化时的回调 */
  selectChange = (value) => {
    console.log(`selected ${value}`)
  }

  /* 创建大题的回调 */
  addBigQ = () => {
    var total = this.state.problemInfo.length
    var newProblem = this.state.problemInfo.slice()
    newProblem.push({id: total+1, title: '', number: 0, grade: 0})
    this.setState({problemInfo: newProblem})
  }

  /* 删除大题的回调 */
	deleteBigQ = (id) => {
		//获取原来的todos
		const {problemInfo} = this.state
		//删除指定id的todo对象
		const newProblemInfo = problemInfo.filter((problemInfoObj)=>{
			return problemInfoObj.id !== id
		})
		//更新状态
		this.setState({problemInfo: newProblemInfo})
	}

  // /* 首次新建卡片后，去除阴影的回调 */
  // deleteShadow = (event) => {
  //   if(event.target.id === 'middle') this.setState({isRemoveShadow: true})
  // }

  render() {
    return (
      <div className={BuildCss.mainWrapper}>
        {/* 左列 */}
        <div className={BuildCss.leftWrapper}>
          {/* 添加题目 */}
          <div className={BuildCss.leftTopWrapper}>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}> <p style={{fontSize: 16}}>添加题目</p> </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-danxuan' style={{color: '#7B7B7B'}} />}>单选题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-duoxuan' style={{color: '#7B7B7B'}} />}>多选题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-tiankong' style={{color: '#7B7B7B'}} />}>填空题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-panduan' style={{color: '#7B7B7B'}} />}>判断题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-jisuan' style={{color: '#7B7B7B'}} />}>计算题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-lianxian' style={{color: '#7B7B7B'}} />}>连线题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-paixu' style={{color: '#7B7B7B'}} />}>排序题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-jieda' style={{color: '#7B7B7B'}} />}>解答题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-fenduan' style={{color: '#7B7B7B'}} />}>分段题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-chengxu' style={{color: '#7B7B7B'}} />}>程序题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-kouyu' style={{color: '#7B7B7B'}} />}>口语题</Button>
            </div>
          </div>
          {/* 实时统计 */}
          <div className={BuildCss.leftBottomWrapper}>
            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%' }}>
              <p style={{fontSize: 16}}>实时统计</p>
              <Button size='small' type="primary" ghost>&nbsp;刷&nbsp;新&nbsp;</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%' }}>
              <p>考纲覆盖率：<span style={{color: '#f5222d'}}> {this.realTimeData.cover*100}% </span></p>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%' }}>
              <p>近三年试卷重复率</p>
            </div>
            {
              this.realTimeData.same.map((item) => {
                return (
                  <div key={nanoid()} className={BuildCss.lineWrapper} style={{ width: '100%', justifySelf: 'center', marginBottom: 5 }}>
                    <p style={{width: '100%', textAlign: 'center'}}>
                      {item.year}年&emsp;&emsp;&emsp;
                      <span style={{color: '#f5222d'}}>{item.rate*100}%</span>
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* 中部 */}
        <div id='middle' className={BuildCss.middleWrapper} onClick={this.deleteShadow}>
          {/* 试卷头部 */}
          <Input id={BuildCss.title} placeholder="请输入试卷名称" bordered={false}
            style={{ fontSize: '1.5em', width: '100%', textAlign: 'center', color: '#181818', fontWeight: 'bold' }} />
          <Input placeholder="点击设置描述" bordered={false}
            style={{ fontSize: '1em', width: '100%', textAlign: 'center', marginTop: '1%' }} />
          <Divider dashed style={{ borderColor: 'black', marginTop: '10px', marginBottom: '3%' }}/>
          {/* 试卷快捷按钮 */}
          <div className={BuildCss.lineWrapper} style={{ width: '90%', marginBottom: '4%' }}>
            <Button size='small' type='primary' ghost onClick={this.addBigQ}>&emsp;创建大题&emsp;</Button>
            <Button size='small' type='primary' ghost>&emsp;从题库中选择&emsp;</Button>
            <Button size='small' type='primary' ghost>&emsp;自动组卷&emsp;</Button>
            <Button size='small' type='primary' ghost>&emsp;模板导入&emsp;</Button>
          </div>
          {/* 试题 */}
          {
            this.state.problemInfo.map((item, index) => {
              return <BigQ key={nanoid()} deleteBigQ={this.deleteBigQ} isRemoveShadow={this.state.isRemoveShadow}
                index={index+1} {...item} />
            })
          }
        </div>
        {/* 右列 */}
        <div className={BuildCss.rightWrapper}>
          <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
            <p style={{ fontSize: '16px' }}>基本信息</p>
          </div>
          {/* 基本信息 */}
          <Form name="basicInfo" style={{width: '80%'}}>
            <Form.Item label="所属科目" name="courseBelong"
            style={{ marginTop: '5%', marginBottom: '5%' }}
            rules={[{ required: true, message: '必选'}]}
            >
              <Select onChange={this.selectChange}  placeholder="请选择">
                  {this.courseBelong.map((item, index) => {
                      return <Option key={nanoid} value={`belong${index}`}>{item}</Option>
                  })}
              </Select>
            </Form.Item>

            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%', justifyContent: 'flex-end' }}>
              <Button size='small' type='primary' ghost>&nbsp;查看该科考纲&nbsp;</Button>
            </div>

            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%', justifyContent: 'flex-end' }}>
              <Button size='small' type='primary' ghost>&nbsp;查看该科往年试卷&nbsp;</Button>
            </div>

            <Form.Item label="试卷型号" name="paperType"
            wrapperCol={{ offset: 1, span: 16 }}
            style={{ marginTop: '4%', marginBottom: '4%' }}
            rules={[{ required: true, message: '必选'}]}
            >
              <Radio.Group>
                <Radio value='A'>A</Radio>
                <Radio value='B'>B</Radio>
              </Radio.Group>
            </Form.Item>

            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '8%', justifyContent: 'flex-end' }}>
              <Button size='small' type='primary' ghost>&nbsp;预览&nbsp;</Button>
            </div>

            <Form.Item>
              <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%', justifyContent: 'flex-end' }}>
                <Button size='small' type="primary" htmlType="submit" style={{ lineHeight: '1.5em' }}>&nbsp;完成创建&nbsp;</Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
