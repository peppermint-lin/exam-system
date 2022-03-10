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
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: '15%',
        align: 'center',
        ...this.getColumnSearchProps('name')
      },
      {
        title: '课程',
        dataIndex: 'course',
        key: 'course',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('course')
      },
      {
        title: '题型',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
        align: 'center'
      },
      {
        title: '题量',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '10%',
        align: 'center',
        sorter: (a, b) => a.quantity - b.quantity,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: '共享状态',
        dataIndex: 'status',
        key: 'status',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('status'),
        render: (text) => //text是值，record是当前项对象，index是下标
          text === "可组卷"
          ? <span style={{color: "#3B90FF"}}>可组卷</span>
          : text === "可查看" ? <span>可查看</span>
          : <span>私有</span>
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

    /* 我创建的题库的信息 */
    const data = [
      // key：唯一标识；number：序号；name：名称；course：课程；type：题型；quantity：题量；status：共享状态
      {
        key: '1',
        number: 1,
        name: '第一单元练习题',
        course: '计算机网络',
        type: '混合',
        quantity: 35,
        status: '私有'
      },
      {
        key: '2',
        number: 2,
        name: '第二单元练习题',
        course: '计算机网络',
        type: '填空题',
        quantity: 25,
        status: '可查看'
      },
      {
        key: '3',
        number: 3,
        name: '计网名词解析汇总',
        course: '计算机网络',
        type: '名词解析',
        quantity: 30,
        status: '可组卷'
      },
      {
        key: '4',
        number: 4,
        name: '实验材料分析题',
        course: '网络安全',
        type: '混合',
        quantity: 45,
        status: '可组卷'
      },
      {
        key: '5',
        number: 5,
        name: '第一章复习题',
        course: '网络安全',
        type: '单选题',
        quantity: 15,
        status: '私有'
      },
      {
        key: '6',
        number: 6,
        name: '第二章复习题',
        course: '网络安全',
        type: '多选题',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '7',
        number: 7,
        name: '2021-2022-1复习',
        course: '信息管理',
        type: '混合',
        quantity: 50,
        status: '可查看'
      },
      {
        key: '8',
        number: 8,
        name: '信管名词解析汇总',
        course: '信息管理',
        type: '名词解析',
        quantity: 25,
        status: '可查看'
      },
      {
        key: '9',
        number: 9,
        name: '第六单元练习题',
        course: '操作系统',
        type: '计算题',
        quantity: 25,
        status: '私有'
      },
      {
        key: '10',
        number: 10,
        name: '第七单元练习题',
        course: '操作系统',
        type: '论述题',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '11',
        number: 11,
        name: '测试题1',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '12',
        number: 12,
        name: '测试题2',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '13',
        number: 13,
        name: '测试题3',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '14',
        number: 14,
        name: '测试题4',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '15',
        number: 15,
        name: '测试题5',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '16',
        number: 16,
        name: '测试题6',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '17',
        number: 17,
        name: '测试题7',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '18',
        number: 18,
        name: '测试题8',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      },
      {
        key: '19',
        number: 19,
        name: '测试题9',
        course: '操作系统',
        type: '综合',
        quantity: 50,
        status: '可组卷'
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    return (
      <div className={CreateCss.mainWrapper}>
        <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={12} />
      </div>
    );
  }
}
