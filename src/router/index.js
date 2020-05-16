// routes.js
import Home from '../components/Home.vue';
import AddSchool from '../components/AddSchool.vue';
import Login from '../components/Login.vue';
import collectdata from '../components/Collectdata.vue';
import Profile from '../components/Profile.vue';
import ShowStudent from '../components/ShowStudent.vue';
import Signup from '../components/SignUp.vue';
import Testlogin from '../components/testlogin.vue';

const routes = [
    {
        path: '/',
        redirect: {
            name: "login"
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/addschool',
        name: 'addschool',
        component: AddSchool
    },
    {
        path: '/collectdata',
        name: 'collectdata',
        component: collectdata
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/showstudent',
        name: 'showstudent',
        component: ShowStudent
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: Signup
    },
    {
        path: '/testlogin',
        name: 'testlogin',
        component: Testlogin
    }
];

export default routes;