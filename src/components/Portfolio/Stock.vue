<template>
  <div>
    <el-col :xs="12" :sm="6">
      <el-card>
        <div slot="header">
          <span>{{stock.name}}</span>
          <span>${{stock.price}}</span>
          <span class="right">數量{{stock.quantity}}</span>
        </div>
        <el-input
          type="number"
          placeholder="購買數量"
          v-model="quantity">
        </el-input>
        <el-button
          @click="sellStock"
          :disabled="quantity <= 0">
          賣出
        </el-button>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      sell: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      }
      this.sell(order)
    }
  }
}
</script>
