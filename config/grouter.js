import Vue from 'vue'
import Router from 'vue-router'

const App = () => import(/* webpackChunkName: "home" */ 'views/App')
const Another = () => import('views/Another')

Vue.use(Router)

module.exports = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: App
    },
    {
      path: '/another',
      component: Another
    }
  ]
})
