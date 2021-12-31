
<template>
  <q-page class="main-bg-png">
    <!-- CONTENT: UPDATES -->
    <div class="q-pa-xl">
      <div class="my-title text-h4 text-white">Welcome to MetaBrainz</div>
      <div class="my-title text-subtitle text-white">Interfacing Brainz into the Metaverse</div>
    </div>

  <!--
    <div class="row bg-accent text-white text-h4">
      <div class="col">
        <div class="text-h4 text-white">We are developing all the Cyber Meds you'll ever need ;)</div>
        <div class="flex-break"></div>
      </div>
      <div class="col">
        <div>
          <div class="text-h5 text-white">Ahoi! I'm Doser, your Cyber Medical Assistent!</div>
        </div>
        <div>
          <Content/>
        </div>
      </div>
    </div>
    -->

    <!-- CONTENT: UPDATES -->
    <div class="home flex flex-center">
      <img 
        src="../assets/CyberBrain_sync_transparent_xl.gif"
        style="width:12rem;"
      />
    </div>
    <!-- CONTENT: AIRDROP -->

    <!-- CONTENT: ITEMS -->
    <div class="home flex flex-center">
      <div class="q-pa-xl">
        <div class="q-py-md row text-h4 text-white">
            Meta-Integratables
        </div>
        <div class="row justify-start">
            <ContentItems/>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
// @ is an alias to /src
// import Content from '@/components/Content.vue'
import ContentItems from '@/components/ContentItems.vue'

export default {
  name: 'Home',
  components: {
    // Content,
    ContentItems
  },
  setup(){
    return{
      msg:"CyberBrainz"
    }
  }
}
</script>

<style>


</style>
