import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import '@/common/stylus/index.styl'

Vue.config.productionTip = false

// 解决老ios的问题，chrome浏览器早在2014年就已经解决， 问题是本身这个插件已经不在更新，
// 引入可能增加新的问题
fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('./common/image/tv.png'),
  hrottleWait: 200
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
