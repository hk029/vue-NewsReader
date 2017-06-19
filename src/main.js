// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/HelloFromVux';
import router from './router';
import axios from 'axios';
import { AjaxPlugin } from 'vux';

Vue.use(VueRouter)
Vue.prototype.$http = axios;
Vue.prototype.log = console.log;

Vue.use(AjaxPlugin)
console.log(Vue.http)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app-box');
