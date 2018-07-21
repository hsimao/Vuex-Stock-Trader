import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio/Portfolio'
import Stocks from '@/components/Stocks/Stocks'
import Stock from '@/components/Stocks/Stock'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: '/stock', component: Stock }
  ]
})
