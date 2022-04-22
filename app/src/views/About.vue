<!-- <img src="../assets/Doser_transparent_128.gif"/> -->
<template>
  <q-page id="intro" class="">

    <!-- About metabrainz io 
    <div id="meta-brainz-io"></div>
    <div class="my-title text-h4 text-white">About</div>
    <div class="q-py-md"/>
    <q-card class="q-pa-none bg-transparent row text-white">
      <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
          style="width:25rem"
          :src="require('@/assets/images/metabrainzio.jpg')"/>
      </q-card-section>

      <q-card-section class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
        <div class="text-h6">TITLE ABC DEF GHI JKL MNO PQR STU VWX YZ </div>
        <div class="q-mt-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in leo nec nisi sagittis rhoncus vitae eu magna. Aliquam viverra lobortis sem, vel vestibulum leo iaculis ut.
        </div>
        <div class="q-mt-md">
        <div class="text-h6">TITLE ABC DEF GHI JKL MNO PQR STU VWX YZ </div>
        <div class="text-caption">
          Nulla eget euismod ex, a venenatis sapien. Maecenas vel mi id risus varius volutpat et vel purus. Proin tincidunt purus bibendum nunc dapibus, ac feugiat tellus porta. Fusce metus metus, varius quis elit et, facilisis venenatis velit. Nullam eu ligula felis. Nullam pharetra nibh id metus accumsan imperdiet.
        </div>
        </div>
      </q-card-section>
    </q-card>
    -->
    <div class="q-py-xl"/>

    <!-- INTRO -->
    <div ></div>
    <div class="">
        <!-- res * -->
          <AboutIntro/>
    </div>

    <div class="q-py-xl"/>

    <!-- M-Brains -->
    <div id="meta-brains"></div>
    <div class="">
        <!-- res default -->
        <div class="gt-md">
          <div class="q-pa-xl bg-dark text-center my-title text-h2 text-weight-bold text-white">
            <div class="q-py-xl"/>
              M-Brains
            <div class="q-py-xl"/>
          </div>
          <AboutMetaBrainsLG/>
        </div>

        <!-- res tablet -->
        <div class="md">
          <div class="q-pa-lg bg-dark text-center my-title text-h3 text-weight-bold text-white">
            <div class="q-py-lg"/>
              M-Brains
            <div class="q-py-lg"/>
          </div>
          <AboutMetaBrainsMD/>
        </div>

        <!-- res mobile -->
        <div class="lt-md">
          <div class="q-pa-lg bg-dark text-center my-title text-h3 text-weight-bold text-white">
            <div class="q-py-lg"/>
              M-Brains
            <div class="q-py-lg"/>
          </div>
          <MAboutMetaBrains/>
        </div>        
    </div>

    <div class="q-py-xl"/>

    <!-- M-Gears -->
    <div id="meta-gears"></div>
    <div class="">
        <!-- res default -->
        <div class="gt-md">
          <div class="q-pa-xl bg-dark text-center my-title text-h2 text-weight-bold text-white">
            <div class="q-py-xl"/>
              M-Gears
            <div class="q-py-xl"/>
          </div>
          <AboutMetaGearsLG/>
        </div>

        <!-- res tablet -->
        <div class="md">
          <div class="q-pa-lg bg-dark text-center my-title text-h3 text-weight-bold text-white">
            <div class="q-py-lg"/>
              M-Gears
            <div class="q-py-lg"/>
          </div>
          <AboutMetaGearsMD/>
        </div>

        <!-- res mobile -->
        <div class="lt-md">
          <div class="q-pa-lg bg-dark text-center my-title text-h3 text-weight-bold text-white">
            <div class="q-py-lg"/>
              M-Gears
            <div class="q-py-lg"/>
          </div>
          <MAboutMetaGears/>
        </div>        
    </div>

    <div class="q-py-xl"/>
   
    <!-- METASTADIA -->
    <div id="meta-games"></div>
    <div class="">
        <!-- res default 
        -->
        <div class="gt-md">
          <div class="q-pa-xl bg-dark text-center my-title text-h2 text-weight-bold text-white">
            <div class="q-py-xl"/>
              M-Games
            <div class="q-py-xl"/>
          </div>
          <AboutMetaGamesLG/>
        </div>
        <!-- res tablet -->
        <div class="md">
          <div class="q-pa-lg bg-dark text-center my-title text-h3 text-weight-bold text-white">
            <div class="q-py-lg"/>
              M-Games
            <div class="q-py-lg"/>
          </div>
          <AboutMetaGamesMD/>
        </div>

        <!-- res mobile -->
        <div class="lt-md">
          <div class="q-pa-lg bg-dark text-center my-title text-h3 text-weight-bold text-white">
            <div class="q-py-lg"/>
              M-Games
            <div class="q-py-lg"/>
          </div>
          <MAboutMetaGames/>
        </div>
        
    </div>

    <div class="q-py-xl"/>

    <!-- faq -->
    <div id="faq"></div>
    <div class="">
        <!-- res default -->
        <div class="gt-sm">
          <div class="q-pa-xl bg-dark">
            <div class="q-py-xl"/>
              <div class="gt-md text-center my-title text-h2 text-weight-bold text-white">
                FAQ / Docs
              </div>
              <div class="md text-center my-title text-h3 text-weight-bold text-white">
                FAQ / Docs
              </div>              
            <div class="q-py-xl"/>
          </div>
          <FAQ/>
        </div>

        <!-- res mobile 
        -->
        <div class="lt-md">
          <div class="q-pa-lg bg-dark text-center my-title text-h3 text-weight-bold text-white">
            <div class="q-py-lg"/>
              FAQ / DOCS
            <div class="q-py-lg"/>
          </div>
          <FAQ/>
        </div>
    </div>

    <div class="q-py-xl"/>

    <!-- TEAM -->
    <div id="team"></div>
    <div class="">
        <!-- res default AboutMetaGamesLG
        -->
        <div class="gt-sm">
          <div class="q-pa-xl bg-dark text-center my-title text-h2 text-weight-bold text-white">
            <div class="q-py-xl"/>
              Team
              <div class="q-pa-md text-subtitle1">[ solo ]</div>
            <div class="q-py-xl"/>
          </div>
          <Team/>
        </div>

        <!-- res mobile -->
        <div class="lt-md">
          <div class="q-pa-lg bg-dark text-center my-title text-h3 text-weight-bold text-white">
            <div class="q-py-lg"/>
              Team
              <div class="q-pa-sm text-subtitle2">[ solo ]</div>              
            <div class="q-py-lg"/>
          </div>
          <Team/>
        </div>
    </div>

  </q-page>
