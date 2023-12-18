// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import BookOldDate from '../Views/BookOldDate.vue';
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
  // Thêm các route khác nếu cần
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
