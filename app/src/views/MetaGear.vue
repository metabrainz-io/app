<template>
  <q-page class="q-pa-lg">

    <div class="my-title text-h3 text-white">MetaGears</div>
        <div class="q-py-sm"/>
        <div class="my-title text-subtitle1 text-white">Get all the Integratable Gears your MetaBrain will ever need ;)</div>
        <div class="q-py-xl"/>

    <!-- CONTENT: ITEMS -->
    <div class="home flex flex-center">
      <div class="">
        <div class="my-text q-py-md row text-h4 text-white">
            All MetaGears
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
        }
    }
}

</script>
