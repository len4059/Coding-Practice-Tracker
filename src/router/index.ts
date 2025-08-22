import { createRouter, createWebHistory } from "vue-router"
import Dashboard from '../views/Dashboard.vue'
import Problems from '../views/Problems.vue'

const routes = [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: Dashboard },
    { path: '/problems', component: Problems },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;