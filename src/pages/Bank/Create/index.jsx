import React, { Component } from 'react';
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import CreateCss from './index.module.css'

export default class Create extends Component {

  state = {
    searchText: '',
    searchedColumn: '',
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
        width: '10%',
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
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('name')
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
        title: '手机号',
        dataIndex: 'telephone',
        key: 'telephone',
        width: '15%',
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={CreateCss.editButtonWrapper}>
          <p id={CreateCss.editAgain}><MyIcon type='icon-zaicibianji' />&nbsp;再次编辑</p>
          <p id={CreateCss.changeStatus}><MyIcon type='icon-xiugaizhuangtai' />&nbsp;修改状态</p>
          <p id={CreateCss.exportPrinting}><MyIcon type='icon-daochudayin' />&nbsp;导出打印</p>
        </div>
      }
    ]

    const data = [
      {
        key: '1',
        number: 1,
        college: '信息学院',
        class: '计算机201',
        name: '秦梦瑶',
        studentNumber: '2020001',
        telephone: '19815201520',
        grade: 89
      },
      {
        key: '2',
        number: 2,
        college: '信息学院',
        class: '计算机201',
        name: '王淡真',
        studentNumber: '2020002',
        telephone: '19815201521',
        grade: 90
      },
      {
        key: '3',
        number: 3,
        college: '信息学院',
        class: '计算机201',
        name: '师妃喧',
        studentNumber: '2020003',
        telephone: '19815201522',
        grade: 77
      },
      {
        key: '4',
        number: 4,
        college: '信息学院',
        class: '计算机201',
        name: '允寒夜',
        studentNumber: '2020004',
        telephone: '19815201523',
        grade: 69
      },
      {
        key: '5',
        number: 5,
        college: '信息学院',
        class: '计算机201',
        name: '樱雪婷',
        studentNumber: '2020005',
        telephone: '19815201524',
        grade: 58
      },
      {
        key: '6',
        number: 6,
        college: '信息学院',
        class: '计算机201',
        name: '月韩依',
        studentNumber: '2020006',
        telephone: '19815201525',
        grade: 55
      },
      {
        key: '7',
        number: 7,
        college: '信息学院',
        class: '计算机201',
        name: '雯欣雨',
        studentNumber: '2020007',
        telephone: '19815201526',
        grade: 87
      },
      {
        key: '8',
        number: 8,
        college: '信息学院',
        class: '计算机201',
        name: '可一琳',
        studentNumber: '2020008',
        telephone: '19815201527',
        grade: 92
      },
      {
        key: '9',
        number: 9,
        college: '信息学院',
        class: '计算机201',
        name: '韩语惠',
        studentNumber: '2020009',
        telephone: '19815201528',
        grade: 63
      },
      {
        key: '10',
        number: 10,
        college: '信息学院',
        class: '计算机201',
        name: '叶允栗',
        studentNumber: '2020010',
        telephone: '19815201529',
        grade: 81
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    return (
      <div>
        <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={18} />
      </div>
    );
  }
}
