import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './router'
Vue.use(VueRouter);
console.log(routes,'routes')
routes.forEach((item) => {
    item.component = resolve => require([`../views/${item.target}/${item.target}.vue`],resolve)
})

const router = new VueRouter({
    routes
});

//可做埋点统计
router.beforeEach((route, from, next) => {
    let { meta } = route;

    meta.title && (window.document.title = meta.title);
    next();
});

router.afterEach((to, from) => {
    //pv 统计
  
});
export default router;