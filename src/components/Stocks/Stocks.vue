<template>
  <div>
    <el-row :gutter="10" class="mt-50">
      <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
    </el-row>
  </div>
</template>

<script>
import Stock from './Stock'

export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  },
  components: {
    Stock
  }
}
</script>
