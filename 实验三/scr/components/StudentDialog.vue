<template>

<el-dialog
v-model="dialogVisible"
:title="form.id?'编辑学生':'新增学生'"
width="500px">

<el-form
:model="form"
label-width="80">

<el-form-item
label="姓名">

<el-input
v-model="form.name"/>

</el-form-item>

<el-form-item
label="性别">

<el-select
v-model="form.gender">

<el-option label="男" value="男"/>

<el-option label="女" value="女"/>

</el-select>

</el-form-item>

<el-form-item
label="年龄">

<el-input-number
v-model="form.age"/>

</el-form-item>

<el-form-item
label="班级">

<el-input
v-model="form.clazz"/>

</el-form-item>

</el-form>

<template #footer>

<el-button @click="dialogVisible=false">

取消

</el-button>

<el-button
type="primary"
@click="submit">

确定

</el-button>

</template>

</el-dialog>

</template>

<script setup>

import {computed,reactive,watch} from 'vue'

const props=defineProps({

visible:Boolean,

student:Object

})

const emit=defineEmits([

'update:visible',

'save'

])

const dialogVisible=computed({

get(){

return props.visible

},

set(v){

emit('update:visible',v)

}

})

const form=reactive({

id:null,

name:'',

gender:'男',

age:20,

clazz:''

})

watch(()=>props.student,(v)=>{

Object.assign(form,v)

},{deep:true,immediate:true})

function submit(){

emit("save",{...form})

}

</script>