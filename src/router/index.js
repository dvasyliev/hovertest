import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import Gists from '@/pages/gists'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/gists',
      name: 'Gists',
      component: Gists
    }
  ]
})
