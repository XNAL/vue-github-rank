import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Rank from '@/pages/Rank'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rank/:type',
      name: 'Rank',
      component: Rank
    }
  ]
})
