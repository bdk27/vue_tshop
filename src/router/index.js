import { createWebHistory, createRouter } from "vue-router"
import TshopHome from '../pages/TshopHome.vue'
import TshopCart from '../pages/TshopCart.vue'

const routes = [
    {
        path: '/',
        name: 'TshopHome',
        component: TshopHome,
    },
    {
        path: '/tshopcart',
        name: 'TshopCart',
        component: TshopCart,
        props($route) {
            return {
                cartData: $route.query.cartData
            }
        },
    },
    {
        path: '/*',
        redirect: '/'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    /* mode: 'hash',
    base: '/vue_tshop', */
    scrollBehavior() {
        return {left: 0, top: 0};
    },
});

export default router;


