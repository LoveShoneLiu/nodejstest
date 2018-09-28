
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './src/router';
import App from './src/components/App';
import './src/css/common/base.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import { getCookie } from 'jsCommon/js/utils';
// import store from './store/'
// import ajax from './config/ajax'
// import './style/common'
// import './config/rem'

Vue.use(VueRouter);
Vue.use(iView);
const router = new VueRouter({
	routes
});
// router.beforeEach((to, from, next) => {
// 	const isLogin = getCookie('userName') !== '' ? true : false;
// 	console.log('to', to);
// 	console.log('from', from);
// 	console.log('isLogin', isLogin);
// });

new Vue({
	router,
	render(h) { 
		return h(App)
	}
    // store,
}).$mount('#app')