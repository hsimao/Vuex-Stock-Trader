<template>
  <div>
    <h1>股票交易或查看您目前持有的股票</h1>
    <ul>
      <li>你可以儲存，或載入您的資料</li>
      <li>點擊End Day 可進入新的一天股市</li>
    </ul>
    <hr>
    <p>你的總資產：{{funds | currency}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>
