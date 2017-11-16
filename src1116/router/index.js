import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChatApp from '@/components/ChatApp'
import todoList from '@/components/TodoList'
import BookList from '@/components/BookList'
import vueAxios from '@/components/vueAxios'

import SignIn from '@/components/user/SignIn'
import SignUp from '@/components/user/SignUp'
import Profile from '@/components/user/Profile'

BookList
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/SignIn',
      name: 'Sign-In',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'Sign-Up',
      component: SignUp
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/HelloWorld',
      name: 'Hello-World',
      component: HelloWorld,
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
      path: '/BookList',
      name: 'Book-List',
      component: BookList
    },
    {
      path: '/vueAxios',
      name: 'vue-Axios',
      component: vueAxios
    },
    // 網址錯誤所跳轉的網頁，EX:404
    {
      path: '/*',
      redirect: '/HelloWorld',
    },
  ]
})
