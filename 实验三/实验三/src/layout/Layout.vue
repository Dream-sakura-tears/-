<template>
  <el-container style="height:100vh">
    <el-aside width="220px">
      <el-menu
          router
          background-color="#304156"
          text-color="#fff"
          active-text-color="#409EFF"
      >
        <el-menu-item index="/index/dashboard">
          首页
        </el-menu-item>

        <el-menu-item index="/index/student">
          学生管理
        </el-menu-item>

        <el-menu-item index="/index/class">
          班级管理
        </el-menu-item>

        <el-menu-item index="/index/score">
          成绩管理
        </el-menu-item>

        <el-menu-item index="/index/profile">
          个人中心
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>

      <el-header
          style="background:#fff;
          display:flex;
          justify-content:space-between;
          align-items:center">

        <h2>学生信息管理系统</h2>

        <el-button
            type="danger"
            @click="logout">
          退出登录
        </el-button>

      </el-header>

      <el-main>

        <router-view/>

      </el-main>

    </el-container>

  </el-container>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router=useRouter()

function logout(){

    localStorage.removeItem("token")

    router.push("/login")

}
</script>