import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import HelloWorldIM from '@/components/HelloWorldIM.vue'
import HelloWorldIM79 from '@/components/HelloWorldIM79.vue'
import IMTable from '@/components/IMTable.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'HelloWorld'
        },
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/HelloWorldIM',
        name: 'HelloWorldIM',
        component: HelloWorldIM
      },
      {
        path: '/HelloWorldIM79',
        name: 'HelloWorldIM79',
        component: HelloWorldIM79
      },
      {
        path: '/IMTable',
        name: 'IMTable',
        component: IMTable
      }
      
  
    ]
  })