<template>
  <q-page class="main-bg-png q-py-xl">

    <div class="q-pa-xl">
        <div class="my-title text-h4 text-white">{{msg_title}}</div>
        <div class="q-py-sm"/>
        <div class="my-title text-subtitle text-white">{{msg_title_sub}}</div>
        <div class="q-py-md"/>
        <div class="my-title text-subtitle text-white">
            A MetaGear is a digital fix (or bio-hackable-software) that can be integrated into your
            <router-link to="/metabrain">MetaBrain</router-link>
            to fix or enhance your MetaBrain'z performance.        
        </div>
        <img 
            src="../assets/CyberBrain_games_trans2.gif"
            style="width:25rem;"
        />
    </div>

    <!-- CONTENT: AIRDROP -->

    <!-- CONTENT: ITEMS -->
    <div class="home flex flex-center">
      <div class="">
        <div class="q-py-md row text-h4 text-white">
            MetaGears
        </div>
        <div class="row justify-start">
            <ContentItems/>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import ContentItems from '@/components/ContentItems.vue'
export default {
    name: 'MetaGear',
    components: {
        ContentItems
    },
    setup(){

        return{
            msg_title: "MetaGear",
            msg_title_sub: "Find all the Integratable Gears your MetaBrain will ever need ;)",
            msg_description: ""
        }
    }
}

</script>
