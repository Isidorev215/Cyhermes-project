import { createRouter, createWebHistory } from 'vue-router'
import TrialPricing from '../views/TrialPricing.vue'
import PaymentMethod from '../views/PaymentMethod.vue'
import GetStarted from '../views/GetStarted.vue'

const routes = [
  {
    path: '/',
    name: 'TrialPricing',
    component: TrialPricing
  },
  {
    path: '/paymentMethod',
    name: 'PaymentMethod',
    component: PaymentMethod
  },
  {
    path: '/getStarted',
    name: 'GetStarted',
    component: GetStarted
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
