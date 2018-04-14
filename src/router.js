import Vue from 'vue'
import Router from 'vue-router'

import User from '@/views/user-center/user-center'
import Paint from '@/views/paint/paint'
import Photograph from '@/views/photograph/photograph'
import Rank from '@/views/rank/rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/paint'
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/paint',
      component: Paint
    },
    {
      path: '/photograph',
      component: Photograph
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
