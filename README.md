# Exam Syatem Readme Text

### 通过yarn add安装的依赖

1. nanoid——唯一标识符生成器
2. pubsub-js——消息订阅与发布
3. react-router-dom——React路由（@5.2.0）
4. antd——Ant Design企业级UI设计语言和React组件库
5. @ant-design/charts——React图表库Ant Design Charts
6. react-app-rewired——对create-react-app脚手架进行自定义配置的社区解决方案
7. customize-cra——为了能够使用react-app-rewired@2.x而需要的插件
8. babel-plugin-import——按需加载组件代码和样式的Babel插件
9. less——向后兼容的 CSS 扩展语言库
10. less-loader—— 用于处理编译.less文件，将其转为css文件代码（@7.1.0）
11. @craco/craco——对create-react-app脚手架进行自定义配置的社区解决方案（Ant Design官方文档推荐）
12. craco-less——支持覆写webpack loader相关配置的库
13. redux——专门用于做状态管理的JS库
14. redux-thunk——Redux异步中间件
15. react-redux——专门用来简化react应用中使用redux的库
16. redux-devtools-extension——结合Chrome浏览器插件调试Redux的工具依赖包
17. react-highlight-words——React中用于高亮展示某段文本的组件

### 项目运行

1. 安装最新的稳定版`Node.js`，下载地址`https://nodejs.org/en/`。安装后在终端中运行 `node -v` 可以看到版本号，建议下载 14.x 最新稳定版
2. 通过`https://git-scm.com/`安装，安装后可以在终端执行 `git --version` 命令确认版本为 2.0 以上（VSCode安装插件-`GitLens`和`Git History`后，可以在VSCode中绑定GitHub账号并实现仓库管理和同步上传）
3. 从GitHub链接`https://github.com/peppermint-lin/exam-system.git`下载项目源码
4. 在该项目根目录下打开终端，输入`npm install`安装项目依赖（有可能会比较慢，可以考虑翻个墙或者更换淘宝镜像，亦或者替换为第5步）
5. 在终端通过`npm i -g create-react-app`命令，全局安装React脚手架，用`create-react-app hello-react`创建一个新项目，将项目源码中的`public`、`src`、`craco.config.js`和`README.md`文件和文件夹粘贴替换到新项目中，通过`yarn add xxx`安装依赖，例如`yarn add nanoid`（具体需要的依赖详见上一节“通过yarn add安装的依赖”中所述，或根据`package.json`的`dependencies`安装，该步骤可替换第4步）
6. 在该项目根目录下打开终端，输入`yarn start`运行项目（没有yarn命令的话安装一下，或者用npm应该也可以的）

### 项目结构

```
|—— node_modules //相关依赖
|—— public //静态资源文件夹
|—————— favicon.icon //网站页签图标
|—————— index.html //主页面
|—— src //源码文件夹
|—————— assets //资源文件夹
|—————————— iconfont.js //iconfont的图标资源
|—————— components //公共组件文件夹
|—————————— Frame //布局框架组件
|—————— pages //页面文件夹
|—————————— //旗下包含导航所对应的七个页面文件夹
|—————————————— //单页面文件夹下的components中为该页面中仅供自身使用的组件
|—————— App.js //App组件（包裹所有项目组件的最外层父组件，直接包裹布局框架）
|—————— App.less //App组件的样式
|—————— index.js //入口文件
|—————— router.js //路由配置
|—— //其他的配置文件
```

### 需要后端传回的数据（暂为模拟数据）

1. Home页面的InfoCard组件中的userInfo数据

   ```js
   /* 当前登录用户的个人信息 */
   userInfo = {
       "avatar": avaterPng, //网络图片地址字符串
       "name": "张三", //姓名
       "nickname": "Zhang San", //昵称
       "jobNumber": "20191522", //工号
       "title": "副教授", //职称
       "e-mail": "20191520@school.edu.cn", //邮箱
       "landline": "0571-28861522", //座机
       "mobile": "15315201522", //手机
       "office": "办公楼A-522", //办公室
       "dorm": "寝室楼B-502" //校内住址
   }
   ```

2. Home页面的InfoCard组件中的classInfo数据

   ```js
   /* 当前登录用户正在授课的均分变化信息 */
   classInfo = [
   	// name：课程名；number：均分增减幅度；icon：均分变化图标（增-up、减-down、不变-unchanged）
       {"name": "计算机网络", "number": 1.25, "icon": "up"},
       {"name": "计算机网络实践", "number": 0, "icon": "unchanged"},
       {"name": "网络安全", "number": 0.37, "icon": "down"},
       {"name": "网络安全实践", "number": 0, "icon": "unchanged"}
   ]
   ```
   
3. Home页面的TaskList组件中的taskList数据

   ```js
   /* 任务清单列表信息 */
   taskList = [
       // content：任务标题；url：立即前往的跳路由；show：跳转后展示的tab标签页
       {"content": "为《计算机网络》课程选择题题库扩充100题", "url": "/bank", "show": "create"},
       {"content": "出一份《网络安全》期中考试试卷", "url": "/exam", "show": "new"},
       {"content": "担任12月25日《数据库原理》考试监考", "url": "/exam", "show": "invigilate"},
       {"content": "完成《计算机组成原理》主观题阅卷", "url": "/Mark", "show": "manual"},
   ]
   ```

