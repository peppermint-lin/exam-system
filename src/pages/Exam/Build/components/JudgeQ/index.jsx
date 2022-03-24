import React, { Component } from 'react'
import { Input, Tooltip, Radio, InputNumber, Dropdown, Menu } from 'antd';
import { MyIcon } from '../../../../../assets/iconfont.js';
import JudgeQCss from './index.module.css'

const { TextArea } = Input;

export default class JudgeQ extends Component {

  state = { textArea: '', radioValue: '' }
  
  /* 更多菜单 */
  menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          绑定考纲&nbsp;&gt;
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          录入解析&nbsp;&gt;
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          自动换题&nbsp;&gt;
        </a>
      </Menu.Item>
    </Menu>
  );

  /* 组件挂载完毕的钩子 */
  componentDidMount = () => {
    this.setState({radioValue: this.props.answer})
  }

  /* 文本域发生变化时的回调 */
  onTextAreaChange = ({ target: { value } }) => {
    this.setState({textArea: value});
  };

  /* 判断框组发生变化时的回调 */
  onRadiochange = (event) => {
    this.setState({radioValue: event.target.value})
  }

  /* 执行删除小题的回调 */
  handleDelete = (id) => {
    if(window.confirm(`确定删除第${this.props.index}小题吗？`)){
      this.props.deleteJudgeQ(id)
    }
  }

  /* 执行保存小题的回调 */
  handleSave = (id) => {
    let title = this.title.resizableTextArea.props.value;
    let answer = this.state.radioValue
    let grade = this.grade.value;
    this.props.saveJudgeQ(id, title, answer, grade)
  }

  /* 执行编辑小题的回调 */
  handleEdit = (id) => {
    this.props.editJudgeQ(id)
  }

  /* 点击更多按钮的回调 */
  more = () => {
    console.log('more')
  }

  render() {
    return (
      <div className={this.props.isSave ? JudgeQCss.mainWrapper : JudgeQCss.mainWrapperShadow}>
        {/* 判断题题干行 */}
        <div className={JudgeQCss.lineWrapper} style={{color: '#7B7B7B', justifyContent: 'space-between'}}>
          <div className={JudgeQCss.lineWrapper}> {this.props.index}.&emsp;
          {this.props.isSave ? <p style={{color: '#1B1B1B'}}>{this.props.title}</p>
            : <TextArea ref={c => this.title = c } style={{ marginLeft: 10, marginRight: 20, resize: 'none' }}
            value={this.state.value} autoSize onChange={this.onTextAreaChange} placeholder="请输入题干"
            defaultValue={this.props.title} />}</div>
          {/* 右上角按钮组 */}
          <div className={JudgeQCss.lineWrapper} style={{ width: '30%', justifyContent: 'flex-end' }}>
            {this.props.index > 1 ? <Tooltip title="上移">
              <MyIcon style={{ marginRight: '5%', cursor: 'pointer' }} type='icon-shangyi' />
              </Tooltip> : ''}
            <Tooltip title="下移"><MyIcon style={{ marginRight: '5%', cursor: 'pointer' }} type='icon-xiayi' /></Tooltip>
            <Tooltip title="删除"><MyIcon style={{ cursor: 'pointer' }} type='icon-shanchu'
              onClick={() => {this.handleDelete(this.props.id)}} /></Tooltip>
            {!this.props.isSave ? <Tooltip title="保存">
              <MyIcon style={{ marginLeft: '5%', cursor: 'pointer' }} type='icon-baocun'
              onClick={() => {this.handleSave(this.props.id)}} />
              </Tooltip> : <Tooltip title="编辑">
              <MyIcon style={{ marginLeft: '5%', cursor: 'pointer' }} type='icon-xiugaichengji'
              onClick={() => {this.handleEdit(this.props.id)}} />
              </Tooltip>}
          </div>
        </div>
        {/* 设置行 */}
        <div className={JudgeQCss.lineWrapper} style={{ justifyContent: 'space-between', marginTop: 20}}>
          <div className={JudgeQCss.lineWrapper} style={{ width: '70%' }}>
            {this.props.isSave ? <Radio.Group value={this.props.answer} disabled>
                <Radio value='true'>对&emsp;</Radio>
                <Radio value='false'>错</Radio>&emsp;
              </Radio.Group>
              : <Radio.Group onChange={this.onRadiochange} defaultValue={this.props.answer}>
                  <Radio value='true' defaultChecked>对&emsp;</Radio>
                  <Radio value='false'>错</Radio>&emsp;
                </Radio.Group>}
            {this.props.isSave ? '' : <p style={{color: '#7B7B7B', fontSize: 10}}>（ps：请选择以设置正确答案）</p>}
          </div>
          <div className={JudgeQCss.lineWrapper} style={{ width: '30%', justifyContent: 'flex-end' }}>
            <p style={{whiteSpace: 'nowrap'}}>分值：</p>{this.props.isSave ? <p>{this.props.grade}</p> 
              : <InputNumber ref={c => this.grade = c } min={1} max={100}
                  defaultValue={this.props.grade ? this.props.grade : ''} />}<p>&nbsp;分</p>
            <Tooltip title="更多">
              <Dropdown overlay={this.menu} placement="bottomLeft" arrow>
                <MyIcon style={{ marginLeft: '5%', cursor: 'pointer' }} type='icon-gengduo' onClick={this.more} />
              </Dropdown>
            </Tooltip>
          </div>
        </div>
      </div>
    )
  }
}
