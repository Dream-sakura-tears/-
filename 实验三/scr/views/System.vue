<template>

<el-card>

<h2>系统设置</h2>

<el-form label-width="120px">

<el-form-item label="系统名称">

<el-input
v-model="systemName"/>

</el-form-item>

<el-form-item label="主题">

<el-select
v-model="theme">

<el-option
label="浅色"
value="light"/>

<el-option
label="深色"
value="dark"/>

</el-select>

</el-form-item>

<el-form-item>

<el-button
type="primary"
@click="save">

保存

</el-button>

</el-form-item>

</el-form>

</el-card>

</template>

<script setup>

import { ref } from "vue"
import { ElMessage } from "element-plus"

const systemName=ref("学生信息管理系统")

const theme=ref("light")

function save(){

ElMessage.success("保存成功")

}

</script>