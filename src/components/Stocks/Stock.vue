<template>
  <div>
    <el-col :xs="12" :sm="6">
      <el-card>
        <div slot="header">
          <span>{{stock.name}}</span>
          <small>{{stock.price}}</small>
        </div>
        <el-input
          type="number"
          placeholder="購買數量"
          v-model="quantity">
        </el-input>
        <el-button
          @click="buyStock"
          :disabled="quantity <= 0">
          購買
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
    }
  }
}
</script>

<style lang="sass" src="./stock.sass"></style>
