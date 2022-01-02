<template>
  <div class="main-bg-png">
    <q-layout view="hHh lpR lff">
      <q-header class="my-header bg-transparent text-white">


          <!-- MOBILE RES -->
          <div class="lt-sm">
          
            <q-toolbar>
              <q-btn dens flat round icon="menu" @click="toggleLeftDrawer"/>
              <q-space />
              <div 
                @click="$router.push('/')" 
                style="cursor: pointer; font-size: 1.5rem"
              >
                <img src="./assets/CyberBrain_sync_transparent_lg.gif" style="width: 3.5rem;">
              </div>
            </q-toolbar>

            <q-drawer
              class="my-drawer"
              transparent
              v-model="drawerOpen" 
              behavior=“desktop”
              :show-if-above="false"
              side="left"
            >
              <q-scroll-area class="fit">
                <q-list>

                  <div class="q-py-xs"></div>
                  <!-- Close btn -->
                  <div 
                    class="float-right"
                    style="cursor: pointer; font-size: 1.5rem;"
                    @click="toggleLeftDrawer"
                  >
                    {{btn_close_char}}&nbsp;&nbsp;
                  </div>

                  <!-- spacing after close btn -->
                  <div class="q-py-md"></div>

                  <!-- menu items -->
                  <template v-for="(menuItem, index) in menuList" :key="index">
                    <q-item clickable :active="menuItem.label === '*'" v-ripple>
                      <!-- avatars
                      <q-item-section avatar>
                        <q-icon :name="menuItem.icon" />
                      </q-item-section>
                      -->
                      
                      <!-- menu items -->
                      <q-item-section @click="$router.push(menuItem.route)">
                        {{ menuItem.label }}
                      </q-item-section>

                    </q-item>
                    <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
                  </template>

                </q-list>
              </q-scroll-area>
            </q-drawer>

          </div>
          
          <!-- DEFAULT RES -->
          <div class="gt-xs">
            <q-toolbar>
              <q-tabs shrink stretch>
                <div
                  class="gt-xs text-h5 text-white" 
                  @click="$router.push('/')" 
                  style="cursor: pointer; font-size: 1.5rem"
                >
                </div>
                <div 
                  @click="$router.push('/')" 
                  style="cursor: pointer; font-size: 1.5rem"
                >
                  <img src="./assets/CyberBrain_sync_transparent_lg.gif" style="width: 3.5rem;">
                </div>
              </q-tabs>
              <q-space />
              <q-tabs>
                <q-route-tab to="/metabrain" label="MetaBrain" />
                <q-route-tab to="/metagear" label="MetaGear" />
                <q-route-tab to="/about" label="About" />
                <q-route-tab to="/contact" label="Contact" />
                <q-route-tab to="/connect" label="Connect" />
              </q-tabs>
            </q-toolbar>
          </div>
      </q-header>

      <!-- header spacing -->
      <div class="q-pa-lg"/>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer reveal class="my-footer bg-transparent text-white">
        <q-toolbar>
          <q-toolbar-title>
            <div>© 2022 metabrainz</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>

import { ref } from 'vue'

const menuList = [
  {
    route: '/',
    label: 'Home',
    separator: true
  },
  {
    route: '/metabrain',
    label: 'MetaBrain',
    separator: false
  },
  {
    route: '/metagear',
    label: 'MetaGear',
    separator: false
  },
  {
    route: '/about',
    label: 'About',
    separator: false
  },
  {
    route: '/contact',
    label: 'Contact',
    separator: false
  },
  {
    route: '/connect',
    label: 'Connect',
    separator: false
  },
]

export default {
  name: 'LayoutDefault',
  components: {
  },
  setup () {
    const drawerOpen = ref(false);
    return {
      btn_close_char: "<",
      menuList,
      drawerOpen,
        toggleLeftDrawer: ()=>{
          drawerOpen.value = !drawerOpen.value;
        }
    }
  }
}
</script>

<style>
.main-bg{
  background-color: #010011;
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
}

.main-bg-png{
  
  background-color: #010011;
  background-image: url("assets/main.png");
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-position: center;
}

.main-bg-animated{
  
  background-color: #010011;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/carrion_fighting-sleep.gif");
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-position: center;
}

.my-header{
    font-family: 'Orbitron';
}

.my-drawer{
  background-color: #010011;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url("assets/main.png");
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
}
.my-title{
  font-family: 'Orbitron';
}
.my-footer{
  font-family: 'Orbitron';
}
</style>