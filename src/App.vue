<template>
  <div id="app">
    <div class="container">
      <Header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style lang="sass">

</style>
