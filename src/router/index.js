import Vue from 'vue';
import Router from 'vue-router';
import NewsDetail from '@/components/NewsDetail';
import newsList from '@/components/newsList';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/detail',
      name: 'NewsDetail',
      component: NewsDetail,
    },
    {
      path: '/',
      name: 'newsList',
      component: newsList,
    }
  ]
})
