<template>

<el-card>

<div style="margin-bottom:20px">

<el-button
type="primary"
@click="add">

新增班级

</el-button>

</div>

<el-table
:data="classes"
border>

<el-table-column
prop="id"
label="编号"/>

<el-table-column
prop="name"
label="班级名称"/>

<el-table-column
prop="teacher"
label="班主任"/>

<el-table-column
label="操作">

<template #default="scope">

<el-button
size="small"
type="primary">

编辑

</el-button>

<el-button
size="small"
type="danger"
@click="remove(scope.$index)">

删除

</el-button>

</template>

</el-table-column>

</el-table>

</el-card>

</template>

<script setup>

import {ref} from 'vue'

import {ElMessage} from 'element-plus'

const classes=ref([

{id:1,name:"软件1班",teacher:"张老师"},

{id:2,name:"软件2班",teacher:"李老师"},

{id:3,name:"网络1班",teacher:"王老师"}

])

function add(){

ElMessage.success("此处弹出新增班级窗口")

}

function remove(index){

classes.value.splice(index,1)

ElMessage.success("删除成功")

}

</script>