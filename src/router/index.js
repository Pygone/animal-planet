import {createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
// import VueRouter from 'vue-router'
import Home from '../views/main/HomePage/Home.vue'
import Layout from '../views/Layout.vue'

const routes = [
    {
        path: '/home',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('../views/main/Main/main.vue'),
            },
            {
                path: 'personal',
                name: 'Personal',
                component: () => import('../views/main/personal.vue'),
            },
            {
                path: 'map',
                name: 'Map',
                component: () => import('../views/main/map.vue'),
            }
        ]
    },
    {
        path: '/',
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


export default router
