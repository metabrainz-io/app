<template>
  <q-layout 
    view="hHh Lpr fFf" class="">
    <!--<q-header bordered class="bg-dark text-white elevate" height-hint="98">-->
    <q-header class="my-header bg-dark text-white" height-hint="98">
      <!-- 
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-tabs align="left">
        <div @click="$router.push('/')" style="cursor: pointer;">
          <img src="./assets/CyberMedix.gif" style="width: 3rem;">
        </div>
      </q-tabs>
      <q-tabs align="right">
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/contact" label="Contact" />
        <q-route-tab to="/connect" label="Connect" />
      </q-tabs>
      </q-toolbar>
      -->
      <q-toolbar class="text-white shadow-2 rounded-borders">

      <q-tabs shrink stretch>
          <div
            class="gt-xs text-h5 text-white" 
            @click="$router.push('/')" 
            style="cursor: pointer; font-size: 1.5rem"
          >
            metabrainz.io&nbsp;&nbsp;
          </div>
          <div 
            @click="$router.push('/')" 
            style="cursor: pointer; font-size: 1.5rem"
          >
          
            <img src="./assets/CyberBrain_sync_transparent_lg.gif" style="width: 3.5rem;">
          </div>
      </q-tabs>
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs align="right" >
        <q-route-tab to="/about" label="About" />
        <q-route-tab to="/contact" label="Contact" />
        <q-route-tab to="/connect" label="Connect" />
      </q-tabs>
    </q-toolbar>
    </q-header>

    
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="my-footer bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>© 2022 metabrainz</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',

  components: {
  },

  setup () {

    return {
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/home.gif");
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

.my-title{
  font-family: 'Orbitron';
}
.my-footer{
  font-family: 'Orbitron';
}
</style>