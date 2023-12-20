// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import HelloWorld from '../components/HelloWorld.vue';
import BookOldDate from '../Views/BookOldDate.vue';
import Signup from '../Views/Signup.vue';
import Signin from '../Views/Signin.vue';
import AddBook from '../Views/AddBook.vue';
import EditBook from '../Views/EditBook.vue';
import BookDetail from '../Views/BookDetail.vue';
import Cart from '../Views/Cart.vue';
import Home from '../components/Carousel.vue';
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
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
  {
    path: '/Book/AddBook',
    name: 'AddBook',
    component: AddBook,
  },
  {
    path: '/Book/EditBook/:id',
    name: 'EditBook',
    component: EditBook,
  },
  {
    path: '/Book/BookDetail/:id',
    name: 'BookDetail',
    component: BookDetail,
  },
  {
    path: '/Book/Cart/',
    name: 'Cart',
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
