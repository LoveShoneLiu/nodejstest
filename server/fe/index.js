
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './src/router';
import App from './src/components/App/App.vue';
// import store from './store/'
// import ajax from './config/ajax'
// import './style/common'
// import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	// store,
	render: h =>h(App)
}).$mount('#app')