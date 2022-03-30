import React, { Component } from 'react'
import { Input, Button, Space, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import InfoTable from '../../../components/InfoTable';
import InvigilateCss from './index.module.css'

const { Option } = Select;

export default class Invigilate extends Component {

  state = {
    searchText: '',
    searchedColumn: ''
  };

  /* 监考的考试可选列表 */
  testChildren = ["计算机网络期末考试", "考试2", "考试3"]

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
        title: '序号',
        dataIndex: 'number',
        width: '7%',
        align: 'center'
      },
      {
        title: '姓名',
        dataIndex: 'name',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('name')
      },
      {
        title: '学号',
        dataIndex: 'studentNumber',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('studentNumber')
      },
      {
        title: '登录IP',
        dataIndex: 'loginIP',
        width: '10%',
        align: 'center',
        render: (text) => text === '' ? '--:--' : text
      },
      {
        title: '登录时间',
        dataIndex: 'loginTime',
        width: '10%',
        align: 'center',
        render: (text) => text === '' ? '--:--' : text
      },
      {
        title: '提交时间',
        dataIndex: 'submitTime',
        width: '10%',
        align: 'center',
        render: (text) => text === '' ? '--:--' : text
      },
      {
        title: '抓拍次数',
        dataIndex: 'snap',
        width: '10%',
        align: 'center',
        render: (text) => text === 0 ? '--' : `${text}次`
      },
      {
        title: '切屏次数',
        dataIndex: 'cutting',
        width: '10%',
        align: 'center',
        render: (text) => text === 0 ? '--' : `${text}次`
      },
      {
        title: '认证次数',
        dataIndex: 'authentication',
        width: '10%',
        align: 'center',
        render: (text) => text === 0 ? '--' : `${text}次`
      },
      {
        title: '人脸',
        dataIndex: 'face',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('face'),
        render: (text) => //text是值，record是当前项对象，index是下标
          text === "不通过"
          ? <span style={{color: "#FF4D4F"}}>不通过</span>
          : text === "通过" ? <span style={{color: "#3EB575"}}>通过</span>
          : <span>缺考</span>
      }
    ]
    
    /* 监考数据的信息 */
    const data = [
      // key：唯一标识；number：序号；name：姓名；studentNumber：学号；loginIP：登录IP；loginTime：登录时间；submitTime：提交时间；snap：抓拍次数；cutting：切屏次数；authentication：认证次数；face：人脸
      {
        key: '1',
        number: '1',
        name: '秦梦瑶',
        studentNumber: '2020001',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        snap: 3,
        cutting: 1,
        authentication: 3,
        face: '通过'
      },
      {
        key: '2',
        number: '2',
        name: '王淡真',
        studentNumber: '2020002',
        loginIP: '192.168.1.1',
        loginTime: '14:01',
        submitTime: '15:31',
        snap: 3,
        cutting: 0,
        authentication: 3,
        face: '通过'
      },
      {
        key: '3',
        number: '3',
        name: '师妃喧',
        studentNumber: '2020003',
        loginIP: '192.168.1.1',
        loginTime: '14:02',
        submitTime: '15:31',
        snap: 2,
        cutting: 0,
        authentication: 4,
        face: '不通过'
      },
      {
        key: '4',
        number: '4',
        name: '允寒夜',
        studentNumber: '2020004',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        snap: 3,
        cutting: 0,
        authentication: 3,
        face: '通过'
      },
      {
        key: '5',
        number: '5',
        name: '樱雪婷',
        studentNumber: '2020005',
        loginIP: '192.168.1.1',
        loginTime: '14:01',
        submitTime: '15:31',
        snap: 3,
        cutting: 5,
        authentication: 3,
        face: '通过'
      },
      {
        key: '6',
        number: '6',
        name: '月韩依',
        studentNumber: '2020006',
        loginIP: '192.168.1.1',
        loginTime: '14:02',
        submitTime: '15:31',
        snap: 1,
        cutting: 0,
        authentication: 3,
        face: '通过'
      },
      {
        key: '7',
        number: '7',
        name: '雯欣雨',
        studentNumber: '2020007',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        snap: 3,
        cutting: 0,
        authentication: 5,
        face: '不通过'
      },
      {
        key: '8',
        number: '8',
        name: '可一琳',
        studentNumber: '2020008',
        loginIP: '192.168.1.1',
        loginTime: '14:01',
        submitTime: '15:31',
        snap: 5,
        cutting: 0,
        authentication: 2,
        face: '通过'
      },
      {
        key: '9',
        number: '9',
        name: '韩语惠',
        studentNumber: '2020009',
        loginIP: '',
        loginTime: '',
        submitTime: '',
        snap: 1,
        cutting: 0,
        authentication: 0,
        face: '缺考'
      },
      {
        key: '10',
        number: '10',
        name: '叶允栗',
        studentNumber: '2020010',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        snap: 3,
        cutting: 2,
        authentication: 3,
        face: '通过'
      },
      {
        key: '11',
        number: '11',
        name: '安雨痕',
        studentNumber: '2020011',
        loginIP: '',
        loginTime: '',
        submitTime: '',
        snap: 1,
        cutting: 0,
        authentication: 0,
        face: '缺考'
      },
      {
        key: '12',
        number: '12',
        name: '颜圣翼',
        studentNumber: '2020115',
        loginIP: '192.168.1.1',
        loginTime: '14:02',
        submitTime: '15:31',
        snap: 3,
        cutting: 0,
        authentication: 3,
        face: '通过'
      },
      {
        key: '13',
        number: '13',
        name: '南黎川',
        studentNumber: '2020116',
        loginIP: '192.168.1.1',
        loginTime: '14:00',
        submitTime: '15:31',
        snap: 3,
        cutting: 0,
        authentication: 3,
        face: '通过'
      },
      {
        key: '14',
        number: '14',
        name: '车辰希',
        studentNumber: '2020117',
        loginIP: '',
        loginTime: '',
        submitTime: '',
        snap: 1,
        cutting: 0,
        authentication: 0,
        face: '缺考'
      }
    ]

    const showTotal = (total) => <div className='showTotalWrapper'>
      <Button shape='round' size='middle'> 导出数据表 </Button>
      <p> &emsp;&emsp; 共{total}条&emsp; </p>
    </div>

    return (
      <div className={InvigilateCss.mainWrapper}>
        <div className={InvigilateCss.infoWrapper}>
          <div className={InvigilateCss.selectWrapper}>
            <p>监考的考试</p>
            <Select className={InvigilateCss.selectInput} onChange={this.selectChange} defaultValue={1}>
              {this.testChildren.map((item, index) => {
                  return <Option key={nanoid()} value={index+1}>{item}</Option>
                })}
            </Select>
          </div>
        </div>
        <div className={InvigilateCss.tableWrapper}>
          <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={10} />
        </div>
      </div>
    )
  }
}
