
<template>
  <q-page class="q-py-xl">

    <!-- CONTENT: INTRO -->
    <div class="q-pa-xl">
    
      <div class="my-title text-h4 text-white">Merging Brainz into the Metaverse</div>
      <div class="q-py-sm"/>
      <div class="my-title text-subtitle text-white"></div>

      <div class="row">
        <div class="col">
          <div class="text-h4 text-deep-purple-3">We are developing all the Cyber Meds you'll ever need ;)</div>
          <div class="flex-break"></div>
          <div class="home flex flex-center">
            <img 
              src="../assets/CyberBrain_sync_transparent_xl.gif"
              style="width:12rem;"
            />
          </div>
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
    </div>


  </q-page>
</template>

<script>
// @ is an alias to /src
// import Content from '@/components/Content.vue'

export default {
  name: 'Home',
  components: {
    // Content,
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
