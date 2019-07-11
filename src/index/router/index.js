import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/index/components/homepage/homePage.vue'
import Setting from '@/index/components/setting/set.vue'
Vue.use(VueRouter);



const routes = [{
        path: '*',
        redirect: '/homepage',
        component: HomePage
    },
    {
        path: '/home',
        component: resolve => require(['../views/home/index.vue'],resolve),
        children: [
            { path: '/homepage', component: HomePage },
            { path: '/setting', component: Setting }
          ]
    }
];

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