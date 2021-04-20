import Vue from 'vue';
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入MdsUi
import MdsUi from '@bic-fe/mds-ui'; // 引入组件
import '@bic-fe/mds-ui/dist/mds-ui.min.css'; // 引入组件的样式 

import router from './router';
import App from './App';
// 使用elementUI
Vue.use(ElementUI);
// 使用MdsUi
Vue.use(MdsUi)
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});