// routes.js
import Home from '../components/Home.vue';
import AddSchool from '../components/AddSchool.vue';
import Login from '../components/Login.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/addschool', component: AddSchool },
    { path: '/login', component: Login },
];

export default routes;