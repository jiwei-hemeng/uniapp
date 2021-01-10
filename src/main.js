import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

import request from '@/utils/request'
Vue.config.productionTip = false

Vue.use(request)
Vue.use(uView);
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
