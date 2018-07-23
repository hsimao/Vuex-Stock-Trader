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
        <el-menu-item index="5-1">Save Data</el-menu-item>
        <el-menu-item index="5-2">Load Data</el-menu-item>
      </el-submenu>
      <el-menu-item index="6" class="right" @click="endDay"><a href="#">End Day</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
      'updateTransition'
    ]),
    endDay() {
      this.randomizeStocks()
    },
    handleSelect(key) {
      if (this.activeIndex !== key) {
        this.updateTransition()
        this.disabled = true
        setTimeout(() => {
          this.updateTransition()
          this.disabled = false
        }, 1000)
        this.activeIndex = key
      }
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
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
