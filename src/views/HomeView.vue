<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import { apiTableData } from '../api/index'

const parameters = reactive({
  memberId: '',
})

const getTableData = () => {
  apiTableData(parameters)
  .then(response => {
    console.log(response);
    ElMessage.success(response.data.data.memberName);
  })
  .catch(error => {
    console.log(error);
    ElMessage.success(error);
  })
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <el-button @click="getTableData">Default Button</el-button>
</template>
