import Vue from 'vue';
import Router from 'vue-router';
import { auth } from '../firebase';

const routerOptions = [
  { path: '/', component: 'Landing', meta: { requiresAuth: true } },
  { path: '/auth', component: 'Auth' },
  { path: '/landing', component: 'Landing', meta: { requiresAuth: true } },
  { path: '*', component: 'Auth' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import( /* webpackChunkName: "{{route.component}}" */ `../views/${route.component}.vue`)
  }
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/auth');
  } else {
    next();
  }
});

export default router;
