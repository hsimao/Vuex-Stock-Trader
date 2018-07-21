<template>
  <div>
    <h1>Stocks component</h1>
    <el-row :gutter="10">
      <stock v-for="stock in storcks" :key="stock.id" :stock="stock"></stock>
    </el-row>
  </div>
</template>

<script>
import Stock from './Stock'
export default {
  data() {
    return {
      storcks: [
        { id: 1, name: '台積電', price: 135 },
        { id: 2, name: 'Google', price: 200 },
        { id: 3, name: 'Apple', price: 250 },
        { id: 4, name: 'Twitter', price: 8 }
      ]
    }
  },
  components: {
    Stock
  }
}
</script>
