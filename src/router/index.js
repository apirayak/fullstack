// routes.js
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';

//Users
import collectdata from '../components/Collectdata.vue';
import Profile from '../components/Profile.vue';
import ShowStudent from '../components/ShowStudent.vue';
import Testlogin from '../components/testlogin.vue';
import Testcsv from '../components/testcsv.vue'

//Admin
import AddUser from '../components/admin/adduser.vue';
import AddSchool from '../components/admin/addschool.vue'

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
        path: '/adduser',
        name: 'adduser',
        component: AddUser
    },
    {
        path: '/testlogin',
        name: 'testlogin',
        component: Testlogin
    },
    {
        path: '/testcsv',
        name: 'testcsv',
        component: Testcsv
    }

];

export default routes;