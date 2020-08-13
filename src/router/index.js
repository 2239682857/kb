import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '@/layout'),
        redirect: '/list',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import("@/views/home")
            },
            {
                path: '/list',
                name: 'list',
                component: () => import("@/views/list")
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
