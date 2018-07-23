<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      :class="{disabled: disabled}"
      mode="horizontal"
      background-color="#005874"
      text-color="#e6e6d4"
      active-text-color="#ffd04b"
      @select="handleSelect">
      <el-menu-item index="1" class="brand"><router-link to="/">Stock Trader</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/portfolio">投資組合</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/stocks">股市</router-link></el-menu-item>
      <el-menu-item index="4" class="right"><span class="label">總資產：{{ funds | currency}}</span></el-menu-item>
      <el-submenu index="5" class="right">
        <template slot="title"><a href="#">Save & Load</a></template>
        <el-menu-item index="5-1" @click="saveData">Save Data</el-menu-item>
        <el-menu-item index="5-2" @click="loadData">Load Data</el-menu-item>
      </el-submenu>
      <el-menu-item index="6" class="right" @click="endDay"><a href="#">End Day</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      activeIndex: '1',
      disabled: false
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
      'updateTransition',
      'setData'
    ]),
    endDay() {
      this.randomizeStocks()
    },
    handleSelect(key) {
      if (this.activeIndex !== key && (key === '1' || key === '2' || key === '3')) {
        this.updateTransition()
        this.disabled = true
        setTimeout(() => {
          this.updateTransition()
          this.disabled = false
        }, 1000)
        this.activeIndex = key
      }
    },
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks
      }
      const api = `${process.env.APIPATH}`
      this.$http.put(api, data).then((res) => {
        if (res.status === 200) {
          console.log('儲存成功', res.statusText)
        } else {
          console.log('儲存失敗', res.statusText)
        }
      })
    },
    loadData() {
      this.setData()
    }
  },
  computed: {
    ...mapGetters([
      'funds',
      'stockPortfolio',
      'stocks'
    ])
  }
}
</script>

<style lang="sass" scoped>
.disabled
  pointer-events: none
.el-menu-item
  padding: 0
  > a
    display: inline-block
    padding: 0 20px

.el-menu-item > a,.brand a
  text-decoration: none

.el-menu .right
  float: right

.el-submenu__title a, .el-menu-item
  text-decoration: none
  color: $colorWhite

</style>
