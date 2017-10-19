import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ 'views/Home')
const Another = () => import('views/Another')

Vue.use(Router)

module.exports = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: Home
    },
    {
      path: '/another',
      component: Another
    }
  ]
})
