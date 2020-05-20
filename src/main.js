import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './../node_modules/bulma/css/bulma.css';
import store from './store'

import routes from './router/index';

//import CSV
// import { VueCsvImport } from 'vue-csv-import';


// ประกาศ Axios
import VueAxios from "vue-axios";
import axios from "axios";
// set auth header
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

Vue.config.productionTip = false

// เรียกใช้
Vue.use(VueAxios, axios);
Vue.use(VueRouter)


const router = new VueRouter({routes});

new Vue({
  router,
  store,
  // components: { VueCsvImport},
  render: h => h(App),
}).$mount('#app')
