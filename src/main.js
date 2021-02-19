import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element';
import './assets/global.css';
import axios from 'axios';
import Viser from 'viser-vue'

// 设置请求根路径
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/';
// Vue.prototype 向vue原型链上添加$http方法
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Viser)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
