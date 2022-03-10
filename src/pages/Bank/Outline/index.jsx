import React, { Component } from 'react';
import { Button, Select } from 'antd';
import { nanoid } from 'nanoid';
import InfoTable from '../../../components/InfoTable';
import './index.css'

const { Option } = Select;
export default class Outline extends Component {

  /* 下拉选择框的value变化时的回调 */
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  /* 查看的课程中可选择的课程名（该教师所任教的课程） */
  selectOptions = ["计算机网络", "网络安全", "信息管理", "操作系统"]
  
  render() {
    
    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '5%',
        align: 'center',
        onCell: (text) => {
          if(text.sectionIndex % 2 === 1) return {
            style: {backgroundColor: 'white'}
          }
          else return {
            style: {backgroundColor: 'rgba(112, 112, 112, 0.1)'}
          }
        }
      },
      {
        title: '章节',
        dataIndex: 'chapter',
        key: 'chapter',
        width: '20%',
        align: 'center',
        onCell: (record) => {
          console.log(record)
          if(record.chapterIndex % 2 !== 1) return {
            rowSpan: record.chapterRowSpan,
            id: 'chapterMergedCell'
          }
          else return {
            rowSpan: record.chapterRowSpan,
            id: 'chapterWhiteCell'
          }
        }
      },
      {
        title: '节次',
        dataIndex: 'section',
        key: 'section',
        width: '25%',
        align: 'center',
        onCell: (record) => {
          if(record.sectionIndex % 2 !== 1) return {
            rowSpan: record.sectionRowSpan,
            id: 'sectionMergedCell'
          }
          else return {
            rowSpan: record.sectionRowSpan,
            id: 'sectionWhiteCell'
          }
        }
      },
      {
        title: '考点',
        dataIndex: 'site',
        key: 'site',
        width: '25%',
        align: 'center'
      },
      {
        title: '掌握程度',
        dataIndex: 'mastery',
        key: 'mastery',
        width: '10%',
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className='editButtonWrapper'> <p>修改</p> </div>
      }
    ]

    /* 教师所查看的科目的考纲信息 */
    const data = [
      // key：唯一标识；number：序号；chapterIndex：第几章；chapter：章节；sectionIndex：第几节；section：节次；site：考点；mastery：掌握程度
      {
        key: '1',
        number: 1,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 1,
        section: '计算机网络概述',
        site: '计算机网络的概念、组成与功能',
        mastery: '了解'
      },
      {
        key: '2',
        number: 2,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 1,
        section: '计算机网络概述',
        site: '计算机网络的分类',
        mastery: '理解'
      },
      {
        key: '3',
        number: 3,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 1,
        section: '计算机网络概述',
        site: '计算机网络主要性能指标',
        mastery: '掌握'
      },
      {
        key: '4',
        number: 4,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 2,
        section: '计算机网络体系结构与参考模型',
        site: '计算机网络分层结构',
        mastery: '运用'
      },
      {
        key: '5',
        number: 5,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 2,
        section: '计算机网络体系结构与参考模型',
        site: '计算机网络协议、接口、服务等概念',
        mastery: '了解'
      },
      {
        key: '6',
        number: 6,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 2,
        section: '计算机网络体系结构与参考模型',
        site: 'ISO/OSI参考模型和TCP/IP模型',
        mastery: '理解'
      },
      {
        key: '7',
        number: 7,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '信道、信号、带宽、信源与信宿等基本概念',
        mastery: '掌握'
      },
      {
        key: '8',
        number: 8,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '奈奎斯特定理与香农定理',
        mastery: '运用'
      },
      {
        key: '9',
        number: 9,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '编码与调制',
        mastery: '了解'
      },
      {
        key: '10',
        number: 10,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '电路交换、报文交换与分组交换',
        mastery: '理解'
      },
      {
        key: '11',
        number: 11,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '数据报与虚电路',
        mastery: '掌握'
      },
      {
        key: '12',
        number: 12,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 2,
        section: '传输介质',
        site: '双绞线、同轴电缆、光纤与无线传输介质',
        mastery: '运用'
      },
      {
        key: '13',
        number: 13,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 2,
        section: '传输介质',
        site: '物理层接口的特性',
        mastery: '了解'
      },
      {
        key: '14',
        number: 14,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 3,
        section: '物理层设备',
        site: '双绞线、同轴电缆、光纤与无线传输介质',
        mastery: '理解'
      }
    ]
    
    const showTotal = (total) => <div className='showTotalWrapper'>
    <Button shape='round' size='middle'> 导出考纲文件 </Button>
    <p> &emsp;&emsp; 共{total}条&emsp; </p>
    </div>

    /* 动态合并单元格 */
    const changeData = (data, field, tag) => {
      let count = 0;//重复项的第一项
      let indexCount = 1;//下一项
      while (indexCount < data.length) {
          var item = data.slice(count,count+1)[0];//获取没有比较的第一个对象
          if(!item[tag]) item[tag] = 1
          if(item[field] === data[indexCount][field] && data[indexCount]['number'] % 11 !== 1) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
            item[tag]++
            data[indexCount][tag] = 0
            data[indexCount]['flag'] = true
          }else {
            count = indexCount
          }
          indexCount++;
      }
    }

    changeData(data, 'chapter', 'chapterRowSpan') // 合并章节
    changeData(data, 'section', 'sectionRowSpan') // 合并节次

    return (
      <div className='outlineMainWrapper'>
        <div className='topWrapper'>
          <div className='selectWrapper'>
            <p>查看的课程&emsp;</p>
            <Select defaultValue={this.selectOptions[0]} style={{ width: 120 }} onChange={this.handleChange}>
              {this.selectOptions.map((item) => {
                return <Option key={nanoid()} value={item}>{item}</Option>
              })}
            </Select>
          </div>
          <Button shape='round' size='middle' style={{color: 'white', backgroundColor: '#3B90FF'}}> 导入Excel </Button>
        </div>
        <div className='tableWrapper'>
          <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={11} />
        </div>
      </div>
    )
  }
}