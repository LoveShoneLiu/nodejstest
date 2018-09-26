
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './src/router';
import App from './src/components/App/app.vue';
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
}).$mount('#app')