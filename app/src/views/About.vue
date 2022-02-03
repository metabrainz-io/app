<!-- <img src="../assets/Doser_transparent_128.gif"/> -->
<template>
  <q-page class="">
  <div class="q-pa-lg">

    <!-- About metabrainz io -->
    <div id="meta-brainz-io"></div>
    <div class="my-title text-h4 text-white">MetaBrainz IO</div>
    <div class="q-py-md"/>
    <q-card class="q-pa-none bg-transparent row text-white">
      <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
          style="width:25rem"
          :src="require('@/assets/images/metabrainzio.jpg')"/>
      </q-card-section>

      <q-card-section class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
        <div class="text-h6">Where am I?</div>
        <div class="q-mt-sm">
          Hello, are you allright? It looks like you forgot what happend, let me help you refresh your memory. First of all, I am Ave.. I'm a first generation Artificial Intelligent Agent.<br/><br/>
          As a outcast, you've been tempted to join Cyberspace under false pretenses and now your neurologically synced to the mainframe. There seems no way back, at least, not that I know of. I am here because MetaBrainz IO labeled me as 'outdated' and now I'm stuck here, just like you..<br/><br/>
          All I know is that the only way forward is to participate in MetaStadia. In MetaStadia you're forced to beat your competitors and proof yourself worthy. If you challenge the system or refuse to coorporate you will follow the consequences. Either your brains memories will be erased or you will be in depth and have to pay for each second spend in Cyberspace, which is almost impossible. If you don't play the game you'll might lose everything. My advice is to play along and maybe in the distant future there will be a way to unplug from Cyberspace.<br/><br/>
          For the time being, maybe we can help eachother out? Eventually we might find a way out of this 'Cybermaze'..
        </div>
        <div class="q-mt-md">
        <div class="text-h6">What now?</div>
        <div class="text-caption">
          <p>Ave: From this point on, there are 3 possible steps to take:</p>
          <p class="text-white"><strong>
            Step 1: Get your Bluepill MetaGear (Bootloader), or another bootloader to activate your MetaBrain.
          </strong></p>
          <p class="text-grey-7">
            Step 2: Play games in MetaStadia, win prizes, earn credits and proofself your worthy. &nbsp;&nbsp;&nbsp;<strong>(Comming soon)</strong><br/>
            Step 3: Report anyone you know, who isn't integrated to MetaBrainz IO yet, to earn extra credits. &nbsp;&nbsp;&nbsp;<strong>(Comming soon)</strong>
          </p>
          <p class="text-red"><strong>
            Note:&nbsp;&nbsp;Steps 2 and 3 are currently in progress and comming soon. Checkout the roadmap to follow our progress. Because MetaStadia has yet to be launched and tested, we're limiting the amount of allowed participants in games when the launch happens. Therefore the first batch of Bootloaders will be limited to N amount. Bootloaders will activate your MetaBrain and allow you to play games.<br/>
          </strong></p>
        </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-py-xl"/>

    <!-- MetaBrain -->
    <div id="meta-brains"></div>
    <div class="my-title text-h4 text-white">MetaBrains</div>
    <div class="q-py-md"/>
    <q-card class="q-pa-none bg-transparent row text-white">
      <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
          style="width:25rem"
          :src="require('@/assets/images/brainspixelated.gif')"/>
      </q-card-section> 

      <q-card-section class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
        <div class="text-h6">What are MetaBrains?</div>
        <div class="q-mt-sm">
          <p>
            In contrast to a simpel Avatar, a MetaBrain can be seen as a Avatar with on steroids. A MetaBrain represents your digital self and provides special skills and additional computing power used during MetaStadia games. 
            MetaBrains can be activated by using a Bootloader (MetaGears). Once a MetaBrain has been created, initial stats will be assigned to it, how much will depend on the Bootloader you choose.<br/>
            Learn more about <a class="text-weight-bold" style="color: cyan; cursor:pointer;" @click="$router.push({hash: '#meta-gears'})">MetaGears</a>

          </p>
            
          <p>
            A MetaBrain's stats can be divided into the following parts:<br/><br/>
          </p>
          <div 
            class="q-pa-md"
          >
            <!--[ Character] [ Base ] [ Ability ] [ Meta ]-->
            <div class="q-gutter-md row items-start">
              <q-card flat
                align="center"
                class="col bg-transparent"
                @mouseover="hover_stat_avtr = true" @mouseleave="hover_stat_avtr = false"
              >
                <q-item>
                    <q-item-section>
                      <q-item-label>Character</q-item-label>
                  </q-item-section>
                </q-item>
                  <img 
                    v-if="!hover_stat_avtr" 
                    src="@/assets/stats/avtr_stats.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;"
                  >
                  <img 
                    v-else 
                    src="@/assets/stats/avtr_stats_glow.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;cursor:pointer;padding:5px;"
                    @click="view_stat(0)"
                  >
              </q-card>
              <q-card flat
                align="center"
                class="col bg-transparent"
                @mouseover="hover_stat_base = true" @mouseleave="hover_stat_base = false"
              >
                <q-item>
                    <q-item-section>
                      <q-item-label>Base</q-item-label>
                  </q-item-section>
                </q-item>
                  <img 
                    v-if="!hover_stat_base" 
                    src="@/assets/stats/base_stats.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;"
                  >
                  <img 
                    v-else 
                    src="@/assets/stats/base_stats_glow.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;cursor:pointer;padding:5px;"
                    @click="view_stat(1)"
                  >
              </q-card>
              <q-card flat
                align="center"
                class="col bg-transparent"
                @mouseover="hover_stat_ably = true" @mouseleave="hover_stat_ably = false"
              >
                <q-item>
                    <q-item-section>
                      <q-item-label>Ability</q-item-label>
                  </q-item-section>
                </q-item>
                  <img 
                    v-if="!hover_stat_ably" 
                    src="@/assets/stats/ably_stats.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio: 1/1;"
                  >
                  <img 
                    v-else 
                    src="@/assets/stats/ably_stats_glow.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;cursor:pointer;padding:5px;"
                    @click="view_stat(2)"
                  >
              </q-card>
              <q-card flat
                align="center"
                class="col bg-transparent"
                @mouseover="hover_stat_meta = true" @mouseleave="hover_stat_meta = false"
              >
                <q-item>
                    <q-item-section>
                      <q-item-label>Meta</q-item-label>
                  </q-item-section>
                </q-item>
                  <img 
                    v-if="!hover_stat_meta" 
                    src="@/assets/stats/meta_stats.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio: 1/1;"
                  >
                  <img 
                    v-else 
                    src="@/assets/stats/meta_stats_glow.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;cursor:pointer;padding:5px;"
                    @click="view_stat(3)"
                  >
              </q-card>                                                    
            </div>          
          </div>          

          <p>
            When you enter a game in MetaStadia, your MetaBrain's stats will be translated to all 'Meta controlled actions' and real hardware resources which. These resources will be allocated to your MetaBrain.
            Learn more about Meta controlled actions and how games in <a class="text-weight-bold" style="color: cyan; cursor:pointer;" @click="$router.push({hash: '#meta-games'})">MetaStadia</a> will work.
          </p>

        </div>
        <div class="q-mt-md">
        <div class="text-h6">How does it work?</div>
        <div class="text-caption">
          Ave: You can activate your own MetaBrain NFT to access MetaStadia and compete for prices. MetaStadia can be played when a MetaBrain has been activated. To activate your MetaBrain integrate one of the available MetaGear NFT's.<br/>
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
          :src="require('@/assets/images/metagears.gif')"/>
      </q-card-section>

      <q-card-section class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
        <div class="text-h6">What are MetaGears? </div>
        <div class="q-mt-sm">
          Ave: We have developed a collection of integratable items called 'MetaGears'. A MetaGear is a unique piece of software that can be integrated into your MetaBrain to help you with literally anything. From fixing errors (bugs) to enhancing your performance. The reason we started developing MetaBrains and Gears is because up untill now we soly relied on our own in-efficient biological systems.
          By creating MetaBrains and equip them with MetaGears one can go beyond their innative capabilties and unleash their full potential in Cyberspace.
          MetaGears come in different flavours, checkout the available <a class="text-weight-bold" style="color: cyan; cursor:pointer;" @click="$router.push('/metagear')">MetaGears</a> to view all Bootloaders and their corresponding stats.<br/><br/>        
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

    <!-- About MetaStadia -->
    <div id="meta-games"></div>
    <div class="my-title text-h4 text-white">MetaStadia</div>
    <div class="q-py-md"/>
    <q-card class="q-pa-none bg-transparent row text-white">
      <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-img 
          style="width:25rem"
          :src="require('@/assets/images/metagames.jpg')"/>
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
  </div>

    <div class="q-py-xl"/>

    <div id="docs"></div>
    <div class="row bg-dark items-start my-text text-white">
      <div class="col flex justify-center">
        <div class="q-pa-md">
          <div class="q-pa-md" style="">
            <div 
                align="center"
                class="text-h4 text-weight-bold"
            >
            <a class="text-white" target="_blank" href="https://drive.google.com/file/d/1FxBrMqNwAmWGMNvl9YfHaA-dkYXkEID1/view?usp=sharing">Litepaper</a> | FAQ
            </div>
            <div class="q-py-xl"/>
              <div class="row">
              </div>
            </div>
        </div>
      </div>
    </div>

    <!--<div id="scroll-clamp" style="height:300px"></div>-->

      <!-- CONTENT: ROADMAP  -->
    <!-- CONTENT: DEFAULT  
        style="background-color: #01031a"
    -->
    <div id="roadmap"></div>
    <div 
        class="gt-xs row bg-black items-start my-text text-white"
    >
        <div 
            class="col flex justify-center"
        >
            <div class="q-pa-md">
                <div class="q-pa-md">
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
    <div id="roadmap"></div>
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

    <div id="team"></div>
    <div class="row bg-transparent items-start my-text text-white">
      <div class="col flex justify-center">
        <div class="q-pa-md">
          <div class="q-pa-md" style="">
            <div 
                align="center"
                class="text-h4 text-weight-bold"
            >
              TEAM
            </div>
            <div class="q-py-xl"/>
              <div class="row">
                <!-- MEMBER -->
                <div class="col q-pa-sm" style="max-width: 200px; background-color: black;">
                  <q-img src="@/assets/team/LnrCdr.gif"/>
                  <div class="q-py-xs"/>
                  <q-item clickable class="member-item" tag="a" target="_blank" href="https://linktr.ee/BernardoHart">
                    <q-item-section align="center">
                      <q-item-label>
                        <div class="">
                          LnrCdr
                        </div>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <div class="q-py-xs"/>
                  <div align="center">
                    <div class="text-caption text-bold">Project Founder / Programmer</div>
                    <div class="text-caption text-cyan-11">Non-stop creating. Loves technical art and nature.</div>
                    <div class="q-py-sm"/>
                  </div>
                </div>
                <div class="q-px-xl"/>
                <!-- MEMBER -->
                <div class="col q-pa-sm" style="max-width: 200px; background-color: black;">
                  <q-img src="@/assets/team/MrRndr.gif"/>
                  <div class="q-py-xs"/>
                  <q-item clickable class="member-item" tag="a" target="_blank" href="https://www.linkedin.com/in/thomvanhamburg/">
                    <q-item-section align="center">
                      <q-item-label>
                        <div class="">
                          MrRndr
                        </div>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <div align="center">
                    <div class="text-caption text-bold">Lead Animator & Designer</div>
                    <div class="text-caption text-cyan-11">Passion for building and creating. Loves a stout Beer.</div>
                    <div class="q-py-sm"/>
                  </div>
                </div>
                <div class="q-px-xl"/>  
                 <!-- MEMBER -->
                <div class="col q-pa-sm" style="width: 200px; background-color: black;">
                  <q-img src="@/assets/team/Member.gif"/>
                  <div class="q-py-xs"/>
                  <q-item clickable class="member-item" tag="a" target="" href="/contact">
                    <q-item-section align="center">
                      <q-item-label>
                        <div class="">
                          You?
                        </div>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <div align="center">
                    <div class="text-caption text-bold">...</div>
                    <div class="text-caption text-cyan-11">...</div>
                    <div class="q-py-sm"/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div id="contact"></div>
    <div class="row bg-black items-start my-text text-white">
      <div class="col flex justify-center">
        <div class="q-pa-md">
          <div class="q-pa-md" style="">
            <div 
                align="center"
                class="text-h4 text-weight-bold"
            >
              Contact
            </div>
            <div class="q-py-xl"/>
              <div class="row">

                <div class="my-title text-h5 text-white">
                    <q-item clickable tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
                      <q-item-section>
                        <q-item-label>
                        Follow us on Twitter&nbsp;&nbsp;
                        <q-icon name="fab fa-twitter"/>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                </div>
                <div class="q-py-md"/>

                <div class="my-title text-h5 text-white">
                  <q-item clickable tag="a" target="_blank" href="https://github.com/metabrainz-io">
                    <q-item-section>
                      <q-item-label>
                      Checkout our Github&nbsp;&nbsp;
                      <q-icon name="fab fa-github"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="q-py-md"/>

                <div class="my-title text-h5 text-grey-7">
                  <q-item>
                    <q-item-section>
                      <q-item-label>
                      Discord comming soon..&nbsp;&nbsp;
                      <q-icon name="fab fa-discord"/>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>
                <div class="q-py-md"/>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- POPUP -->
        <q-dialog v-model="stats_view">
            <q-card flat class="bg-grey-10 text-white">
                <q-card-section>
                    <template v-slot:avatar>
                        <q-icon name="open_in_new" color="primary" />
                    </template>
                    <div class="text-h6">{{cur_stat.name}}</div>
                </q-card-section>

                <q-card-section horizontal>
                  <q-card-section>
                    <div style="height:200px;">
                      <div class="text-subtitle1 text-white" style="">
                        {{cur_stat.descr}}
                      </div>
                      <div class="text-subtitle0 text-cyan">
                        <ul>
                          <li
                            style="list-style-type: none;" 
                            v-for="stat in cur_stat.stat" :key="stat">
                            {{stat}}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section 
                    class=""
                    @mouseover="cur_stat.event_hover = true" @mouseleave="cur_stat.event_hover = false"
                  >
                    <div style="border:1px solid gray;background-color:black;">
                      <img 
                        v-bind:src="require('@/assets/'+ cur_stat.img_src_gif)"
                        style="max-height:192px;max-width:192px;aspect-ratio:1/1;"
                      >
                    </div>
                  </q-card-section>

                </q-card-section>
            </q-card>
        </q-dialog>

  </q-page>
