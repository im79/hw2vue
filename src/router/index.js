import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Start from '@/components/Start.vue'
import Modal from '@/components/Modal.vue'
import Caroussel from '@/components/Caroussel.vue'
import IMTable from '@/components/IMTable.vue'
import Chat from '@/components/Chat.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    /* {
        path: '/',
        redirect: 'start'
      },
      */
     {
      path: '/',
      name: 'Login',
      component: Login
      },
      {
        path: '/Logout',
        name: 'logout',
        component: Logout
      },
      {
        path: '/Start',
        name: 'Start',
        component: Start
      },
      {
        path: '/Modal',
        name: 'Modal',
        component: Modal
      },
      {
        path: '/Caroussel',
        name: 'Caroussel',
        component: Caroussel
      },
      {
        path: '/IMTable',
        name: 'IMTable',
        component: IMTable
      },
      {
        path: '/Chat',
        name: 'Chat',
        component: Chat
      }
      
  
    ]
  })