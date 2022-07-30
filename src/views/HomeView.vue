<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { apiTableData } from '../api/index'

// const parameters = reactive({
//   memberId: '',
// })

const getTableData = () => {
  apiTableData()
  .then(response => {
    console.log(response)
    console.log(response.data)
    console.log(response.data.list)
    console.log(response.data.list[0])
  })
  .catch(error => {
    console.log(error)
  })
};
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <el-row class="mb-4">
    <el-button @click="getTableData">Default Button</el-button>
  </el-row>
  
</template>
