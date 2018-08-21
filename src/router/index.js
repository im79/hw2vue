import Vue from 'vue'
import Router from 'vue-router'

import Start from '@/components/Start.vue'
import Modal from '@/components/Modal.vue'
import Caroussel from '@/components/Caroussel.vue'
import IMTable from '@/components/IMTable.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: 'start'
      },
      {
        path: '/start',
        name: 'start',
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
      }
      
  
    ]
  })