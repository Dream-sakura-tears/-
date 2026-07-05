<template>

<div class="login">

<el-card class="card">

<h2 style="text-align:center">学生管理系统</h2>

<el-form
:model="form"
ref="loginForm">

<el-form-item>

<el-input
v-model="form.username"
placeholder="请输入用户名"/>

</el-form-item>

<el-form-item>

<el-input
show-password
v-model="form.password"
placeholder="请输入密码"/>

</el-form-item>

<el-form-item>

<el-button
type="primary"
style="width:100%"
@click="login">

登录

</el-button>

</el-form-item>

</el-form>

</el-card>

</div>

</template>

<script setup>

import {reactive} from 'vue'
import {ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'

const router=useRouter()

const form=reactive({

username:'admin',

password:'123456'

})

function login(){

if(form.username=="admin"&&form.password=="123456"){

localStorage.setItem("token","admin")

ElMessage.success("登录成功")

router.push("/index/dashboard")

}else{

ElMessage.error("用户名或密码错误")

}

}

</script>

<style scoped>

.login{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

background:#409EFF;

}

.card{

width:400px;

}

</style>