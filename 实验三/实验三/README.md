# 基于 Vue 3 的学生信息管理系统

## 项目简介

本项目是《Vue3 前端开发综合实践》实验三课程设计，采用 **Vue 3 + Vite** 搭建开发环境，实现了一个面向管理员的学生信息管理系统。系统采用单页面应用（SPA）模式，结合 Vue Router、Pinia、Axios 和 Element Plus 等技术，实现学生、班级、成绩等信息的统一管理。

---

## 项目截图

> 运行完成后可将截图替换到下面位置。

- 登录页面
- 首页（Dashboard）
- 学生管理
- 班级管理
- 成绩管理
- 个人中心

---

## 技术栈

| 技术         | 版本 |
| ------------ | ---- |
| Vue          | 3.x  |
| Vite         | 5.x  |
| Vue Router   | 4.x  |
| Pinia        | 2.x  |
| Axios        | 1.x  |
| Element Plus | 2.x  |
| JavaScript   | ES6+ |
| Node.js      | 18+  |

---

## 项目结构

```text
student-management-system
│
├── public
│
├── src
│   ├── api                 # Axios接口封装
│   │    ├── request.js
│   │    ├── student.js
│   │    ├── class.js
│   │    └── score.js
│   │
│   ├── assets              # 静态资源
│   │
│   ├── components          # 公共组件
│   │    ├── StudentDialog.vue
│   │    ├── ClassDialog.vue
│   │    └── ScoreDialog.vue
│   │
│   ├── layout              # 后台布局
│   │    └── Layout.vue
│   │
│   ├── mock                # Mock数据
│   │
│   ├── router              # 路由配置
│   │    └── index.js
│   │
│   ├── stores              # Pinia状态管理
│   │    └── user.js
│   │
│   ├── utils               # 工具函数
│   │    └── auth.js
│   │
│   ├── views               # 页面
│   │    ├── Login.vue
│   │    ├── Dashboard.vue
│   │    ├── Student.vue
│   │    ├── Class.vue
│   │    ├── Score.vue
│   │    ├── Profile.vue
│   │    └── System.vue
│   │
│   ├── App.vue
│   └── main.js
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 功能模块

### 1. 登录模块

- 用户登录
- 登录状态保存
- 路由守卫
- 退出登录

---

### 2. 首页 Dashboard

- 学生数量统计
- 班级数量统计
- 课程数量统计
- 平均成绩统计
- 欢迎页面

---

### 3. 学生管理

支持：

- 学生列表
- 学生新增
- 学生编辑
- 学生删除
- 学生查询
- 分页显示
- 表单校验

---

### 4. 班级管理

支持：

- 班级列表
- 新增班级
- 编辑班级
- 删除班级

---

### 5. 成绩管理

支持：

- 成绩列表
- 新增成绩
- 编辑成绩
- 删除成绩
- 成绩等级显示

---

### 6. 个人中心

支持：

- 用户信息查看
- 登录状态展示

---

### 7. 系统设置

支持：

- 系统名称设置
- 系统主题设置

---

## 主要技术实现

### Vue 3 Composition API

项目使用：

- ref()
- reactive()
- computed()
- watch()

实现页面响应式开发。

---

### Vue Router

实现：

- 登录页面
- 后台主页
- 学生管理
- 班级管理
- 成绩管理
- 个人中心
- 系统设置

页面之间的路由跳转。

---

### Pinia

实现全局状态管理：

- 用户信息
- Token
- 登录状态

---

### Axios

统一封装请求：

```text
api/
request.js
student.js
class.js
score.js
```

方便后续对接 Spring Boot 或其他 REST API。

---

### Element Plus

使用组件包括：

- Menu
- Table
- Form
- Dialog
- Button
- Card
- Pagination
- Input
- Select
- Message
- MessageBox



---

## 打包项目

```bash
npm run build
```

生成目录：

```
dist/
```

---

## 默认登录账号

用户名：

```
admin
```

密码：

```
123456
```

---

## 后续可扩展功能

- JWT 登录认证
- 权限管理（RBAC）
- 文件上传
- Excel 导入导出
- ECharts 数据统计
- 深色主题切换
- 后端 Spring Boot 对接
- MySQL 数据库存储

---

## 实验总结

本项目基于 Vue 3 完成学生信息管理系统开发，采用组件化开发模式，实现了登录认证、学生管理、班级管理、成绩管理、路由管理、状态管理等功能。通过本实验，熟悉了 Vue 3 的 Composition API、Vue Router、Pinia、Axios、Element Plus 等核心技术，提高了前端工程化开发能力，为后续前后端分离项目开发奠定了基础。

---

## 作者信息

**课程名称：** Vue3 前端开发综合实践

**项目名称：** 学生信息管理系统

**开发者：** （填写姓名）

**班级：** （填写班级）

**学号：** （填写学号）

**完成时间：** （填写日期）