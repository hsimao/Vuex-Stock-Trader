<template>
  <div>
    <el-row :gutter="10" class="mt-50">
      <div v-if="stocks.length <= 0" class="label">目前沒有選購任何一張股票</div>
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
