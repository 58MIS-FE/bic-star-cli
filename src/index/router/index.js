import Vue from 'vue';
import VueRouter from 'vue-router';
import routeItem from './router.json'
Vue.use(VueRouter);
console.log(routeItem,'routeItem')

routeItem.forEach((item) => {
    item.component = resolve => require([`../views/${item.target}/${item.target}.vue`],resolve)
})



const routes = [{
    path: '*',
    redirect: '/homes'
},
{
    path: '/home',
    component: resolve => require(['../views/home/home.vue'],resolve),
    children: routeItem
}];
const router = new VueRouter({
    routes
});
// console.log(route)
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