import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChatApp from '@/components/ChatApp'
import todoList from '@/components/TodoList'
import vueAxios from '@/components/vueAxios'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'Hello-World',
      component: HelloWorld
    },
    {
      path: '/ChatApp',
      name: 'Chat-App',
      component: ChatApp
    },
    {
      path: '/todoList',
      name: 'Todo-list',
      component: todoList
    },
    {
      path: '/vueAxios',
      name: 'vue-Axios',
      component: vueAxios
    },
  ]
})
