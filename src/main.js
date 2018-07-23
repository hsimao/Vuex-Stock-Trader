import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
