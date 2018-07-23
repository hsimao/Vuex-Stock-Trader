<template>
  <div>
    <div class="home-info">
      <h1 class="title">股票交易或查看您目前持有的股票</h1>
    </div>
    <chart></chart>
  </div>
</template>

<script>
import Chart from './Chart'

export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  components: {
    Chart
  }
}
</script>

<style lang="sass" scoped>
.home-info
  margin-top: 30px
  background-color: rgba($colorPrimary, 1)
  box-shadow: 0 20px 40px 0 rgba(black,0.2)
  padding: 20px
  .title
    margin: 0
    color: $colorWhite
    font-weight: 300
    font-size: 26px

</style>
