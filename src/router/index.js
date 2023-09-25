import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import LoginedView from '../views/LoginedView.vue'
import SavingVaults from '../views/SavingVaults.vue';
import StakeEarn from '../views/StakeEarn.vue';
import Affiate from '../views/AffiateView.vue';
import CryptoCard from '../views/CryptoCard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/logined',
    name: 'logined',
    component: LoginedView
  },
  {
    path: '/SavingVaults',
    name: 'SavingVaults',
    component: SavingVaults
  },
  {
    path: '/StakeEarn',
    name: 'StakeEarn',
    component: StakeEarn
  },
  {
    path: '/Affiate',
    name: 'Affiate',
    component: Affiate
  },
  {
    path: '/CryptoCard',
    name: 'CryptoCard',
    component: CryptoCard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
