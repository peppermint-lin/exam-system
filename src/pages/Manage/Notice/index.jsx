import React, { Component } from 'react'
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import NewTest from '../../Exam/Arrange/components/NewTest'
import NoticeCss from './index.module.css'

export default class Notice extends Component {

  state = {
    searchText: '',
    searchedColumn: ''
  }

  /* 列筛选框 */
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#3B90FF' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  /* 搜索 */
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  }

  /* 重置 */
  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  }
  
  render() {
    /* 历史公告的表头 */
    const noticeColumns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '10%',
        align: 'center'
      },
      {
        title: '接收对象',
        dataIndex: 'receive',
        key: 'receive',
        width: '20%',
        align: 'center',
        ...this.getColumnSearchProps('receive')
      },
      {
        title: '公告标题',
        dataIndex: 'title',
        key: 'title',
        width: '50%',
        align: 'center',
        ...this.getColumnSearchProps('title')
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={NoticeCss.editButtonWrapper}>
          <p id={NoticeCss.editCharacter}><MyIcon type='icon-chakanxiangqing' />&nbsp;查看详情</p>
        </div>
      }
    ]

    /* 历史公告的信息 */
    const noticeData = [
      // key：唯一标识；number：序号；receive：接收对象；title：公告标题
      {
        key: '1',
        number: 1,
        receive: '全选',
        title: '关于做好近期本科在线教学管理的通知'
      },
      {
        key: '2',
        number: 2,
        receive: '全选',
        title: '具有新建试卷、统计模块权限'
      },
      {
        key: '3',
        number: 3,
        receive: '全选',
        title: '课程免考申请通知'
      },
      {
        key: '4',
        number: 4,
        receive: '李四',
        title: '请修改课程名，以符合教学标准'
      },
      {
        key: '5',
        number: 5,
        receive: '王五',
        title: '请修改课程名，以符合教学标准'
      }
    ]

    /* 历史任务的表头 */
    const taskColumns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '10%',
        align: 'center'
      },
      {
        title: '接收对象',
        dataIndex: 'receive',
        key: 'receive',
        width: '20%',
        align: 'center',
        ...this.getColumnSearchProps('receive')
      },
      {
        title: '任务标题',
        dataIndex: 'title',
        key: 'title',
        width: '50%',
        align: 'center',
        ...this.getColumnSearchProps('title')
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={NoticeCss.editButtonWrapper}>
          <p id={NoticeCss.editCharacter}><MyIcon type='icon-chakanxiangqing' />&nbsp;查看详情</p>
        </div>
      }
    ]

    /* 历史任务的信息 */
    const taskData = [
      // key：唯一标识；number：序号；receive：接收对象；title：任务标题
      {
        key: '1',
        number: 1,
        receive: '刘一',
        title: '请参与《数据库原理》课程监考'
      },
      {
        key: '2',
        number: 2,
        receive: '陈二',
        title: '请参与《中国近代史》课程期末考核组卷'
      },
      {
        key: '3',
        number: 3,
        receive: '张三',
        title: '请为《计算机网络》题库扩充100题'
      },
      {
        key: '4',
        number: 4,
        receive: '李四',
        title: '请参与《计算机网络》课程监考'
      },
      {
        key: '5',
        number: 5,
        receive: '王五',
        title: '请参与《信息管理》课程期末考核组卷'
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    return (
      <div className={NoticeCss.mainWrapper}>
        <div className={NoticeCss.leftWrapper}>
          <NewTest />
          <p style={{marginBottom: '2%'}}>历史公告</p>
          <div className={NoticeCss.InfoTableWrapper}>
            <InfoTable columns={noticeColumns} data={noticeData} showTotal={showTotal} pageSize={5} />
          </div>
        </div>
        <div className={NoticeCss.dashedLine}></div>
        <div className={NoticeCss.rightWrapper}>
          <p style={{marginBottom: '2%'}}>历史任务</p>
          <div className={NoticeCss.InfoTableWrapper}>
            <InfoTable columns={taskColumns} data={taskData} showTotal={showTotal} pageSize={5} />
          </div>
        </div>
      </div>
    )
  }
}
