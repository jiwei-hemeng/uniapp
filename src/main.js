import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

import request from '@/utils/request'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(request)
Vue.use(uView);
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
