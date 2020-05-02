/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './router/index';

// ประกาศ Axios
import VueAxios from "vue-axios";
import axios from "axios";

Vue.config.productionTip = false

// เรียกใช้
Vue.use(VueAxios, axios);
Vue.use(VueRouter)


const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
