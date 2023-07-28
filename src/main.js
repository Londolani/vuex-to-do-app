import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import store from './store.js';

import ListTask from './components/ListTask.vue'
import TaskDescription from './components/TaskDescription.vue'
import AddTask from './components/AddTask.vue'
import EditTask from './components/EditTask.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component:ListTask},
        {path: '/add', component:AddTask},
        {path:'/description/:taskId', component: TaskDescription},
        {path:'/edit/:taskId', component:EditTask}
    ],
    linkActiveClass: 'active'
})

const app = createApp(App);

app.use(store);
app.use(router)

app.mount('#app');
