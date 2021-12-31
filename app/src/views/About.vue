<!-- <img src="../assets/Doser_transparent_128.gif"/> -->
<template>
  <q-page class="main-bg-png">
    <div class="q-pa-xl">
      <div class="my-title text-h4 text-white">About MetaBrains</div>

      <div class="q-pa-xl">
            <div class="my-title q-py-lg text-h5 text-white">CyberMedix</div>
            <img 
              src="../assets/CyberBrain_games_trans2.gif"
              style="width:25rem;"
            />

            <div class="my-title q-py-lg text-h5 text-white">CyberBrainz</div>
            <img 
              src="../assets/CyberBrain_sync_transparent_xl.gif"
              style="width:12rem;"
            />
            
            <div class="my-title q-py-lg text-h5 text-white">CyberGamez</div>

        <div class="row items-start q-gutter-md">
            <!-- DEFAULT RES 
            -->
            <div class="q-py-xl gt-xs col text-subtitle2 text-white">
              <div v-for="line in content_left" :key="line.id">
                {{line.cnt}}
              </div>
            </div>

            <div class="q-py-xl gt-xs col text-subtitle2 text-white">
              <div v-for="line in content_right" :key="line.id">
                {{line.cnt}}
              </div>
            </div>

            <!-- MOBILE RES -->
            <div class="q-py-xl lt-sm text-subtitle2 text-white">
              <div v-for="line in content_left" :key="line.id">
                {{line.cnt}}
              </div>
            </div>

            <div class="q-py-xl lt-sm text-subtitle2 text-white">
              <div v-for="line in content_right" :key="line.id">
                {{line.cnt}}
              </div>
            </div>
        </div>
      </div>

      <!--


      -->

      <!--
          <div class="q-py-xl gt-sm col text-subtitle2 text-white">
            It's 2030..
            <br>
            <br>Currently 95% of us are connected to the Metaverse, mentally that is..
            <br>Physically most of us still reside on earth, though I've heard a new economy is being build on Mars as we speak
            <br>How did we get here?
            <br>Simply put, technology progressed a bit faster than time itself :)
          </div>

          <div class="q-py-xl gt-sm col text-subtitle2 text-white">
            Btw, I am Doser from CyberMedix!
            <br>
            <br>We at CyberMedix believe that any problem can be solved with the right technology
          </div>
      <div class="q-pa-md text-white bg-grey-10" style="border:1px solid red">

        <div class="column" style="height: 150px;">
          <div class="col-3 col-sm-6" style="border:1px solid red">
            Currently 95% of us are connected to the Metaverse, 
            <br>mentally that is..
          </div>
          <div class="col-3 col-sm-6" style="border:1px solid red">.col-3 .col-sm-6</div>

          <div class="col-3 col-sm-6" style="border:1px solid red">
            Currently 95% of us are connected to the Metaverse,
            <br>mentally that is..
          </div>
          <div class="col-3 col-sm-6" style="border:1px solid red">.col-3 .col-sm-6</div>
        </div>
      </div>
      -->

    </div>
  </q-page>
</template>

<script>


export default{
  name:"About",
  setup(){

    const content_left = [
      { cnt: "It's 2030.."},
      { cnt: "Currently 95% of us are connected to the Metaverse, mentally that is.."},
      { cnt: "Physically most of us still reside on earth, though I've heard a new economy is being build on Mars as we speak"},
      { cnt: "How did we get here?"},
      { cnt: "Simply put, technology progressed a bit faster than time itself :)"}
    ]
    const content_right = [
      { cnt: "Btw, I am Doser from CyberMedix!"},
      { cnt: "We at CyberMedix believe that any problem can be solved with the right technology"}
    ]

    return{
      content_left,
      content_right
    }
  }

}
</script>