<template>
  <q-page id="m-gear" class="q-pa-lg">

      <div class="my-title text-h3 text-white">Get Your M-Gears</div>
      <div class="q-py-xl"/>
      <div class="my-title text-h5 text-white">
        Currently in progress!<br/>
        In the meantime, learn more about 
        <span style="cursor:pointer;color:#00f2a1;"
            @click="$router.push({ name: 'About', hash: '#meta-gears'})"
        >M-Gears
      </span>
      </div>
      <div class="q-py-xl"/>    

    <!-- START ITEMS -->

    <!--
      style="border: 1px solid #4c4886;"
    -->
    <div align="center" class="home flex-center justify-evenly">
        <div class="col q-pa-md" style="max-width:640px;">
          <div 
            class="my-text q-py-md row justify-center text-h4 text-weight-bold"
            style="border: 3px solid #4c4886;background-color:#01000b;color: #00f2a1"
          >
              All Gears
          </div>
            <div
              class="gt-xs my-text q-py-md row justify-center text-h6 text-weight-bold text-dark"
              style="margin-left: 0.5%;width:99%;background-color:#4c4886"
            >
              Get your Gear on!
              <div class="q-py-sm"/>
          </div>

            <div
              class="lt-sm my-text q-py-md row justify-center text-subtitle1 text-weight-bold text-dark"
              style="margin-left: 0.5%;width:99%;background-color:#4c4886"
            >
              Get your Gear on!
              <div class="q-py-sm"/>
          </div>

          <div style="border: 3px solid #4c4886;background-color:#01000b">
              <ContentItems/>
          </div>
        </div>

        <div class="flex-break q-py-md"></div>

        <div class="col q-pa-md" style="max-width:640px;">
            <div 
              class="my-text q-py-md row justify-center text-h4 text-weight-bold"
              style="border: 3px solid #4c4886;background-color:#01000b;color:#00f2a1"
            >
                Claim
            </div>

            <div
              class="gt-xs my-text q-py-md row justify-center text-h6 text-weight-bold text-dark"
              style="margin-left: 0.5%;width:99%;background-color:#4c4886"
            >
                Claim your M-Gear!
                <div class="q-py-sm"/>
            </div>

            <div
              class="lt-sm my-text q-py-md row justify-center text-subtitle1 text-weight-bold text-dark"
              style="margin-left: 0.5%;width:99%;background-color:#4c4886"
            >
                Claim your M-Gear!
                <div class="q-py-sm"/>
            </div>
          <!--
            style="border: 1px solid green;">
          -->
          <div style="border: 3px solid #4c4886;background-color:#01000b">
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
