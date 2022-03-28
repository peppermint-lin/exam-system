import React, { Component } from 'react'
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import StudentCss from './index.module.css'

export default class Student extends Component {

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
    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '7%',
        align: 'center'
      },
      {
        title: '用户名',
        dataIndex: 'nickname',
        key: 'nickname',
        width: '12.5%',
        align: 'center'
      },
      {
        title: '学院',
        dataIndex: 'college',
        key: 'college',
        width: '10%',
        align: 'center'
      },
      {
        title: '班级',
        dataIndex: 'class',
        key: 'class',
        width: '10%',
        align: 'center',
        sorter: (a, b) => a.class.length - b.class.length,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: '真实姓名',
        dataIndex: 'name',
        key: 'name',
        width: '12.5%',
        align: 'center',
        ...this.getColumnSearchProps('name')
      },
      {
        title: '学号',
        dataIndex: 'studentNumber',
        key: 'studentNumber',
        width: '12.5%',
        align: 'center',
        ...this.getColumnSearchProps('teacherNumber')
      },
      {
        title: '手机号码',
        dataIndex: 'telephone',
        key: 'telephone',
        width: '12.5%',
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={StudentCss.editButtonWrapper}>
          <p id={StudentCss.resetPassword}><MyIcon type='icon-chongzhimima' />&nbsp;重置密码</p>
          <p id={StudentCss.deleteAccount}><MyIcon type='icon-shanchuzhanghao' />&nbsp;删除账号</p>
        </div>
      }
    ]

    /* 学生用户的信息 */
    const data = [
      // key：唯一标识；number：序号；nickname：用户名；college：学院；class：班级；name：真实姓名；studentNumber：学号；telephone：手机号码
      {
        key: '1',
        number: 1,
        nickname: 'Qing Mengyao',
        college: '信息学院',
        class: '计算机201',
        name: '秦梦瑶',
        studentNumber: '2020001',
        telephone: '19815201520'
      },
      {
        key: '2',
        number: 2,
        nickname: 'Wang Danzhen',
        college: '信息学院',
        class: '计算机201',
        name: '王淡真',
        studentNumber: '2020002',
        telephone: '19815201521'
      },
      {
        key: '3',
        number: 3,
        nickname: 'Shi Feixuan',
        college: '信息学院',
        class: '计算机201',
        name: '师妃喧',
        studentNumber: '2020003',
        telephone: '19815201522'
      },
      {
        key: '4',
        number: 4,
        nickname: 'Yun Hanye',
        college: '信息学院',
        class: '计算机201',
        name: '允寒夜',
        studentNumber: '2020004',
        telephone: '19815201523'
      },
      {
        key: '5',
        number: 5,
        nickname: 'Ying Xueting',
        college: '信息学院',
        class: '计算机201',
        name: '樱雪婷',
        studentNumber: '2020005',
        telephone: '19815201524'
      },
      {
        key: '6',
        number: 6,
        nickname: 'Yue Hanyi',
        college: '信息学院',
        class: '计算机201',
        name: '月韩依',
        studentNumber: '2020006',
        telephone: '19815201525'
      },
      {
        key: '7',
        number: 7,
        nickname: 'Wen Xinyu',
        college: '信息学院',
        class: '计算机201',
        name: '雯欣雨',
        studentNumber: '2020007',
        telephone: '19815201526'
      },
      {
        key: '8',
        number: 8,
        nickname: 'Ke Yilin',
        college: '信息学院',
        class: '计算机201',
        name: '可一琳',
        studentNumber: '2020008',
        telephone: '19815201527'
      },
      {
        key: '9',
        number: 9,
        nickname: 'Han Yuhui',
        college: '信息学院',
        class: '计算机201',
        name: '韩语惠',
        studentNumber: '2020009',
        telephone: '19815201528'
      },
      {
        key: '10',
        nickname: 'Ye Yunli',
        number: 10,
        college: '信息学院',
        class: '计算机201',
        name: '叶允栗',
        studentNumber: '2020010',
        telephone: '19815201529'
      },
      {
        key: '11',
        nickname: 'An Yuhen',
        number: 11,
        college: '信息学院',
        class: '计算机203',
        name: '安雨痕',
        studentNumber: '2020011',
        telephone: '19815201530'
      },
      {
        key: '12',
        nickname: 'Yan Shengyi',
        number: 12,
        college: '信息学院',
        class: '计算机203',
        name: '颜圣翼',
        studentNumber: '2020012',
        telephone: '19815201531'
      },
      {
        key: '13',
        nickname: 'Nan Lichuan',
        number: 13,
        college: '信息学院',
        class: '计算机203',
        name: '南黎川',
        studentNumber: '2020013',
        telephone: '19815201532'
      },
      {
        key: '14',
        nickname: 'Che chenxi',
        number: 14,
        college: '信息学院',
        class: '计算机203',
        name: '车辰希',
        studentNumber: '2020014',
        telephone: '19815201533'
      },
      {
        key: '15',
        nickname: 'Ming Yiyao',
        number: 15,
        college: '信息学院',
        class: '计算机203',
        name: '明伊耀',
        studentNumber: '2020015',
        telephone: '19815201534'
      },
      {
        key: '16',
        nickname: 'Feng Lihen',
        number: 16,
        college: '信息学院',
        class: '计算机203',
        name: '风离痕',
        studentNumber: '2020016',
        telephone: '19815201535'
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    return (
      <div className={StudentCss.mainWrapper}>
        <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={12} />
      </div>
    )
  }
}
