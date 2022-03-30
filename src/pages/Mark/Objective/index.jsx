import React, { Component } from 'react'
import { Input, Button, Space, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import InfoTable from '../../../components/InfoTable';
import ObjectiveCss from './index.module.css'

const { Option } = Select;

export default class Objective extends Component {

  state = {
    searchText: '',
    searchedColumn: ''
  }

  /* 试卷可选列表 */
  paperChildren = ["计算机网络期末考试", "卷2", "卷3"]

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
    console.log(`selected ${value}`)
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
        title: '单选题',
        dataIndex: 'single',
        key: 'single',
        width: '10%',
        align: 'center'
      },
      {
        title: '多选题',
        dataIndex: 'multiple',
        key: 'multiple',
        width: '10%',
        align: 'center'
      },
      {
        title: '填空题',
        dataIndex: 'blank',
        key: 'blank',
        width: '10%',
        align: 'center'
      },
      {
        title: '判断题',
        dataIndex: 'judge',
        key: 'judge',
        width: '10%',
        align: 'center'
      },
      {
        title: '连线题',
        dataIndex: 'connect',
        key: 'connect',
        width: '10%',
        align: 'center'
      },
      {
        title: '准确率',
        dataIndex: 'rate',
        key: 'rate',
        width: '10%',
        align: 'center',
        render: (text) => `${(text*100).toFixed(2)}%`
      },
      {
        title: '客观题成绩',
        dataIndex: 'grade',
        key: 'grade',
        width: '13%',
        align: 'center',
        sorter: (a, b) => a.grade - b.grade,
        sortDirections: ['descend', 'ascend']
      }
    ]

    /* 客观结果的信息 */
    const data = [
      // key：唯一标识；number：序号；name：姓名；studentNumber：学号；single：单选题；multiple：多选题；blank：填空题；judge：判断题；connect：连线题；rate：准确率；grade：客观题成绩
      {
        key: '1',
        number: 1,
        name: '秦梦瑶',
        studentNumber: '2020001',
        single: '19/20',
        multiple: '6/10',
        blank: '8/15',
        judge: '9/10',
        connect: '5/5',
        rate: 0.7833,
        grade: 47
      },
      {
        key: '2',
        number: 2,
        name: '王淡真',
        studentNumber: '2020002',
        single: '18/20',
        multiple: '6/10',
        blank: '5/15',
        judge: '4/10',
        connect: '4/5',
        rate: 0.6167,
        grade: 37
      },
      {
        key: '3',
        number: 3,
        name: '师妃喧',
        studentNumber: '2020003',
        single: '13/20',
        multiple: '8/10',
        blank: '11/15',
        judge: '7/10',
        connect: '5/5',
        rate: 0.7333,
        grade: 44
      },
      {
        key: '4',
        number: 4,
        name: '允寒夜',
        studentNumber: '2020004',
        single: '17/20',
        multiple: '8/10',
        blank: '13/15',
        judge: '8/10',
        connect: '5/5',
        rate: 0.8,
        grade: 48
      },
      {
        key: '5',
        number: 5,
        name: '樱雪婷',
        studentNumber: '2020005',
        single: '16/20',
        multiple: '9/10',
        blank: '12/15',
        judge: '10/10',
        connect: '5/5',
        rate: 0.8667,
        grade: 52
      },
      {
        key: '6',
        number: 6,
        name: '月韩依',
        studentNumber: '2020006',
        single: '19/20',
        multiple: '6/10',
        blank: '8/15',
        judge: '9/10',
        connect: '5/5',
        rate: 0.7833,
        grade: 47
      },
      {
        key: '7',
        number: 7,
        name: '雯欣雨',
        studentNumber: '2020007',
        single: '18/20',
        multiple: '6/10',
        blank: '5/15',
        judge: '4/10',
        connect: '4/5',
        rate: 0.6167,
        grade: 37
      },
      {
        key: '8',
        number: 8,
        name: '可一琳',
        studentNumber: '2020008',
        single: '13/20',
        multiple: '8/10',
        blank: '11/15',
        judge: '7/10',
        connect: '5/5',
        rate: 0.7333,
        grade: 44
      },
      {
        key: '9',
        number: 9,
        name: '韩语惠',
        studentNumber: '2020009',
        single: '17/20',
        multiple: '8/10',
        blank: '13/15',
        judge: '8/10',
        connect: '5/5',
        rate: 0.8,
        grade: 48
      },
      {
        key: '10',
        number: 10,
        name: '叶允栗',
        studentNumber: '2020010',
        single: '16/20',
        multiple: '9/10',
        blank: '12/15',
        judge: '10/10',
        connect: '5/5',
        rate: 0.8667,
        grade: 52
      },
      {
        key: '11',
        number: 11,
        name: '安雨痕',
        studentNumber: '2020011',
        single: '19/20',
        multiple: '6/10',
        blank: '8/15',
        judge: '9/10',
        connect: '5/5',
        rate: 0.7833,
        grade: 47
      },
      {
        key: '12',
        number: 12,
        name: '颜圣翼',
        studentNumber: '2020012',
        single: '18/20',
        multiple: '6/10',
        blank: '5/15',
        judge: '4/10',
        connect: '4/5',
        rate: 0.6167,
        grade: 37
      },
      {
        key: '13',
        number: 13,
        name: '南黎川',
        studentNumber: '2020013',
        single: '13/20',
        multiple: '8/10',
        blank: '11/15',
        judge: '7/10',
        connect: '5/5',
        rate: 0.7333,
        grade: 44
      },
      {
        key: '14',
        number: 14,
        name: '车辰希',
        studentNumber: '2020014',
        single: '17/20',
        multiple: '8/10',
        blank: '13/15',
        judge: '8/10',
        connect: '5/5',
        rate: 0.8,
        grade: 48
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    return (
      <div className={ObjectiveCss.mainWrapper}>
        <div className={ObjectiveCss.infoWrapper}>
          <div className={ObjectiveCss.selectWrapper}>
            <p>查看的试卷</p>
            <Select className={ObjectiveCss.selectInput} onChange={this.selectChange} defaultValue={1}>
              {this.paperChildren.map((item, index) => {
                  return <Option key={nanoid()} value={index+1}>{item}</Option>
                })}
            </Select>
          </div>
          <Button id={ObjectiveCss.modifyButton} shape='round' type='primary' ghost> 修改客观题答案 </Button>
        </div>
        <div className={ObjectiveCss.tableWrapper}>
          <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={10} />
        </div>
      </div>
    )
  }
}
