
const routes = [{
    path: '*',
    redirect: '/homepage',
    component: () => import('@/index/components/homepage/homePage.vue')
},
{
    path: '/home',
    component: resolve => require(['../views/home/index.vue'],resolve),
    children: [
        { path: '/homepage', component: () => import('@/index/components/homepage/homePage.vue') },
        { path: '/setting', component: () => import('@/index/components/setting/set.vue') }
      ]
}
];

export default routes