import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/metagear',
    name: 'Metagear',
    component: () => import('../views/MetaGear.vue')
  },
  {
    path: '/metabrain',
    name: 'Metabrain',
    component: () => import('../views/MetaBrain.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router

router.beforeEach((to, from, next)=>{

  if(to.name == undefined){
    console.log("page not found, redirecting..")
    next('/notfound')
  }else{
    next()
  }
})