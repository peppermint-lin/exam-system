import { MyIcon } from "./assets/iconfont"
import Home from "./pages/Home"
import Course from "./pages/Course"
import Bank from "./pages/Bank"
import Exam from "./pages/Exam"
import Mark from "./pages/Mark"
import Statistics from "./pages/Statistics"
import Manage from "./pages/Manage"

export const routes = [
  {
    path: "/home",
    component: Home,
    icon: <MyIcon className='icon' type='icon-shouye' />,
    Chinese: "首页",
    English: "Home"
  },
  {
    path: "/course",
    component: Course,
    icon: <MyIcon className='icon' type='icon-kecheng' />,
    Chinese: "课程",
    English: "Course"
  },
  {
    path: "/bank",
    component: Bank,
    icon: <MyIcon className='icon' type='icon-tiku' />,
    Chinese: "题库",
    English: "Bank"
  },
  {
    path: "/exam",
    component: Exam,
    icon: <MyIcon className='icon' type='icon-kaoshi' />,
    Chinese: "考试",
    English: "Exam"
  },
  {
    path: "/mark",
    component: Mark,
    icon: <MyIcon className='icon' type='icon-yuejuan' />,
    Chinese: "阅卷",
    English: "Mark"
  },
  {
    path: "/statistics",
    component: Statistics,
    icon: <MyIcon className='icon' type='icon-tongji' />,
    Chinese: "统计",
    English: "Statistics"
  },
  {
    path: "/manage",
    component: Manage,
    icon: <MyIcon className='icon' type='icon-guanli' />,
    Chinese: "管理",
    English: "Manage"
  }
]