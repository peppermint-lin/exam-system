import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Input, Button, Space, Select, Progress } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import InfoTable from '../../../components/InfoTable';
import ArtificialCss from './index.module.css'

const { Option } = Select;

export default class Artificial extends Component {

  state = { searchText: '', searchedColumn: '', isFade: Boolean, defaultSelect: 1, selectValue: {} }

  /* 试卷可选列表 */
  paperChildren = ["计算机网络期末考试", "卷2", "卷3"]

  /* 组件挂载完毕的钩子 */
  componentDidMount = () => {
    const {defaultSelect} = this.props.location.state || {}
    this.paperChildren.map((item, index) => {
      if(defaultSelect === undefined && index === 0) this.setState({selectValue: {label: item, value: 1, key: ''}})
      else if(index+1 === defaultSelect) this.setState({selectValue: {label: item, value: defaultSelect, key: ''}})
      return 0
    })
    if(defaultSelect) this.setState({defaultSelect: defaultSelect})
    this.setState({isFade: false})
  }

  /* 组件即将卸载的钩子 */
  componentWillUnmount = () => {
    this.setState({isFade: true})
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
  
  /* 选择器发生变化时的回调 */
  selectChange = (value) => {
    this.setState({selectValue: value})
  }

  /* 计算阅卷进度 */
  countFinished = (data) => {
    var finish = 0, total = data.length
    data.map((item) => {
      if(item.edit === 2) finish = finish + 1
      return 0
    })
    return finish/total
  }

  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '7%',
        align: 'center'
      },
      {
        title: '考号',
        dataIndex: 'testNumber',
        key: 'testNumber',
        width: '12%',
        align: 'center',
        ...this.getColumnSearchProps('testNumber')
      },
      {
        title: '学号',
        dataIndex: 'studentNumber',
        key: 'studentNumber',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('studentNumber')
      },
      {
        title: '登录IP',
        dataIndex: 'loginIP',
        key: 'loginIP',
        width: '10%',
        align: 'center'
      },
      {
        title: '登录时间',
        dataIndex: 'loginTime',
        key: 'loginTime',
        width: '10%',
        align: 'center'
      },
      {
        title: '提交时间',
        dataIndex: 'submitTime',
        key: 'submitTime',
        width: '10%',
        align: 'center'
      },
      {
        title: '切屏次数',
        dataIndex: 'cutting',
        key: 'cutting',
        width: '10%',
        align: 'center',
        render: (text) => `${text}次`
      },
      {
        title: '答题率',
        dataIndex: 'rate',
        key: 'rate',
        width: '11%',
        align: 'center',
        render: (text) => `${(text*100).toFixed(2)}%`
      },
      {
        title: '成绩',
        dataIndex: 'grade',
        key: 'grade',
        width: '10%',
        align: 'center',
        sorter: (a, b) => a.grade - b.grade,
        sortDirections: ['descend', 'ascend'],
        render: (text) => text === null ? '--' : `${text}分`
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: (text, record) => text === 0 ? 
        <Link to={{pathname: "/teacher/mark/goover", state: {testNumber: record.testNumber, testTitle: this.state.selectValue}}}>
          <p style={{cursor: 'pointer'}}>开始阅卷</p></Link>
        : text === 1 ? <Link to={{pathname: "/teacher/mark/goover", state: {testNumber: record.testNumber, testTitle: this.state.selectValue}}}>
            <p style={{color: '#3EB575', cursor: 'pointer'}}>继续阅卷</p></Link>
        : <Link to={{pathname: "/teacher/mark/goover", state: {testNumber: record.testNumber, testTitle: this.state.selectValue}}}>
            <p style={{color: '#FF4D4F', cursor: 'pointer'}}>误判修正</p></Link>
      }
    ]

    /* 人工阅卷的信息 */
    const data = [
      // key：唯一标识；number：序号；testNumber：考号；studentNumber：学号；loginIP：登录IP；loginTime：登录时间；submitTime：提交时间；cutting：切屏次数；rate：答题率；grade：成绩；edit：操作（0开始阅卷，1继续阅卷，2误判修正）
      {
        key: '1',
        number: 1,
        testNumber: '2022110101',
        studentNumber: '2020001',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      },
      {
        key: '2',
        number: 2,
        testNumber: '2022110102',
        studentNumber: '2020002',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      },
      {
        key: '3',
        number: 3,
        testNumber: '2022110103',
        studentNumber: '2020003',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 1
      },
      {
        key: '4',
        number: 4,
        testNumber: '2022110104',
        studentNumber: '2020004',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      },
      {
        key: '5',
        number: 5,
        testNumber: '2022110105',
        studentNumber: '2020005',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: 87,
        edit: 2
      },
      {
        key: '6',
        number: 6,
        testNumber: '2022110106',
        studentNumber: '2020006',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      },
      {
        key: '7',
        number: 7,
        testNumber: '2022110107',
        studentNumber: '2020007',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      },
      {
        key: '8',
        number: 8,
        testNumber: '2022110108',
        studentNumber: '2020008',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 1
      },
      {
        key: '9',
        number: 9,
        testNumber: '2022110109',
        studentNumber: '2020009',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      },
      {
        key: '10',
        number: 10,
        testNumber: '2022110110',
        studentNumber: '2020010',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: 65,
        edit: 2
      },
      {
        key: '11',
        number: 11,
        testNumber: '2022110111',
        studentNumber: '2020011',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      },
      {
        key: '12',
        number: 12,
        testNumber: '2022110112',
        studentNumber: '2020012',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      },
      {
        key: '13',
        number: 13,
        testNumber: '2022110113',
        studentNumber: '2020013',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 1
      },
      {
        key: '14',
        number: 14,
        testNumber: '2022110114',
        studentNumber: '2020014',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        cutting: 1,
        rate: 0.962,
        grade: null,
        edit: 0
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    return (
      <div className={ArtificialCss.mainWrapper}>
        <div className={ArtificialCss.infoWrapper}>
          <div className={ArtificialCss.selectWrapper}>
            <p>批阅的试卷</p>
            {this.state.isFade === false ? <Select labelInValue className={ArtificialCss.selectInput} onChange={this.selectChange} defaultValue={this.state.defaultSelect}>
              {this.paperChildren.map((item, index) => {
                  return <Option key={nanoid()} value={index+1}>{item}</Option>
                })}</Select> : ''}
          </div>
          <div className={ArtificialCss.progressWrapper}>
            <p style={{whiteSpace: 'nowrap', marginRight: 10}}>阅卷进度</p>
            <Progress strokeColor={{ '0%': '#606BFF', '100%': '#82B8FF' }} percent={(this.countFinished(data)*100).toFixed(0)}/>
          </div>
        </div>
        <div className={ArtificialCss.tableWrapper}>
          <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={10} />
        </div>
      </div>
    )
  }
}
