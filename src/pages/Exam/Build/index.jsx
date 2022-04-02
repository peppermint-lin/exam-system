import React, { Component } from 'react'
import { Button, Input, Divider, Form, Select, Radio } from 'antd';
import { nanoid } from 'nanoid';
import { MyIcon } from '../../../assets/iconfont.js';
import BigQ from './components/BigQ';
import JudgeQ from './components/JudgeQ';
import BuildCss from './index.module.css'

const { Option } = Select;
export default class Build extends Component {

  // state = {problemInfo: [], isSave: false}
  state = {problemInfo: []}

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
    newProblem.push({
      id: total+1, title: '', number: 0, grade: 0,
      isSave: false, isAddSQ: false, isOverSQ: true, judgeQ: []})
    this.setState({problemInfo: newProblem})
  }

  /* 删除大题的回调 */
	deleteBigQ = (id) => {
		const {problemInfo} = this.state
		const newProblemInfo = problemInfo.filter((problemInfoObj)=>{
			return problemInfoObj.id !== id
		})
		this.setState({problemInfo: newProblemInfo})
	}

  /* 保存卡片后，去除阴影的回调 */
  saveBigQ = (id, title, number, grade) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.id === id) {
        item.isSave = true
        item.title = title
        item.number = number
        item.grade = grade
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
  }

  /* 增加小题的回调 */
	addSmallQ = (id) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.id === id) {
        item.isAddSQ = true
        item.isOverSQ = false
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
	}

  /* 结束增加小题的回调 */
	overSmallQ = (id) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.id === id) {
        item.isAddSQ = false
        item.isOverSQ = true
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
	}

  /* 增加判断题的回调 */
  addJudgeQ = () => {
    var newProblem = this.state.problemInfo
    newProblem.map((item) => {
      if(item.isAddSQ) {
        var total = item.judgeQ.length
        item.judgeQ.push({id: total+1, title: '', answer: '', grade: 0, isSave: false})
      }
      return item
    })
    this.setState({problemInfo: newProblem})
  }

  /* 删除判断题的回调 */
	deleteJudgeQ = (id) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.isAddSQ) {
        const newJudgeQ = item.judgeQ.filter((judgeQObj)=>{
          return judgeQObj.id !== id
        })
        item.judgeQ = newJudgeQ
      }
      return item
    })
		this.setState({problemInfo: newProblemInfo})
	}

  /* 保存判断题后，去除阴影的回调 */
  saveJudgeQ = (id, title, answer, grade) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.isAddSQ) {
        const newQ = item.judgeQ.map((Q) => {
          if(Q.id === id){
            Q.isSave = true
            Q.title = title
            Q.answer = answer
            Q.grade = grade
          }
          return Q
        })
        item.judgeQ = newQ
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
  }

  /* 重新编辑判断题的回调 */
  editJudgeQ = (id) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.isAddSQ) {
        const newQ = item.judgeQ.map((Q) => {
          if(Q.id === id){
            Q.isSave = false
          }
          return Q
        })
        item.judgeQ = newQ
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
  }

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
              <Button onClick={this.addJudgeQ} size='small' type="ghost" icon={<MyIcon type='icon-panduan' style={{color: '#7B7B7B'}} />}>判断题</Button>
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
              <p>考纲覆盖率：<span style={{color: '#FF4D4F'}}> {this.realTimeData.cover*100}% </span></p>
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
                      <span style={{color: '#FF4D4F'}}>{item.rate*100}%</span>
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
              return (
                <div key={nanoid()} style={{width: '100%'}}>
                  <BigQ index={index+1} {...item} deleteBigQ={this.deleteBigQ} saveBigQ={this.saveBigQ}
                    addSmallQ={this.addSmallQ} overSmallQ={this.overSmallQ} />
                  {item.judgeQ.map((item, index) => {
                    return <JudgeQ index={index+1} {...item} deleteJudgeQ={this.deleteJudgeQ} 
                      saveJudgeQ={this.saveJudgeQ} editJudgeQ={this.editJudgeQ} />
                  })}
                </div>
                )
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
            // rules={[{ required: true, message: '必选'}]} validateStatus="error"
            required 
            >
              <Select onChange={this.selectChange}  placeholder="请选择">
                  {this.courseBelong.map((item, index) => {
                      return <Option key={nanoid()} value={`belong${index}`}>{item}</Option>
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
            // rules={[{ required: true, message: '必选'}]}
            required validateStatus="error"
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
