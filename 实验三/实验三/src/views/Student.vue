<template>
  <el-card>
    <template #header>
      <div style="display:flex;justify-content:space-between">
        <el-input
          v-model="keyword"
          placeholder="请输入姓名"
          style="width:220px"
          clearable
        />

        <div>
          <el-button type="primary" @click="search">
            搜索
          </el-button>

          <el-button
            type="success"
            @click="openAdd">
            新增学生
          </el-button>
        </div>
      </div>
    </template>

    <el-table
      :data="pageData"
      border
      stripe>

      <el-table-column
        prop="id"
        label="学号"
        width="100"/>

      <el-table-column
        prop="name"
        label="姓名"/>

      <el-table-column
        prop="gender"
        label="性别"/>

      <el-table-column
        prop="age"
        label="年龄"/>

      <el-table-column
        prop="clazz"
        label="班级"/>

      <el-table-column
        label="操作"
        width="220">

        <template #default="scope">

          <el-button
            type="primary"
            size="small"
            @click="edit(scope.row)">
            编辑
          </el-button>

          <el-button
            type="danger"
            size="small"
            @click="remove(scope.row.id)">
            删除
          </el-button>

        </template>

      </el-table-column>

    </el-table>

    <div style="margin-top:20px;text-align:right">

      <el-pagination
        background
        layout="prev,pager,next,total"
        :current-page="page"
        :page-size="size"
        :total="students.length"
        @current-change="changePage"/>

    </div>

    <StudentDialog
      v-model:visible="dialogVisible"
      :student="currentStudent"
      @save="save"/>

  </el-card>
</template>

<script setup>
import {ref,computed} from 'vue'
import {ElMessage,ElMessageBox} from 'element-plus'
import StudentDialog from '../components/StudentDialog.vue'

const keyword=ref("")
const page=ref(1)
const size=10

const dialogVisible=ref(false)

const currentStudent=ref({})

const students=ref([
{id:1001,name:'张三',gender:'男',age:20,clazz:'软件1班'},
{id:1002,name:'李四',gender:'男',age:19,clazz:'软件1班'},
{id:1003,name:'王五',gender:'女',age:21,clazz:'软件2班'},
{id:1004,name:'赵六',gender:'男',age:20,clazz:'软件2班'},
{id:1005,name:'孙七',gender:'女',age:22,clazz:'软件3班'}
])

const pageData=computed(()=>{

const start=(page.value-1)*size

return students.value.slice(start,start+size)

})

function changePage(p){

page.value=p

}

function search(){

if(keyword.value=="") return

students.value=students.value.filter(item=>

item.name.includes(keyword.value)

)

}

function openAdd(){

currentStudent.value={}

dialogVisible.value=true

}

function edit(row){

currentStudent.value={...row}

dialogVisible.value=true

}

function save(student){

if(student.id){

const index=students.value.findIndex(i=>i.id==student.id)

students.value[index]=student

ElMessage.success("修改成功")

}else{

student.id=Date.now()

students.value.push(student)

ElMessage.success("新增成功")

}

dialogVisible.value=false

}

function remove(id){

ElMessageBox.confirm("确认删除？","提示")

.then(()=>{

students.value=students.value.filter(item=>item.id!=id)

ElMessage.success("删除成功")

})

.catch(()=>{})

}
</script>