import Vue from 'vue'
import router from 'config/grouter'
import store from 'config/vuex'
import filters from 'config/filters'

Vue.config.productionTip = false
const app = new Vue({
  filters,
  router,
  store
}).$mount('#app')
