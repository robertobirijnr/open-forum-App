import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/style.css"
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('formatDate',function(value,formatType = 'LL'){
  if(!value) return ''
  return moment(value).format(formatType)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
