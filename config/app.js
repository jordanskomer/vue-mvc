import Vue from 'vue'
import router from 'config/grouter'
import store from 'config/vuex'
import filters from 'config/filters'

import App from 'views/App'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  filters,
  router,
  store,
  render: h => h(App)
})
