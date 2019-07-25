import Vue from 'vue';
import VueRouter from 'vue-router';
import { routeItem } from './router'
Vue.use(VueRouter);


routeItem.forEach((item) => {
    item.component = resolve => require([`../views/${item.target}/${item.target}.vue`],resolve)
})

console.log(routeItem)
// arr.forEach((item) =>{
//     console.log(item)
   
//     console.log(`../views/${item.target}/${item.target}.vue`)
// } )
let children = routeItem

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