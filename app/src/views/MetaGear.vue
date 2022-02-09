<template>
  <q-page class="q-pa-lg">

    <div class="my-title text-h3 text-white">MetaGears</div>
    <div class="q-py-sm"/>
    <div class="my-title text-subtitle1 text-white">Find all the Integratable Gears your MetaBrain will ever need!</div>
    <div class="q-py-xl"/>

    <!-- START ITEMS -->

    <!--
      style="border: 1px solid red;"
    -->
    <div 
      class="home flex-center"
    >
        <div class="col">
          <div 
            class="my-text q-py-md row justify-center text-h4 text-weight-bold text-secondary"
            style="border: 2px solid #100e2f;background-color:#01000b"
          >
              All Gears
          </div>
            <div
              class="my-text q-py-md row justify-center text-h6 text-weight-bold text-white"
              style="margin-left: 0.5%;width:99%;background-color:#100e2f"
            >
              Get your Gear on!
              <div class="q-py-sm"/>
          </div>
          <div style="border: 2px solid #100e2f;background-color:#01000b">
              <ContentItems/>
          </div>
        </div>

        <div class="flex-break q-py-md"></div>

        <div class="col">
            <div 
              class="my-text q-py-md row justify-center text-h4 text-weight-bold text-secondary"
              style="border: 2px solid #100e2f;background-color:#01000b"
            >
                Claim
            </div>

            <div
              class="my-text q-py-md row justify-center text-h6 text-weight-bold text-white"
              style="margin-left: 0.5%;width:99%;background-color:#100e2f"
            >
                Claim your MetaGear now!
                <div class="q-py-sm"/>
            </div>
          <!--
            style="border: 1px solid green;">
          -->
          <div style="border: 2px solid #100e2f;background-color:#01000b">
              <ClaimableItems/>
          </div>
        </div>
    </div>

  </q-page>
</template>

<script>
import ContentItems from '@/components/ContentItems.vue'
import ClaimableItems from '@/components/ClaimableItems.vue'
export default {
    name: 'MetaGear',
    components: {
        ContentItems,
        ClaimableItems
    },
    setup(){

        return{
        }
    }
}

</script>