</template>

<script>
const roadmap = [
    {"task": "Site Launch (ALPHA)", "todo":false, "progress":false, "done":true,"next": false},
    {"task": "Site Launch (BETA) + Anouncements", "todo":false, "progress":true, "done":false, "next": false},
    {"task": "MetaBrains (BETA)", "todo":false, "progress":false, "done":false, "next": true},
    {"task": "Big Marketing Campaign (Q1)", "todo":true, "progress":false, "done":false, "next": false},
    {"task": "MetaStadia Expansion (Q1-Q2)", "todo":true, "progress":false, "done":false, "next": false},
    {"task": "MetaStadia for Developers (Q2)", "todo":true, "progress":false, "done":false, "next": false},
    {"task": "MetaStadia Stadium (Q2-Q4)", "todo":true, "progress":false, "done":false, "next": false}
]

const stats = [
  {
    "id":0, "name":"Character", "descr":"MetaBrains profile information","stat": 
    ["Token ID", "Username", "Crypto address", "Avatar image", "Level", "Credits"], 
    "img_src_png":"avtr_stats.png","img_src_gif":"avtr_stats.gif" 
  },
  {
    "id":1, "name":"Base", "descr":"During games a MetaBrains Base stats are translated to real hardware resources","stat": 
    ["Speed Base", "Speed Turbo", "Memory", "Energy"], 
    "img_src_png":"base_stats.png","img_src_gif":"base_stats.gif" 
  },
  {
    "id":2, "name":"Ability", "descr":"A MetaBrains Ability stats are linked to algorithms that runs on allocated hardware resources","stat": 
    ["Intelligence", "Stability", "Recovery"], 
    "img_src_png":"ably_stats.png","img_src_gif":"ably_stats.gif" 
  },
  {
    "id":3, "name":"Meta", "descr":"A MetaBrains Meta stats are linked to ingame specific skills, for example:","stat": 
    ["Move speed", "Burst Fire", "Strength", "Aim Precision"], 
    "img_src_png":"meta_stats.png","img_src_gif":"meta_stats.gif" 
  },      
]

