import VueRouter from 'vue-router'
import Home from './views/Home'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ]
})