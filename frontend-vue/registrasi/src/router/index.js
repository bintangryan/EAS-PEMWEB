import { createRouter, createWebHistory } from 'vue-router';
import Regis from '../views/Regis.vue';
import CekRegis from '../views/CekRegis.vue';

const routes = [
  {
    path: '/',
    name: 'Regis',
    component: Regis
  },
  {
    path: '/check-registration',
    name: 'CekRegis',
    component: CekRegis
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;



