import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login.vue';
import home from '../components/Home.vue';
import firstPage from '../views/homePage/firstPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  {
    path: '/home',
    component: home,
    redirect: '/firstPage',
    children: [
      { path: '/firstPage', component: firstPage },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 哪个路径跳转而来
  // next 表示放行
  //    next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
});

export default router;
