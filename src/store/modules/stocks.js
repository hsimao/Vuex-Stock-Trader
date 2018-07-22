import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      // 隨機將股票價格 * 0.9 ~ 1.1區間
      stock.price = Math.round(stock.price * (1 + (Math.floor(Math.random() * (10 + 10 + 1)) - 10) / 100))
    })
  }
}

const actions = {
  buyStock: ({commit}, order) => {
    // 調用portfolio.js內的mutations方法
    commit('BUY_STOCK', order)
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
