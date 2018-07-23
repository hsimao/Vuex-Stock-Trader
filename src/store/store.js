import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transition: false
  },
  mutations: {
    'UPDATE_TRANSLATE' (state) {
      state.transition = !state.transition
    }
  },
  actions: {
    updateTransition: ({commit}) => {
      commit('UPDATE_TRANSLATE')
    }
  },
  getters: {
    transition: state => {
      return state.transition
    }
  },
  modules: {
    stocks,
    portfolio
  }
})
