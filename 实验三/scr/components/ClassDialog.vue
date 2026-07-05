<template>
  <el-dialog
    v-model="dialogVisible"
    :title="form.id ? '编辑班级' : '新增班级'"
    width="500px"
  >
    <el-form :model="form" label-width="80px">
      <el-form-item label="班级名称">
        <el-input v-model="form.name" />
      </el-form-item>

      <el-form-item label="班主任">
        <el-input v-model="form.teacher" />
      </el-form-item>

      <el-form-item label="人数">
        <el-input-number v-model="form.count" :min="1" />
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="dialogVisible=false">取消</el-button>
      <el-button type="primary" @click="submit">
        保存
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'

const props = defineProps({
  visible: Boolean,
  data: Object
})

const emit = defineEmits(['update:visible','save'])

const dialogVisible = computed({
  get:()=>props.visible,
  set:v=>emit('update:visible',v)
})

const form = reactive({
  id:null,
  name:'',
  teacher:'',
  count:30
})

watch(()=>props.data,v=>{
  Object.assign(form,{
    id:null,
    name:'',
    teacher:'',
    count:30,
    ...v
  })
},{deep:true,immediate:true})

function submit(){
  emit('save',{...form})
}
</script>