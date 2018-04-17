import Vue from 'vue'
import Router from 'vue-router'

const Rank = () => import(/* webpackChunkName: 'rank' */ '@/views/rank/rank')
const User = () =>
  import(/* webpackChunkName: 'user' */ '@/views/user-center/user-center')
const Paint = () =>
  import(/* webpackChunkName: 'paint' */ '@/views/paint/paint')
const Photograph = () =>
  import(/* webpackChunkName: 'photograph' */ '@/views/photograph/photograph')

const PaintDetail = () => import('@/components/paint-detail/paint-detail')
const PhotoDetail = () => import('@/components/photo-detail/photo-detail')
const RankDetail = () => import('@/components/rank-detail/rank-detail')

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
      component: Paint,
      children: [
        {
          path: ':id',
          component: PaintDetail
        }
      ]
    },
    {
      path: '/photograph',
      component: Photograph,
      children: [
        {
          path: ':id',
          component: PhotoDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    }
  ]
})
