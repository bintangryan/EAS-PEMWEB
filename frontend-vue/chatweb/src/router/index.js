import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ChannelView from '../views/ChannelView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUpView // Halaman sign up akan ditampilkan saat membuka halaman root
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView // Halaman login
    },
    {
      path: '/channels',
      name: 'channels',
      component: ChannelView // Halaman daftar channel
    },
    {
      path: '/channels/:channelId',
      name: 'chat-room',
      component: ChatRoomView // Halaman ruang obrolan di dalam channel
    }
  ]
})

export default router



