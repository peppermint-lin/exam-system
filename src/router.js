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
    path: "/teacher/home",
    component: Home,
    icon: <MyIcon className='icon' type='icon-shouye' />,
    Chinese: "首页",
    English: "Home"
  },
  {
    path: "/teacher/course",
    component: Course,
    icon: <MyIcon className='icon' type='icon-kecheng' />,
    Chinese: "课程",
    English: "Course"
  },
  {
    path: "/teacher/bank",
    component: Bank,
    icon: <MyIcon className='icon' type='icon-tiku' />,
    Chinese: "题库",
    English: "Bank"
  },
  {
    path: "/teacher/exam",
    component: Exam,
    icon: <MyIcon className='icon' type='icon-kaoshi' />,
    Chinese: "考试",
    English: "Exam"
  },
  {
    path: "/teacher/mark",
    component: Mark,
    icon: <MyIcon className='icon' type='icon-yuejuan' />,
    Chinese: "阅卷",
    English: "Mark"
  },
  {
    path: "/teacher/statistics",
    component: Statistics,
    icon: <MyIcon className='icon' type='icon-tongji' />,
    Chinese: "统计",
    English: "Statistics"
  },
  {
    path: "/teacher/manage",
    component: Manage,
    icon: <MyIcon className='icon' type='icon-guanli' />,
    Chinese: "管理",
    English: "Manage"
  }
]