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
        component: TshopCart,
        props($route) {
            return {
                id:  $route.query.id,
                name:  $route.query.name,
                image:  $route.query.image,
                cost:  $route.query.cost,
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
    scrollBehavior() {
        return {left: 0, top: 0};
    },
});

export default router;


