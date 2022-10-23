import { createWebHistory, createRouter } from "vue-router"
import TshopHome from '../pages/TshopHome.vue'
import TshopCart from '../pages/TshopCart.vue'

const routes = [
    {
        path: '/',
        name: 'TshopHome',
        component: TshopHome
    },
    {
        path: '/tshopcart',
        name: 'TshopCart',
        component: TshopCart
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


