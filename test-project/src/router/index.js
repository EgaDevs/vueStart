import { createRouter, createWebHistory } from "vue-router";
import viewer from "../components/lsnView.vue";
import marks from "../components/marks.vue";
import cards from "../components/studentCard.vue";

const my_routes = [
    {
        path: '/viewer/',
        component: viewer,
        name: 'View Lessons'
    },
    {
        path: '/marks/:id',
        component: marks,
        name: 'Marks'
    },
    {
        path: '/cards/',
        component: cards,
        name: 'Cards'
    },
]

export default createRouter({
    routes: my_routes,
    history: createWebHistory()
})