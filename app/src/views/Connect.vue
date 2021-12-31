<template>
  <q-page class="main-bg">
  <div class="q-pa-xl">
    <div class="my-title text-h4 text-white">Connect to MetaBrainz</div>
    <div class="q-py-sm"></div>
      <div v-if="isAuthenticated">
        <q-btn color="accent" label="Disconnect" @click="signout"/>
      </div>
      <div v-else>
        <q-btn color="accent" label="Connect" @click="signin"/>
      </div>
  </div>
  </q-page>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default{
  name: 'Connect',
  setup(){
    const store = useStore()
    console.log(store.getters.isAuthenticated)
    return{
        signin: () => { store.dispatch('login_action')},
        signout: () => { store.dispatch('logout_action')},
        isAuthenticated: computed(() => store.getters.isAuthenticated),
    }
  }
}
</script>


<style>

</style>