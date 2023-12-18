// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import BookOldDate from '../Views/BookOldDate.vue';
import Signup from '../Views/Signup.vue';
import Signin from '../Views/Signin.vue';
const routes = [
  {
    path: '/Home',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/Books',
    name: 'BookOldDate',
    component: BookOldDate,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
