<template>
  <div>
    <el-col :xs="12" :sm="6">
      <el-card>
        <div slot="header">
          <span>{{stock.name}}</span>
          <span>${{stock.price}}</span>
        </div>
        <el-input
          type="number"
          placeholder="購買數量"
          v-model="quantity"
          :class="{warning : insufficientFunds}" >
        </el-input>
        <el-button
          @click="buyStock"
          :disabled="insufficientFunds || quantity <= 0"> {{insufficientFunds ? '餘額不足' : '購買'}}
        </el-button>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  },
  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.$store.getters.funds
    }
  }
}
</script>
