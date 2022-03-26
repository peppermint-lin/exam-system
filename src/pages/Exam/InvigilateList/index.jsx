import React, { Component } from 'react'
import { Input, Button, Space, Tooltip } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import InvigilateListCss from './index.module.css'
import './table.css'

export default class InvigilateList extends Component {

  state = {
    testInfo: {subject: '数据库原理', lastTime: '1小时55分钟28秒'},
    searchText: '',
    searchedColumn: '',
    selectedRowKeys: [] // Check here to configure the default column
  };

  /* 改变监考界面列表和缩略图的回调 */
  changeMode = () => {
    this.props.changeMode()
  }

  /* 列多选 */
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

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
    const columns = [
      {
        title: '真实姓名',
        dataIndex: 'name',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('name')
      },
      {
        title: '学号',
        dataIndex: 'number',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('number')
      },
      {
        title: '考试地点',
        dataIndex: 'place',
        width: '12%',
        align: 'center'
      },
      {
        title: '登录IP',
        dataIndex: 'loginIP',
        width: '10%',
        align: 'center'
      },
      {
        title: '登陆时间',
        dataIndex: 'loginTime',
        width: '10%',
        align: 'center'
      },
      {
        title: '提交时间',
        dataIndex: 'submitTime',
        width: '10%',
        align: 'center',
        render: (text) => text === '' ? '--:--' : text
      },
      {
        title: '切屏次数',
        dataIndex: 'cutting',
        width: '10%',
        align: 'center',
        render: (text) => text === 0 ? '--' : `${text}次`
      },
      {
        title: '答题率',
        dataIndex: 'rate',
        width: '10%',
        align: 'center',
        render: (text) => `${(text*100).toFixed(2)}%`
      },
      {
        title: '状态',
        dataIndex: 'status',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('status'),
        render: (text) => //text是值，record是当前项对象，index是下标
          text === "强制交卷"
          ? <span style={{color: "#F5222D"}}>强制交卷</span>
          : <span>允许</span>
      }
    ]
    
    /* 监考任务列表的信息 */
    const data = [
      // key：唯一标识；name：姓名；number：学号；place：考试地点；loginIP：登录IP；loginTime：登录时间；submitTime：提交时间；cutting：切屏次数；rate：答题率；status：共享状态
      {
        key: '1',
        name: '秦梦瑶',
        number: '2020001',
        place: '教学楼A-111',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '',
        cutting: 1,
        rate: 0.012,
        status: '允许'
      },
      {
        key: '2',
        name: '王淡真',
        number: '2020002',
        place: '教学楼B-105',
        loginIP: '192.168.1.1',
        loginTime: '14:01',
        submitTime: '',
        cutting: 0,
        rate: 0.008,
        status: '允许'
      },
      {
        key: '3',
        name: '师妃喧',
        number: '2020003',
        place: '教学楼C-213',
        loginIP: '192.168.1.1',
        loginTime: '14:02',
        submitTime: '',
        cutting: 0,
        rate: 0.006,
        status: '允许'
      },
      {
        key: '4',
        name: '允寒夜',
        number: '2020004',
        place: '教学楼A-111',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.012,
        status: '允许'
      },
      {
        key: '5',
        name: '樱雪婷',
        number: '2020005',
        place: '教学楼B-105',
        loginIP: '192.168.1.1',
        loginTime: '14:01',
        submitTime: '--:--',
        cutting: 5,
        rate: 0.008,
        status: '强制交卷'
      },
      {
        key: '6',
        name: '月韩依',
        number: '2020006',
        place: '教学楼C-213',
        loginIP: '192.168.1.1',
        loginTime: '14:02',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.006,
        status: '允许'
      },
      {
        key: '7',
        name: '雯欣雨',
        number: '2020007',
        place: '教学楼A-111',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.012,
        status: '允许'
      },
      {
        key: '8',
        name: '可一琳',
        number: '2020008',
        place: '教学楼B-105',
        loginIP: '192.168.1.1',
        loginTime: '14:01',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.008,
        status: '允许'
      },
      {
        key: '9',
        name: '韩语惠',
        number: '2020009',
        place: '教学楼C- 213',
        loginIP: '192.168.1.1',
        loginTime: '14:02',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.006,
        status: '允许'
      },
      {
        key: '10',
        name: '叶允栗',
        number: '2020010',
        place: '教学楼A-111',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '--:--',
        cutting: 2,
        rate: 0.012,
        status: '强制交卷'
      },
      {
        key: '11',
        name: '安雨痕',
        number: '2020011',
        place: '教学楼B-105',
        loginIP: '192.168.1.1',
        loginTime: '14:01',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.008,
        status: '允许'
      },
      {
        key: '12',
        name: '颜圣翼',
        number: '2020115',
        place: '教学楼C-213',
        loginIP: '192.168.1.1',
        loginTime: '14:02',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.006,
        status: '允许'
      },
      {
        key: '13',
        name: '南黎川',
        number: '2020116',
        place: '教学楼A-111',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.012, 
        status: '允许'
      },
      {
        key: '14',
        name: '车辰希',
        number: '2020117',
        place: '教学楼B-105',
        loginIP: '192.168.1.1',
        loginTime: '14:01',
        submitTime: '--:--',
        cutting: 0,
        rate: 0.0080,
        status: '允许'        
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    const { selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: true
    }

    return (
      <div className={InvigilateListCss.mainWrapper}>
        <div className={InvigilateListCss.topLineWrapper}>
          <div className={InvigilateListCss.buttonWrapper}>
            <Button size='small' type="text" icon={<MyIcon type='icon-yunxukaoshi' />}> 允许考试&emsp;&emsp; </Button>
            <Button size='small' type="text" icon={<MyIcon type='icon-qiangzhijiaojuan' />}> 强制交卷&emsp;&emsp; </Button>
            <Button size='small' type="text" icon={<MyIcon type='icon-shuaxin' />}> 刷新 </Button>
          </div>
          当前正在监考科目：{this.state.testInfo.subject} &emsp; 距离考试结束：{this.state.testInfo.lastTime}
        </div>
        <InfoTable columns={columns} data={data} rowSelection={rowSelection} showTotal={showTotal} pageSize={11} />
        <div className={InvigilateListCss.switchButton} onClick={this.changeMode}>
          <Tooltip title="切换为缩略图模式"><MyIcon type='icon-suolvetu' /></Tooltip>
        </div>
      </div>
    )
  }
}
