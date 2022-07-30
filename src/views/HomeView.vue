<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { reactive } from "vue"
import { apiTableData } from '../api/index'

const parameters = reactive({
  memberId: '',
})

const getTableData = () => {
  apiTableData(parameters)
  .then(response => {
    console.log(response.data)
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
