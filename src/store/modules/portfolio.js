const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  // 購買股票的邏輯
  'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(value => value.id === stockId)

    // 如果已存在相同股票，直接增加數量
    if (record) {
      record.quantity += quantity

    // 第一次買此股票，在stocks陣列內新增一個新的物件
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      })
    }

    state.funds -= quantity * stockPrice
  },

  // 賣出股票的邏輯
  'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(value => value.id === stockId)
    console.log(record)
    console.log('賣出數量', quantity)
    // 如果目前持有股票數量大於要賣的數量, 直接扣除要賣的數量
    if (record.quantity > quantity) {
      record.quantity -= quantity

    // 如果目前持有股票數量沒有大於要賣的數量, 直接全部賣出、刪除該筆陣列
    } else {
      record.stocks.splice(state.stocks.indexOf(record))
    }

    state.funds += quantity * stockPrice
  }
}

const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  // 取得自己目前持有股票資料的方法
  // 透過目前持有股票的id來跟股票資料庫比對，額外抓出想要呈現的資料
  // 這邊傳入的getters主要是要調用stocks.js中getters底下的stocks(取得所有股票資料)
  stockPortfolio(state, getters) {
    // 使用map過濾目前持有股票，來產生新的陣列
    return state.stocks.map(stock => {
      // 目前持有股票跟股票資料比對，重新組合出要呈現的資料
      const record = getters.stocks.find(value => value.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
