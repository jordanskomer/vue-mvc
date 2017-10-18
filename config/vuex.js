import { actions, getters } from 'store/global'
import plugins from 'store/plugins'

// Models
import sample from 'models/sample'

// Vuex instance
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    sample
  },
  plugins
})
