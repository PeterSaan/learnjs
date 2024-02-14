import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Messages from './pages/Messages.vue'
import ChuckNorris from './pages/ChuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import CanvasExample from './pages/CanvasExample.vue';
import MapExample from './pages/MapExample.vue';
import Websocket from './pages/Websocket.vue';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/todo', component: ToDo, name: 'ToDo' },
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/messages', component: Messages, name: 'Messages' },
    { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
    { path: '/rickandmorty', component: RickAndMorty, name: 'Rick and Morty' },
    { path: '/canvas', component: CanvasExample, name: 'Canvas' },
    { path: '/map', component: MapExample, name: 'Map Example' },
    { path: '/websocket', component: Websocket, name: 'Websocket' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');