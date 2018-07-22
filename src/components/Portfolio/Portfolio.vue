<template>
  <div>
    <h1>Portfolio component</h1>
    <el-row :gutter="10">
      <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './Stock'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    Stock
  }
}
</script>
