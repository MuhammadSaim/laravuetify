import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "./components/LoginComponent";
import HomePage from "./components/HomePage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: "/login"
    },
    {
        path: '/login',
        component: LoginComponent,
        name: "login"
    },
    {
        path: '/home',
        component: HomePage,
        name: "home",
        beforeEnter: (to, from, next) => {
            let email = localStorage.getItem("email");
            let password = localStorage.getItem("password");
            if(email === 'muhammadsaim494@gmail.com' && password === 'muhammadsaim'){
                next();
            }else{
                next("/logout")
            }
        }
    }
];

export default new VueRouter({routes});
