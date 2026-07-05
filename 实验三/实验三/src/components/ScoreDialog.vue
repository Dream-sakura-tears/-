<template>

<el-dialog
v-model="dialogVisible"
:title="form.id?'编辑成绩':'新增成绩'">

<el-form
:model="form"
label-width="80px">

<el-form-item label="学生">

<el-input
v-model="form.student"/>

</el-form-item>

<el-form-item label="课程">

<el-input
v-model="form.course"/>

</el-form-item>

<el-form-item label="成绩">

<el-input-number
v-model="form.score"
:min="0"
:max="100"/>

</el-form-item>

</el-form>

<template #footer>

<el-button @click="dialogVisible=false">
取消
</el-button>

<el-button
type="primary"
@click="submit">
保存
</el-button>

</template>

</el-dialog>

</template>

<script setup>
import { reactive, computed, watch } from 'vue'

const props=defineProps({
  visible:Boolean,
  data:Object
})

const emit=defineEmits([
'update:visible',
'save'
])

const dialogVisible=computed({
  get:()=>props.visible,
  set:v=>emit('update:visible',v)
})

const form=reactive({
  id:null,
  student:'',
  course:'',
  score:60
})

watch(()=>props.data,v=>{
  Object.assign(form,{
    id:null,
    student:'',
    course:'',
    score:60,
    ...v
  })
},{deep:true,immediate:true})

function submit(){
  emit("save",{...form})
}
</script>