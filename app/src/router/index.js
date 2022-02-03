import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Home.vue')
  },
  {
    path: '/metagear',
    name: 'Metagear',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MetaGear.vue')
  },
  {
    path: '/metabrain',
    name: 'Metabrain',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MetaBrain.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Test.vue')
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

// router.beforeEach((to, from)=>{

//   if(from.name != undefined && from.name != to.name){
//     var referrer = "?referrer=%2F"+from.name
//     var route = "/"+to.name+referrer
//     console.log(route)
//   }
// })
// localhost:8080/connect?referrer=%2Fasset%2Fhome