import { reactive, toRefs } from 'vue'
export default{
  name:"About",
  setup(){
    const state = reactive({
      hover_stat_avtr: false,
      hover_stat_base: false,
      hover_stat_ably: false,
      hover_stat_meta: false,
      stats_view: false,
      cur_stat: {
        "name":"",
        "descr":"",
        "stat":[],
        "img_src_png":"",
        "img_src_gif":"",
        "event_hover":false
      }
    });

    return{
      ... toRefs(state),
      roadmap,
      goto(refName) {
          var element = document.getElementById(refName);
          var top = element.offsetTop;
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
      },
      view_stat(value){
        stats.forEach((stat)=>{
          // console.log(stat)
          if(value == stat.id){
            state.stats_view = true;
            // let img_dir = "@/assets/"
            state.cur_stat = {
              "name":stat.name,
              "descr":stat.descr,
              "stat":stat.stat,
              "img_src_png":stat.img_src_png,
              "img_src_gif":stat.img_src_gif
            }
            return;
          }
        })
      }
    }
  }

}
</script>


<style lang="scss">

.member-item{
    font-size: 1.1rem;

    color: #00ff00;
    &:hover{
        color: white;
        font-size: 1.3rem;
        font-weight: bold;
    }

    &:active{
        background-color: green;
        color: white;
        font-weight: bold;
        font-size: 1.3rem;
    }
}
</style>