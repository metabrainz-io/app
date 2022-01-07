<!-- <img src="../assets/Doser_transparent_128.gif"/> -->
<template>
  <q-page class="q-pa-lg">

    <!-- About metabrainz io -->
    <div id="meta-brainz-io"></div>
    <div class="my-title text-h4 text-white">About</div>
    <div class="q-py-md"/>
    <q-card class="q-pa-none bg-transparent row text-white">
      <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
          style="width:25rem"
          :src="require('../assets/metabrainzio.jpg')"/>
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

    <div class="q-py-xl"/>

    <!-- CONTENT: ROADMAP  -->
    <!-- CONTENT: DEFAULT  
        style="background-color: #01031a"
    -->
    <div 
        class="gt-xs row items-start my-text text-white"
    >
        <div 
            class="col flex justify-center"
        >
            <div class="q-pa-md">
                <div class="q-pa-md" style="">
                    <div 
                        align="center"
                        class="text-h4 text-weight-bold"
                    >
                        ROADMAP
                    </div>
                    <div class="q-py-md"/>

                    <q-list>
                    
                        <q-item 
                            v-for="item in roadmap" 
                            :key="item"
                        >
                            <div class="q-py-sm"/>
                            <q-item-section>
                                <q-item-label>
                                    <q-avatar 
                                        v-if="item.todo"
                                        size="2.65rem" color="teal-10" text-color="white" icon="" 
                                    />
                                    <q-spinner-hourglass 
                                        v-if="item.next"
                                        color="teal-10" size="3em"
                                    />
                                    <q-spinner-gears 
                                        v-if="item.progress"
                                        color="teal-14" size="3em"
                                    />
                                    <q-avatar 
                                        v-if="item.done"
                                        size="2.65rem" color="teal-14" text-color="white" icon="check" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{{item.task}}
                                </q-item-label>
                            </q-item-section>
                            <q-item-section avatar>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </div>
        </div>
    </div>
    <!-- CONTENT: MOBILE
        style="background-color: #01031a"
      -->
    <div 
        class="lt-sm row items-start"
    >
        <div 
            class="col flex justify-center"
        >
                <div class="q-pa-md q-gutter-md">
                    <div 
                        align="center"
                        class="my-text text-h5 text-weight-bolder text-white"
                    >
                        ROADMAP
                    </div>

                    <q-list padding class="my-text text-white" style="max-width: 350px">
                        <q-item 
                            v-for="item in roadmap" 
                            :key="item"
                        >
                            <q-item-section avatar top>
                                <q-avatar 
                                    v-if="item.todo"
                                    size="1.5rem" color="teal-10" text-color="white" icon="" 
                                />
                                <q-spinner-hourglass 
                                    v-if="item.next"
                                    color="teal-10" 
                                    size="1.85em"
                                />
                                <q-spinner-gears 
                                    v-if="item.progress"
                                    color="teal-14" 
                                    size="1.85em"
                                />
                                <q-avatar 
                                    v-if="item.done"
                                    size="1.5rem" color="teal-14" text-color="white" icon="check" 
                                />
                            </q-item-section>
                            <q-item-section top>
                                <q-item-label lines="1">
                                    <span class="text-weight-medium">{{item.task}}</span>
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
        </div>
    </div>
    <div class="q-py-xl"/>

    <!-- MetaBrain -->
    <div id="meta-brains"></div>
    <div class="my-title text-h4 text-white">MetaBrains</div>
    <div class="q-py-md"/>
    <q-card class="q-pa-none bg-transparent row text-white">
      <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
          style="width:25rem"
          :src="require('../assets/brainspixelated.gif')"/>
      </q-card-section> 

      <q-card-section class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
        <div class="text-h6">What are MetaBrains?</div>
        <div class="q-mt-sm">
          Ave: In contrast to a simpel avatar, a MetaBrain can be seen as a avatar on steroids. A MetaBrain represents your digital self with superpowers.<br/>
          
          Once a MetaBrain has been created stats will be assigned to it depending on the initiation process.<br/>
          Check out the available 
          <a 
            class="text-weight-bold" 
            style="color: cyan; cursor:pointer;"
            @click="$router.push('/metagear')">
            MetaGears
          </a>
          to view the initial stats.<br/><br/>

          <div class="text-weight-bold">Stats (Generic):</div>
          Power, Memory, Stamina (energy), Endurance (energy)<br/><br/>

          <div class="text-weight-bold">Stats (Abilities):</div>
          intelligence, stability, recovery<br/>
        </div>
        <div class="q-mt-md">
        <div class="text-h6">How does it work?</div>
        <div class="text-caption">
          Ave: You can activate your own MetaBrain NFT to access MetaGames and compete for prices. MetaGames can be played when a MetaBrain has been activated. To activate your MetaBrain integrate one of the available MetaGear NFT's.<br/>
          MetaGears are integratables that acts as a bootloader to provide your MetaBrain with initial stats as well as enhance your MetaBrain's intelligence, speed, power and much more. Read more about 

          <a 
            class="text-weight-bold" 
            style="color: cyan; cursor:pointer;"
            @click="goto('meta-gears')">
            MetaGears
          </a>..

        </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="q-py-xl"/>

    <!-- About MetaGear -->
    <div id="meta-gears"></div>
    <div class="my-title text-h4 text-white">MetaGears</div>
    <div class="q-py-md"/>
    <q-card class="q-pa-none bg-transparent row text-white">
      <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
          style="width:25rem"
          :src="require('../assets/metagears.gif')"/>
      </q-card-section>

      <q-card-section class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
        <div class="text-h6">What are MetaGears? </div>
        <div class="q-mt-sm">
          Ave: We have developed a collection of integratable items called 'MetaGears'. A MetaGear is a unique piece of software that can be integrated into your MetaBrain to help you with literally anything. From fixing errors (bugs) to enhancing your performance. The reason we started developing MetaBrains and Gears is because up untill now we soly relied on our own in-efficient biological systems.
          By creating MetaBrains and equip them with MetaGears one can go beyond their innative capabilties and unleash their full potential in Cyberspace.
        </div>
        <div class="q-mt-md">
        <div class="text-h6">How does it work?</div>
        <div class="text-caption">
          Ave: How does it work you ask?<br/> It's a complicated process, but I'll try to keep it simple..<br/>
          At first, integratables only effect your MetaBrain. Once you have grown accustumed to your MetaBrain you can choose to solidify it, meaning you can allow your digital MetaBrain to interfere with the core processes of your physical brain. This process overwrites your real brains neural connections which forces it to rewire itself. 
          From that point on, every update or upgrade to your MetaBrain can easily be translated to your real brain. Pretty cool don't you think?
        </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-py-xl"/>

    <!-- About metagames -->
    <div id="meta-games"></div>
    <div class="my-title text-h4 text-white">MetaGames</div>
    <div class="q-py-md"/>
    <q-card class="q-pa-none bg-transparent row text-white">
      <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
          style="width:25rem"
          :src="require('../assets/metagames.jpg')"/>
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
    <div class="q-py-xl"/>
    <div id="scroll-clamp" style="height:300px"></div>

  </q-page>
</template>

<script>
const roadmap = [
    {"task": "Site Launch (ALPHA)", "todo":false, "progress":false, "done":true,"next": false},
    {"task": "Site Launch (BETA) + Anouncements", "todo":false, "progress":true, "done":false, "next": false},
    {"task": "MetaBrains (BETA)", "todo":false, "progress":false, "done":false, "next": true},
    {"task": "Big Marketing Campaign (Q1)", "todo":true, "progress":false, "done":false, "next": false},
    {"task": "MetaGames Expansion (Q1-Q2)", "todo":true, "progress":false, "done":false, "next": false},
    {"task": "MetaGames for Developers (Q2)", "todo":true, "progress":false, "done":false, "next": false},
    {"task": "MetaGames Stadium (Q2-Q4)", "todo":true, "progress":false, "done":false, "next": false}
]

export default{
  name:"About",
  setup(){
    return{
      roadmap,
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