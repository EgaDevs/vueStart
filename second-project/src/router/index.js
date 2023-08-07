import { createRouter, createWebHistory } from "vue-router";
import expense from "../components/expense.vue";
import income from "../components/income.vue";
import statistic from "../components/statistic.vue";

const my_routes = [
    {
        path: '/expense/',
        component: expense,
        name: 'Show Expenses',
    },
    {
        path: '/income/',
        component: income,
        name: 'Show Incomes',
    },
    {
        path: '/statistic/',
        component: statistic,
        name: 'Statistic',
    },
]

export default createRouter({
    routes: my_routes,
    history: createWebHistory()
})