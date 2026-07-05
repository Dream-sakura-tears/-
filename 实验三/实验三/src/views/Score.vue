<template>

<el-card>

<el-table
:data="scores"
border>

<el-table-column
prop="student"
label="姓名"/>

<el-table-column
prop="course"
label="课程"/>

<el-table-column
prop="score"
label="成绩"/>

<el-table-column
label="等级">

<template #default="scope">

<el-tag
:type="scope.row.score>=90?'success':
scope.row.score>=60?'warning':'danger'">

{{scope.row.score>=90?'优秀':
scope.row.score>=60?'及格':'不及格'}}

</el-tag>

</template>

</el-table-column>

</el-table>

</el-card>

</template>

<script setup>

import {ref} from 'vue'

const scores=ref([

{student:"张三",course:"Java",score:96},

{student:"李四",course:"Vue3",score:87},

{student:"王五",course:"MySQL",score:72},

{student:"赵六",course:"Linux",score:55}

])

</script>