4. Home页面的BottomCard组件中的CoverPie的data

   ```js
   /* 考纲覆盖率百分比环图数据 */
   const data = [
       // 第二个对象的value值为覆盖率的小数形式
       { type: '未覆盖', value: 0.15 },
       { type: '覆盖', value: 0.85 }
   ];
   ```

5. Home页面的BottomCard组件中的RepeatPie的data

   ```js
    /* 历年重复率百分比环图数据 */
   const data = [
       // 第二个对象的value值为重复率的小数形式
       { type: '未重复', value: 0.85 },
       { type: '重复', value: 0.15 }
   ];
   ```

6. Home页面的BottomCard组件中的workingData数据

   ```js
   /* 方框内的工作数据 */
   workingData = {
       "courses": 4, //任课门数
       "exams": 3, //出卷次数
       "banks": 3500, //题库录入
       "invigilations": 1 //监考次数
   }
   ```
   
7. Course页面的主组件中的courseItem数据

   ```js
   /* 教师所教授的每个课程的数据 */
   courseItem = [
       // name：课程名称；picURL：课程图片地址；code：课程代码；class：班级；time：时间；year：学年；semester：学期；belong：课程归属，data：表格数据
       {
           "name": "计算机网络",
           "picURL": "https://imgtu.com/i/b9icVO",
           "code": "224105001",
           "class": "计算机（师范）201",
           "time": "星期一4-5节",
           "year": "2021-2022",
           "semester": "第二学期",
           "belong": "专业选修课"，
           "data": [
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
       		……
   		]
   	},
       ……
   ]
   ```
   
   
   
8. Bank页面的Create组件中的data数据

   ```js
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
       ……
   ]
   ```

9. Bank页面的Outline组件中的selectOptions数据

   ```js
   /* 查看的课程中可选择的课程名（该教师所任教的课程） */
   selectOptions = ["计算机网络", "网络安全", "信息管理", "操作系统"]
   ```
   
10. Bank页面的Reference组件中的referenceData数据

    ```js
    /* 爬虫结果的返回数据 */
    referenceData = {
        // name：关键词；url：参考题库来源网站；content：爬虫OCR返回结果
        "name": "计算机网络",
        "url": "https://www.nowcoder.com/discuss/1937",
        "content": "OSI分层 （7层）：…………" //该数据换行用\连接
    }
    ```

11. Bank页面的Outline组件中的data数据

    ```js
    /* 教师所查看的科目的考纲信息 */
    const data = [
    	// key：唯一标识；number：序号；chapter：chapterIndex：第几章；章节；sectionIndex：第几节；section：节次；site：考点；mastery：掌握程度
        {
            key: '1',
            number: 1,
            chapterIndex: 1,
            chapter: '计算机网络体系结构',
            sectionIndex: 1,
            section: '计算机网络概述',
            site: '计算机网络的概念、组成与功能',
            mastery: '了解'
        },
        ……
    ]
    ```

12. Exam页面的主组件中的data数据

    ```js
    /* 考务安排的信息 */
    const data = [
        // key：唯一标识；number：序号；subject：考试科目；date：考试日期；time：考试时间；place：考试地点；status：考务状态
        {
            key: '1',
            number: 1,
            subject: '计算机网络',
            date: '2021-12-25',
            time: '14:00-16:00',
            place: '教学楼A-111',
            status: '暂时保存'
        },
        ……
    ]
    ```

13. Exam页面的NewTest组件中的subject数据

    ```js
    /* 课程及章节信息 */
    subject = [
        // value：数据值；label：页面显示的标签；children：级联的下一层数据（其内对象属性同父层级）
        {
            value: "计算机网络",
            label: "计算机网络",
            children: [
                {
                    value: "第一章",
                    label: "第一章"
                },
                ……
            ]
        },
        ……
    ]
    ```

14. Exam页面的NewTest组件中的studentChildren数据

    ```js
    /* 应试学生可选列表 */
    studentChildren = ["计算机181", "计算机191", "计算机201"]
    ```

15. Exam页面的NewTest组件中的teacherChildren数据

    ```js
    /* 监考教师可选列表 */
    teacherChildren = ["张三", "李四", "王五"]
    ```

16. Exam页面的Place组件中的campusBelong数据

    ```js
    /* 所属校区可选列表 */
    campusBelong = ["A市B区", "B市C区", "C市D区"]
    ```
    
17. Exam页面的Build组件中的realTimeData数据

    ```js
    /* 新建试卷实时统计信息 */
    realTimeData = {
    	// cover：考纲覆盖率；same：近三年试卷重复率；year：年份；rate：某年份对应的重复率
    	cover: 0,
    	same: [
            { year: 2021, rate: 0 },
            { year: 2020, rate: 0 },
            { year: 2019, rate: 0 }
        ]
    }
    ```
    
18. Exam页面的Build组件中的courseBelong数据

    ```js
    /* 所属科目可选列表 */
    courseBelong = ["计算机网络", "网络安全", "信息管理", '操作系统']
    ```

