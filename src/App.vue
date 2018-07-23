<template>
  <div id="app" :class="{bgImage: bgImage}">
    <Header/>
    <div class="side-bg" :class="{active: transition}">
      <div class="side-bg-item"></div>
      <div class="side-bg-item"></div>
      <div class="side-bg-item"></div>
      <div class="side-bg-item"></div>
      <div class="side-bg-item"></div>
      <div class="side-bg-item"></div>
      <div class="side-bg-item"></div>
      <div class="side-bg-item"></div>
    </div>
    <div class="container">
      <transition name="side" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'transition',
      'bgImage'
    ])
  },
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style lang="sass">
*
  font-family: '微軟正黑體', sans-serif

#app.bgImage
  background: linear-gradient(rgba(black,0.5), rgba(black,0.7)), url('./assets/img/bg.jpg')
  background-size: cover
  height: 100vh

.container
  max-width: 1140px
  margin: 0 auto
  padding: 0 20px
.side-enter-active
  animation: side-in .3s ease-out forwards

.side-leave-active
  animation: side-out .3s ease-out forwards

@keyframes side-in
  0%
    transform: translateX(50px)
    opacity: 0
  100%
    transform: translateY(0px)
    opacity: 1

@keyframes side-out
  0%
    transform: translateX(0px)
    opacity: 1
  100%
    transform: translateX(50px)
    opacity: 0

.side-bg
  position: fixed
  z-index: 10
  width: 100%
  height: 100%
  pointer-events: none
  &-item
    position: relative
    left: 0
    width: 0%
    height: 12.5vh
    background-color: $colorPrimary

@keyframes side-bg-out
  0%
    width: 100%
  100%
    width: 0%
    opacity: 0

@for $i from 1 through 8
  .side-bg.active
    .side-bg-item:nth-child(#{$i})
      animation: side-bg-out 0.4s forwards
      animation-delay: $i*0.1s

</style>
