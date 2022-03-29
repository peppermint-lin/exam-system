import React, { Component } from 'react'
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import CharacterCss from './index.module.css'

export default class Character extends Component {

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
    /* 用户的角色表头 */
    const userColumns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '10%',
        align: 'center'
      },
      {
        title: '真实姓名',
        dataIndex: 'name',
        key: 'name',
        width: '20%',
        align: 'center',
        ...this.getColumnSearchProps('name')
      },
      {
        title: '角色',
        dataIndex: 'character',
        key: 'character',
        width: '50%',
        align: 'center',
        ...this.getColumnSearchProps('character'),
        render: (text) => text.map((item, index) => {
          if(index !== text.length-1) return <p key={nanoid()} style={{display: 'inline'}}>{item}、</p>
          else return <p key={nanoid()} style={{display: 'inline'}}>{item}</p>
        })
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={CharacterCss.editButtonWrapper}>
          <p id={CharacterCss.editCharacter}><MyIcon type='icon-xiugaijuese' />&nbsp;修改角色</p>
        </div>
      }
    ]

    /* 用户的角色信息 */
    const userData = [
      // key：唯一标识；number：序号；name：真实姓名；character：角色
      {
        key: '1',
        number: 1,
        name: '刘一',
        character: ['任课教师']
      },
      {
        key: '2',
        number: 2,
        name: '陈二',
        character: ['组卷员']
      },
      {
        key: '3',
        number: 3,
        name: '张三',
        character: ['任课教师', '组卷员', '阅卷员', '管理员']
      },
      {
        key: '4',
        number: 4,
        name: '李四',
        character: ['任课教师']
      },
      {
        key: '5',
        number: 5,
        name: '王五',
        character: ['任课教师']
      },
      {
        key: '6',
        number: 6,
        name: '赵六',
        character: ['阅卷员', '管理员']
      },
      {
        key: '7',
        number: 7,
        name: '孙七',
        character: ['任课教师', '组卷员']
      },
      {
        key: '8',
        number: 8,
        name: '周八',
        character: ['组卷员']
      },
      {
        key: '9',
        number: 9,
        name: '吴九',
        character: ['任课教师', '阅卷员']
      },
      {
        key: '10',
        number: 10,
        name: '郑十',
        character: ['任课教师']
      },
      {
        key: '11',
        number: 11,
        name: '乔流逸',
        character: ['管理员']
      },
      {
        key: '12',
        number: 12,
        name: '胡初瑶',
        character: ['任课教师', '阅卷员']
      },
      {
        key: '13',
        number: 13,
        name: '邱逸致',
        character: ['任课教师', '阅卷员']
      },
      {
        key: '14',
        number: 14,
        name: '贡悦书',
        character: ['任课教师']
      },
      {
        key: '15',
        number: 15,
        name: '段嘉美',
        character: ['任课教师', '阅卷员']
      },
      {
        key: '16',
        number: 16,
        name: '蔚叶农',
        character: ['任课教师']
      }
    ]

    /* 配置的角色表头 */
    const configureColumns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '10%',
        align: 'center'
      },
      {
        title: '角色',
        dataIndex: 'character',
        key: 'character',
        width: '20%',
        align: 'center',
        ...this.getColumnSearchProps('character')
      },
      {
        title: '详情',
        dataIndex: 'detail',
        key: 'detail',
        width: '50%',
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={CharacterCss.editButtonWrapper}>
          <p id={CharacterCss.deleteCharacter}><MyIcon type='icon-shanchuzhanghao' />&nbsp;删除角色</p>
        </div>
      }
    ]

    /* 配置的角色信息 */
    const configureData = [
      // key：唯一标识；number：序号；character：角色，detail：详情
      {
        key: '1',
        number: 1,
        character: '任课教师',
        detail: '具有课程、题库、监考、统计模块权限'
      },
      {
        key: '2',
        number: 2,
        character: '组卷员',
        detail: '具有新建试卷、统计模块权限'
      },
      {
        key: '3',
        number: 3,
        character: '阅卷员',
        detail: '具有阅卷模块权限'
      },
      {
        key: '4',
        number: 4,
        character: '管理员',
        detail: '具有考务安排、管理模块权限'
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    return (
      <div className={CharacterCss.mainWrapper}>
        <div className={CharacterCss.leftWrapper}>
          <InfoTable columns={userColumns} data={userData} showTotal={showTotal} pageSize={12} />
        </div>
        <div className={CharacterCss.dashedLine}></div>
        <div className={CharacterCss.rightWrapper}>
          <InfoTable columns={configureColumns} data={configureData} showTotal={showTotal} pageSize={12} />
        </div>
      </div>
    )
  }
}
