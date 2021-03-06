import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transition: false,
    bgImage: false
  },
  mutations: {
    'UPDATE_TRANSLATE' (state) {
      state.transition = !state.transition
    },
    'UPDATE_BG' (state, type) {
      state.bgImage = type
    }
  },
  actions: {
    updateTransition: ({commit}) => {
      commit('UPDATE_TRANSLATE')
    },
    updateBG: ({commit}, type) => {
      commit('UPDATE_BG', type)
    },
    // 跟資料庫取得資料後儲存到store
    setData: ({commit}) => {
      const api = `${process.env.APIPATH}`
      axios.get(api).then((res) => {
        if (res.data) {
          const stocks = res.data.stocks
          const funds = res.data.funds
          const stockPortfolio = res.data.stockPortfolio

          const portfolio = {
            stockPortfolio,
            funds
          }
          commit('SET_STOCKS', stocks)
          commit('SET_PORTFOLIO', portfolio)
        }
      })
    }
  },
  getters: {
    transition: state => {
      return state.transition
    },
    bgImage: state => {
      return state.bgImage
    }
  },
  modules: {
    stocks,
    portfolio
  }
})
