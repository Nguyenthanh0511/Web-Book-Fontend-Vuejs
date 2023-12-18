// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.css';
// import Carousel3d from 'vue-carousel-3d';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const app = createApp(App);

// Use Vue Router
app.use(router);
app.use(VueSweetalert2)
// Use Carousel3d (Ensure the correct usage based on library documentation)
// app.use(Carousel3d);

// Mount the app to the HTML element with id 'app'
app.mount('#app');
