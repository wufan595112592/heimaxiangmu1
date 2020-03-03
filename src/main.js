import Vue from 'vue'
import App from './App.vue'
import '@/permission'
import router from './router'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Components from '@/components'
import './styles/index.less'
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Elementui)
// Vue.use(Components)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
