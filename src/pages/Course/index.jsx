import React, { Component } from 'react';
import { Tabs } from 'antd';
import CourseItem from "./CourseItem"
import './index.css'

const { TabPane } = Tabs;
export default class Course extends Component {

  /* 教师所教授的每个课程的数据 */
  courseItem = [
    // name：课程名称；picURL：课程图片地址；code：课程代码；class：班级；time：时间；year：学年；semester：学期；belong：课程归属
    {
      "name": "计算机网络",
      "picURL": "http://121.41.11.127/test/computerNetwork.png",
      "code": "224105001",
      "class": "计算机（师范）201",
      "time": "星期一4-5节",
      "year": "2021-2022",
      "semester": "第二学期",
      "belong": "专业选修课"
    },
    {
      "name": "网络安全",
      "picURL": "http://121.41.11.127/test/networkSecurity.png",
      "code": "224105001",
      "class": "计算机203、软工201",
      "time": "星期三6-7节",
      "year": "2021-2022",
      "semester": "第二学期",
      "belong": "专业选修课"
    },
    {
      "name": "信息管理",
      "picURL": "http://121.41.11.127/test/icecream.png",
      "code": "224105001",
      "class": "计算机（师范）201",
      "time": "星期一4-5节",
      "year": "2021-2022",
      "semester": "第二学期",
      "belong": "专业选修课"
    },
    {
      "name": "操作系统",
      "picURL": "http://121.41.11.127/test/icecream.png",
      "code": "224105001",
      "class": "计算机（师范）201",
      "time": "星期一4-5节",
      "year": "2021-2022",
      "semester": "第二学期",
      "belong": "专业选修课"
    }
  ]

  render() {
    return (
      <div className="courseContainer">
          <Tabs type="card">
            {
              this.courseItem.map((item, index) => {
                return (
                  <TabPane tab={item.name} key={index+1}>
                      <CourseItem {...item}/>
                  </TabPane>
                )
              })
            }
          </Tabs>
      </div>
    )
  }
}
