import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../views/main/HomePage/Home.vue'
import Layout from '../views/Layout.vue'

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                // meta:{
                //     isLogin:true
                // },
                //这一部分有，则登录之后才能访问，不能游客访问
            },
            {
                path: 'main',
                name: 'Main',
                component: () => import('../views/main/main.vue'),
                // meta:{
                //     isLogin:true
                // },
            },
            {
                path: 'personal',
                name: 'Personal',
                component: () => import('../views/main/personal.vue'),
                // meta:{
                //     isLogin:true
                // },
            },
            {
                path: 'map',
                name: 'Map',
                component: () => import('../views/main/map.vue'),
                // meta:{
                //     isLogin:true
                // },
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import("../views/Register.vue")
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// const router = new VueRouter({
//       mode: 'history',
//       base: process .env.BASE_URL,
//       routes
//     },
// )

export default router
