<template>
  <q-page class="main-bg-png q-py-xl">

    <div class="q-pa-xl">
      <div class="my-title text-h4 text-white">{{msg_title}}</div>
      <div class="q-py-sm"/>
      <div class="my-title text-subtitle text-white">{{msg_title_sub}}</div>
      <div class="q-py-md"/>
      <div class="my-title text-subtitle text-white">{{msg_description}}</div>
      <img 
        src="../assets/CyberBrain_sync_transparent_xl.gif"
        style="width:12rem;"
      />
    </div>

    <!-- CONTENT: MAIN -->

  </q-page>
</template>

<script>
// import ContentItems from '@/components/ContentItems.vue'
export default {
    name: 'MetaBrain',
    components: {
        // ContentItems
    },
    setup(){

        return{
            msg_title: "MetaBrain",
            msg_title_sub: "subtitle......",
            msg_description: "description......"
        }
    }
}

</script>
