import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: () => import('@/views/PageHome.vue')
  },
  {
    path: '/thread/:id',
    name: 'threadShow',
    component: () => import('@/views/PagethreadShow.vue'),
    props:true
  },
  {
    path: '/forum/:id',
    name: 'forum',
    component: () => import('@/views/PageForum.vue'),
    props:true
  },
  {
    path:'/category/:id',
    name:'category',
    component:() =>import('@/views/PageCategory.vue'),
    props:true
  },
  {
    path:'*',
    name:'notFound',
    component:()=>import('@/views/PageNotFound.vue')
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
