import React, { Component } from 'react';
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import CourseItemCss from './index.module.css'

export default class CourseItem extends Component {

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
        title: '手机号码',
        dataIndex: 'telephone',
        key: 'telephone',
        width: '15%',
        align: 'center'
      },
      {
        title: '最新成绩',
        dataIndex: 'grade',
        key: 'grade',
        width: '10%',
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={CourseItemCss.editButtonWrapper}>
          <p id={CourseItemCss.changeGradeIcon}><MyIcon type='icon-xiugaichengji' />&nbsp;修改成绩</p>
          <p id={CourseItemCss.outOfClassIcon}><MyIcon type='icon-yichubanji' />&nbsp;移出班级</p>
        </div>
      }
    ]

    const showTotal = (total) => <div className='showTotalWrapper'>
      <Button shape='round' size='middle'> 增加新学生 </Button>
      <p> &emsp;&emsp; 共{total}条&emsp; </p>
    </div>

    return (
      <div className={CourseItemCss.cardWrapper}>
        {/* 顶部课程信息栏 */}
        <div className={CourseItemCss.courseTopWrapper}>
          <img src={this.props.picURL} alt="课程图片" />
          <div className={CourseItemCss.infoWrapper}>
            <div className={CourseItemCss.infoLeft}>
              <p>课程代码：{this.props.code}</p>
              <p>班级：{this.props.class}</p>
              <p>时间：{this.props.time}</p>
            </div>
            <div className={CourseItemCss.infoRight}>
              <p>学年：{this.props.year}</p>
              <p>学期：{this.props.semester}</p>
              <p>课程归属：{this.props.belong}</p>
            </div>
          </div>
          <div className={CourseItemCss.buttonWrapper}>
            {/* 历次考试 */}
            <div className={CourseItemCss.buttonItem}>
              <div className={CourseItemCss.buttonLine}></div>
              <div className={CourseItemCss.buttonText}><p>历 次 考 试</p></div>
            </div>
            {/* 查看题库 */}
            <div className={CourseItemCss.buttonItem}>
              <div className={CourseItemCss.buttonLinePurple}></div>
              <div className={CourseItemCss.buttonTextPurple}><p>查 看 题 库</p></div>
            </div>
            {/* 查看考纲 */}
            <div className={CourseItemCss.buttonItem}>
              <div className={CourseItemCss.buttonLine}></div>
              <div className={CourseItemCss.buttonText}><p>查 看 考 纲</p></div>
            </div>
          </div>
        </div>
        {/* 半圆虚线 */}
        <div className={CourseItemCss.cardDashedWrapper}>
            <div className={CourseItemCss.dashed}></div>
            <div className={CourseItemCss.leftCircleBg}></div>
            <div className={CourseItemCss.leftCircle}></div>
            <div className={CourseItemCss.rightCircleBg}></div>
            <div className={CourseItemCss.rightCircle}></div>
        </div>
        {/* 课程底部表格（含最新成绩） */}
        <div className={CourseItemCss.TableWrapper}>
          <InfoTable columns={columns} data={this.props.data} showTotal={showTotal} pageSize={8} />
        </div>
      </div>
    );
  }
}
