import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
// import VueParticles from 'vue-particles'
import Particles from 'particles.vue3';

const app = createApp(App);
app.use(Particles)
app.use(Quasar, quasarUserOptions)
app.use(store)
app.use(router)
app.mount('#app')