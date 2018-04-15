import Vue from 'vue'
import Router from 'vue-router'

const Rank = () => import(/* webpackChunkName: 'rank' */ '@/views/rank/rank')
const User = () =>
  import(/* webpackChunkName: 'user' */ '@/views/user-center/user-center')
const Paint = () =>
  import(/* webpackChunkName: 'paint' */ '@/views/paint/paint')
const Photograph = () =>
  import(/* webpackChunkName: 'photograph' */ '@/views/photograph/photograph')

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
