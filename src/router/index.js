import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import login from '../components/login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '',
      name: 'zhuce',
      component: () => import('../components/login.vue'),
    },
    {
      path: '/denglu',
      component: () => import('../components/denglu.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../components/Home.vue'),
      children: [{
          path: '/userlist',
          name: 'userlist',
          component: () => import('../components/userlist.vue')
        },
        {
          path: '/add',
          name: 'add',
          component: () => import('../components/add.vue')
        },
        {
          path: '/liuyan',
          component: () => import('../components/liuyan.vue')
        },
        {
          path: '/guanyu',
          component: () => import('../components/guanyu.vue')
        },
        {
          path: '/photo',
          component: () => import('../components/photo.vue')
        },
        {
          path: '/help',
          component: () => import('../components/help.vue')
        },
        {
          path: '/zan',
          component: () => import('../components/zan.vue')
        },
        {
          path: '/shareviedo',
          component: () => import('../components/shareviedo.vue')
        },
        {
          path: '/jieshao',
          component: () => import('../components/jieshao.vue')
        },
      ]
    },
  ]
})
