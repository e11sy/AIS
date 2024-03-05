import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/application/router/routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;