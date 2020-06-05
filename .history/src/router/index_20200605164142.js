import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      redirect: '/'
    },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta:{
          title:'首页',
        }
      },
      {
        path: 'detail',
        name :'Detail',
        component: () => import('../views/detail/Detail'),
        meta: {
          title: '详情页'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '*',
    component: () => import('../views/err/Err'),
    meta: {
      title: '错误页'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
