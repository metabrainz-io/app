<!-- <img src="../assets/Doser_transparent_128.gif"/> -->
<template>
  <q-page class="main-bg-png q-py-xl">

    <div class="q-pa-xl">
      <div class="my-title text-h4 text-white">About MetaBrainz io</div>

      <div class="q-pa-xl">

        <div class="row items-start q-gutter-md">
            <!-- DEFAULT RES 
            -->
            <div class="q-py-xl gt-xs col text-subtitle2 text-red">
              <div v-for="line in content_left" :key="line.id">
                {{line.cnt}}
              </div>
            </div>

            <div class="q-py-xl gt-xs col text-subtitle2 text-blue">
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