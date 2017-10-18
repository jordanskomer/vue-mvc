Vue.use(Vuex)

// Global getters and actions
import actions from './actions'
import getters from './getters'

// Models
import sample from 'models/sample'

// Plugins
let plugins = []
if (APP.use.localStorage && typeof createPersist == 'function') {
  plugins.push(createPersist({
    namespace: "PROJECT__NAMESPACE",
    expires: 1.21e9 // Two Weeks
  }))
}

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    sample
  },
  plugins: plugins
})
