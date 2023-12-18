// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css';
// import Carousel3d from 'vue-carousel-3d';

const app = createApp(App);

// Use Vue Router
app.use(router);

// Use Carousel3d (Ensure the correct usage based on library documentation)
// app.use(Carousel3d);

// Mount the app to the HTML element with id 'app'
app.mount('#app');
