import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import './mock/apiServer'

import app from './app'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

import './common/stylus/fonts.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

router.start(app, '#app')

router.go('/goods')
