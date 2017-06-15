import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NewsDetail  from '@/components/NewsDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsDetail',
      component: NewsDetail
    }
  ]
})