</template>

<script>
import AboutIntro from '@/components/AboutIntro.vue'
// import AboutMetaBrains_md from '@/components/AboutMetaBrains_md.vue'
import AboutMetaBrainsLG from '@/components/AboutMetaBrains_lg.vue'
import AboutMetaBrainsMD from '@/components/AboutMetaBrains_md.vue'
import MAboutMetaBrains from '@/components/mobile/MAboutMetaBrains.vue'
import AboutMetaGearsLG from '@/components/AboutMetaGears_lg.vue'
import AboutMetaGearsMD from '@/components/AboutMetaGears_md.vue'
import MAboutMetaGears from '@/components/mobile/MAboutMetaGears.vue'
import AboutMetaGamesLG from '@/components/AboutMetaGames_lg.vue'
import AboutMetaGamesMD from '@/components/AboutMetaGames_md.vue'
import MAboutMetaGames from '@/components/mobile/MAboutMetaGames.vue'
import FAQ from '@/components/FAQ.vue'
import Team from '@/components/Team.vue';

export default{
  name:"About",
  components: {
    AboutIntro,
    AboutMetaBrainsLG,
    AboutMetaBrainsMD,
    MAboutMetaBrains,
    AboutMetaGearsLG,
    AboutMetaGearsMD,
    MAboutMetaGears,
    AboutMetaGamesLG,
    AboutMetaGamesMD,
    MAboutMetaGames,
    FAQ,
    Team
  },
  setup(){
    return{
      goto(refName) {
          var element = document.getElementById(refName);
          var top = element.offsetTop;
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
      }
    }
  }

}
</script>