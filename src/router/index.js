import Vue from 'vue'
import Router from 'vue-router'
import live2D from '@/components/live2D/live2d/live2D'
import elvideo from '@/components/video-test/v-video'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 主页
    {
      path: '/',
      name: 'live2D',
      component: live2D
    },
    {
      path: '/v-video',
      name: 'v-video',
      component: elvideo
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller,
      meta: { keepAlive: true }
    },

  ]
})
