<template>
  <q-page id="about">
  <div class="q-pa-lg">

    <!-- About metabrainz io -->
    <div id="intro"></div>
   
    <div class="q-py-md"/>
    <q-card flat class="q-pa-none bg-transparent row text-white">
    
      <q-card-section 
        class="gt-sm flex justify-end col-lg-4 col-md-4 col-sm-12 col-xs-12"
        style="top:125px;right:-25px;"
      >
        <q-img 
          :src="require('@/assets/style/wires_left_animated.gif')"
          height="20em" width="20em" style="width: 200px;"  
        />
      </q-card-section>

      <q-card-section class="q-px-lg col-lg-4 col-md-4 col-sm-12 col-xs-12 text-justify">
        <q-carousel
          navigation
          navigation-icon="check_box_outline_blank"
          navigation-color="cyan"
          :autoplay="pause"
          v-model="slide"
          infinite
          swipeable
          class="bg-transparent"
          style="height:600px;min-width:275px;border-left: 2px solid #00f2a1;border-right: 2px solid #00f2a1;"
        >
          <q-carousel-slide :name="1" img-src="@/assets/bg/intro.png">
            <div class="my-text q-py-lg text-h6 text-weight-bold">Where am I..?</div>
            <div class="q-mt-sm my-text text-caption text-weight-bold">
              Hi there, are you allright!? It looks like you forgot what happend, let me help you refresh your memory.<br/>
              First of all, I am Ave.. I'm a first generation Artificial Intelligent Agent.<br/><br/>
              Welcome to the Grid.. <br/>Your first stop at the MetaBrainz IO Cyberspace (aka Metaverse)
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" img-src="@/assets/bg/intro.png">
            <div class="my-text q-py-lg text-h6 text-weight-bold">Where am I..?</div>
            <div class="q-mt-sm my-text text-caption text-weight-bold">
              Currently your physical brain is synced to the mainframe. There seems no way back, at least, not that I know of.<br/><br/>
              It looks like you've been tempted to join Cyberspace, most likely under false pretenses. You've took the Bluepill did'nt you?
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="3" img-src="@/assets/bg/intro.png">
            <div class="my-text q-py-lg text-h6 text-weight-bold">What now?</div>
            <div class="q-mt-sm my-text text-caption text-weight-bold">
              I am here because MetaBrainz IO labeled me as 'outdated' and now I'm stuck here, just like you..<br/><br/>
              All I know is that the only way forward is to enter MetaStadia to participate in games. In MetaStadia you're forced to beat your competitors and proof yourself worthy. 
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="4" img-src="@/assets/bg/intro.png">
            <div class="my-text q-py-lg text-h6 text-weight-bold">What if I refuse?</div>
            <div class="q-mt-sm my-text text-caption text-weight-bold">
              If you challenge the system or refuse to coorporate you will have to bear the consequences.<br/><br/>
              It's possible you must pay back a high price for each second spend in Cyberspace or Worse, they could erase segments of your memory.<br/>
              My advice is to play along and maybe in the future there will be a way to unplug.<br/><br/>
              For the time being, maybe we can help eachother out? Let's hope we find a way out of this 'Cybermaze'..
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="5" img-src="@/assets/bg/intro.png">
            <div class="my-text q-py-lg text-h6 text-weight-bold">How do I play?</div>
            <div class="my-text q-mt-sm text-caption text-weight-bold">
              <p>From this point on, there are 3 possible steps to take:</p>
              <ul style="max-width:375px;position:absolute;left:-10px;padding-right:15px;">
                <p class="text-yellow">
                  1. Get your Bluepill Bootloader (MetaGear) to activate your MetaBrain. Or use another Bootloader
                </p>
                <p class="text-white">
                  2. Play games in MetaStadia, win prizes, earn credits and proofself your worthy. [Comming soon]
                </p>
                <p class="text-white">
                  3. MetaBrain IO might urge you to report anyone who isn't integrated to MetaBrainz IO yet, you'll earn extra credits for that. [Comming soon]
                </p>
              </ul>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="6" img-src="@/assets/bg/intro.png">
            <div class="my-text q-py-lg text-h6 text-weight-bold">How do I play?</div>
            <div class="my-text q-mt-sm text-caption text-weight-bold">
              <p>From this point on, there are 3 possible steps to take:</p>
              <ul style="max-width:375px;position:absolute;left:-10px;padding-right:15px;">
                <p class="text-white">
                  1. Get your Bluepill Bootloader (MetaGear) to activate your MetaBrain. Or use another Bootloader
                </p>
                <p class="text-yellow">
                  2. Play games in MetaStadia, win prizes, earn credits and proofself your worthy. [Comming soon]
                </p>
                <p class="text-white">
                  3. MetaBrain IO might urge you to report anyone who isn't integrated to MetaBrainz IO yet, you'll earn extra credits for that. [Comming soon]
                </p>
              </ul>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="7" img-src="@/assets/bg/intro.png">
            <div class="my-text q-py-lg text-h6 text-weight-bold">How do I play?</div>
            <div class="my-text q-mt-sm text-caption text-weight-bold">
              <p>From this point on, there are 3 possible steps to take:</p>
              <ul style="max-width:375px;position:absolute;left:-10px;padding-right:15px;">
                <p class="text-white">
                  1. Get your Bluepill Bootloader (MetaGear) to activate your MetaBrain. Or use another Bootloader
                </p>
                <p class="text-white">
                  2. Play games in MetaStadia, win prizes, earn credits and proofself your worthy. [Comming soon]
                </p>
                <p class="text-yellow">
                  3. MetaBrain IO might urge you to report anyone who isn't integrated to MetaBrainz IO yet, you'll earn extra credits for that. [Comming soon]
                </p>
              </ul>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="8" img-src="@/assets/bg/intro.png">
            <div class="my-text q-py-lg text-h6 text-weight-bold">Note:</div>
            <div class="q-mt-sm my-text text-subtitle0 text-weight-bold">
              <p class="text-yellow"><strong>
                Steps 2 and 3 are currently in progress and comming soon. Checkout the roadmap to follow our progress. Because MetaStadia has yet to be launched and tested, we're limiting the amount of allowed participants in games when the launch happens. Therefore the first batch of Bootloaders will be limited to N amount. Bootloaders will activate your MetaBrain and allow you to play games.<br/>
              </strong></p>
            </div>
          </q-carousel-slide>
        </q-carousel>

          <div class="fit row flex justify-start">
              <div class="q-px-sm col flex justify-center" style="position:absolute;top:22px;right:10px;height:75px;width:100px;">
                  <img src="@/assets/ave.gif"/>
              </div>
          </div>

          <q-btn v-if="pause"
            push flat dense icon="pause"
              class="absolute"
              size="2em"
              style="bottom: 60px;right:90px;color:#00f2a1;"
              @click="pause = !pause"
          />
          <q-btn v-else
            push flat dense icon="play_arrow"
              class="absolute"
              size="2em"
              style="bottom: 60px;right:90px;color:#00f2a1;"
              @click="pause = !pause"
          />
          <q-btn
            push flat dense icon="skip_next"
              class="absolute"
              size="2em"
              style="bottom: 60px;right:30px;color:#00f2a1;"
              @click="carousel_next()"
          />
        </q-card-section>

      <q-card-section 
        class="gt-sm flex justify-start col-lg-4 col-md-4 col-sm-12 col-xs-12"
        style="top:125px;right:25px;"
      >
        <q-img 
          :src="require('@/assets/style/wires_right_animated.gif')"
          height="20em" width="20em" style="width: 200px;"  
        />
      </q-card-section>
    </q-card>
    </div>


    <div class="q-py-xl"/>

    <!-- MetaBrain -->
    <div id="meta-brainz-io" 
      class="my-text text-white bg-transparent"
    >
      <div class="gt-sm q-py-xl"/>
      <div align="center" class="gt-sm my-title q-px-lg text-h3 text-weight-bold">METABRAINZ IO</div>
      <div class="lt-md q-py-lg"/>
      <div align="center" class="lt-md my-title q-px-lg text-h4 text-weight-bold">METABRAINZ IO</div>

      <div class="q-py-md"/>
      <q-card flat
        class="q-pa-none row justify-center bg-transparent"
      > 
        <q-card-section 
          class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify"
          style=""  
        >
          
          <div align="center" class="gt-sm q-mt-sm justify-center">
            <p class="q-py-md text-h5 justify-center text-secondary">
             Welcome to MetaBrainz IO
            </p>
            <q-separator color="secondary"/>
            <p class="q-py-md text-h5 justify-center text-secondary">
              We at MetaBrainz IO are utilizing the Blockchain to develop Digital Brains and Gears, unlocking the true power of META
            </p>
            <q-separator color="secondary"/>
            <p class="q-py-md text-h5 justify-center text-secondary">
              We present <strong> METABRAINS!!</strong><br/> A MetaBrain gives you access to real Hardware resources and Algorithms you can manipulate and control to outperform your
              competitors in games, win prices, earn credits and much more..
            </p>
          </div>
          <div align="center" class="lt-md q-mt-sm justify-center">
            <p class="q-py-md text-subtitle1 text-weight-bolder justify-center text-secondary">
             Welcome to MetaBrainz IO
            </p>
            <q-separator color="secondary"/>
            <p class="q-py-md text-subtitle1 text-weight-bolder justify-center text-secondary">
              We at MetaBrainz IO are utilizing the Blockchain to develop Digital Brains and Gears, unlocking the true power of META
            </p>
            <q-separator color="secondary"/>
            <p class="q-py-md text-subtitle1 text-weight-bolder justify-center text-secondary">
              We present <strong> METABRAINS!!</strong><br/> A MetaBrain gives you access to real Hardware resources and Algorithms you can manipulate and control to outperform your
              competitors in games, win prices, earn credits and much more..
            </p>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-py-xl"/>

    <!-- MetaBrain -->
    <div id="meta-brains" 
      class="my-text text-white"
      style="background-color:#01000b;"
    >
      <div class="gt-sm q-py-xl"/>
      <div align="center" class="gt-sm my-title q-px-lg text-h3 text-weight-bold">METABRAINS</div>
      <div class="lt-md q-py-lg"/>
      <div align="center" class="lt-md my-title q-px-lg text-h4 text-weight-bold">METABRAINS</div>
      <q-card 
        class="q-pa-none row justify-center"
        style="background-color:#01000b;"
      > 
      <q-card-section 
        class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify"
        style=""  
      >
        <div class="q-py-sm"/>
        <div align="start" class="q-mt-sm justify-center">
          <div class="q-py-md text-h5">What are MetaBrains?</div>
          <p class="text-caption">
            In contrast to a basic Avatar, a MetaBrain can be perceived as a Avatar on steroids. A MetaBrain is a Persistent Gaming Profile,
            meaning that all player data, stats in particular, will persist regardless of what game is being played.<br/><br/>
            ((IMG SRC)) >>> Brain with stats
          </p>
          <div class="q-py-md text-h5">How does it work?</div>
          <p class="text-caption">
            Every game, within MetaStadia (and outside), will have a MetaLayer which enables the attachment of a players MetaBrain to ingame Characters or Objects, for example Bots, Drones and/or Turrets.<br/><br/>

            ((IMG SRC))<br/><br/>

            The attachment (integration) of a MetaBrain takes place when a user enters a game. During this integration process the MetaLayer will read and load in specific stats. These stats are linked to what we call 'Meta Controlled Actions'. Besides basic stats like 'speed', 'boost' and 'strength', MetaBrains provides additional stats which will be directly translated to hardware resources and a whole range of algorithms made available for each individual player.<br/><br/>

            ((IMG SRC))<br/><br/>

            Hardware resources and algorithms are additional offchain resources that will be allocated and accessed during games. The more fine-tuned your MetaBrain, 
            the better and more efficient it will utilize those resources to perform better during games.
          </p>
          <p class="text-caption">
            Every Metabrain has four main stat catagories: <strong>Character, Base, Ability, Meta</strong><br/><br/>
          </p>
          <div 
            class="q-pa-md row"
          >
            <!--[ Character] [ Base ] [ Ability ] [ Meta ]-->
            <div class="q-gutter-md row justify-center text-weight-bold">
              <q-card flat
                align="center"
                class="bg-transparent"
                @mouseover="hover_stat_avtr = true" @mouseleave="hover_stat_avtr = false"
              >
                <q-item>
                    <q-item-section>
                      <q-item-label 
                        v-if="hover_stat_avtr"
                        style="color:#00f2a1"
                      >
                        Character
                      </q-item-label>
                      <q-item-label v-else>
                        Character
                      </q-item-label>
                  </q-item-section>
                </q-item>
                  <img 
                    v-if="!hover_stat_avtr" 
                    src="@/assets/stats/avtr_stats.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;padding:5px;"
                  >
                  <img 
                    v-else 
                    src="@/assets/stats/avtr_stats_glow.png" 
                    style="height:192px;width:192px;aspect-ratio:1/1;cursor:pointer;"
                    @click="view_stat(0)"
                  >
              </q-card>
              <q-card flat
                align="center"
                class="bg-transparent"
                @mouseover="hover_stat_base = true" @mouseleave="hover_stat_base = false"
              >
                <q-item>
                    <q-item-section>
                      <q-item-label 
                        v-if="hover_stat_base"
                        style="color:#00f2a1"
                      >
                        Base
                      </q-item-label>
                      <q-item-label v-else>
                        Base
                      </q-item-label>
                  </q-item-section>
                </q-item>
                  <img 
                    v-if="!hover_stat_base" 
                    src="@/assets/stats/base_stats.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;padding:5px;"
                  >
                  <img 
                    v-else 
                    src="@/assets/stats/base_stats_glow.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;cursor:pointer;"
                    @click="view_stat(1)"
                  >
              </q-card>
              <q-card flat
                align="center"
                class="bg-transparent"
                @mouseover="hover_stat_ably = true" @mouseleave="hover_stat_ably = false"
              >
                <q-item>
                    <q-item-section>
                      <q-item-label 
                        v-if="hover_stat_ably"
                        style="color:#00f2a1"
                      >
                        Ability
                      </q-item-label>
                      <q-item-label v-else>
                        Ability
                      </q-item-label>
                  </q-item-section>
                </q-item>
                  <img 
                    v-if="!hover_stat_ably" 
                    src="@/assets/stats/ably_stats.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio: 1/1;padding:5px;"
                  >
                  <img 
                    v-else 
                    src="@/assets/stats/ably_stats_glow.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;cursor:pointer;"
                    @click="view_stat(2)"
                  >
              </q-card>
              <q-card flat
                align="center"
                class="bg-transparent"
                @mouseover="hover_stat_meta = true" @mouseleave="hover_stat_meta = false"
              >
                <q-item>
                    <q-item-section>
                     <q-item-label 
                        v-if="hover_stat_meta"
                        style="color:#00f2a1"
                      >
                        Meta
                      </q-item-label>
                      <q-item-label v-else>
                        Meta
                      </q-item-label>
                  </q-item-section>
                </q-item>
                  <img 
                    v-if="!hover_stat_meta" 
                    src="@/assets/stats/meta_stats.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio: 1/1;padding:5px;"
                  >
                  <img 
                    v-else 
                    src="@/assets/stats/meta_stats_glow.png" 
                    style="max-height:192px;max-width:192px;aspect-ratio:1/1;cursor:pointer;"
                    @click="view_stat(3)"
                  >
              </q-card>                                                    
            </div>          
          </div>          
          <p class="text-caption">
            All the stats mentioned above, besides Character stats, can be manipulated with the help of MetaGears. MetaGears are integratables that acts as a bootloader to provide your MetaBrain with initial stats as well as enhance your MetaBrain's power, speed, intelligence and much more. Learn more about 
          <a 
            class="text-weight-bold" 
            style="color: cyan; cursor:pointer;"
            @click="goto('meta-gears')">
            MetaGears
          </a>..

          </p>
          <div class="q-py-md text-h5">How do I activate my MetaBrain?</div>
          <p class="text-caption">
            MetaBrains can be activated by using a Bootloader (MetaGears). Once activated, you own your MetaBrain NFT and can access MetaLayer enabled games to compete for prices.<br/><br/>
            During the activation of your MetaBrain, initial stats will be assigned to it, how much will depend on the MetaGear Bootloader you choose. Checkout all available <a class="text-weight-bold" style="color: cyan; cursor:pointer;" @click="$router.push('/metagear')">MetaGears</a> ..
          </p>
          <!--
            <p class="text-subtitle1">
            When you enter a game in MetaStadia, your MetaBrain's stats will be translated to all 'Meta controlled actions' and real hardware resources which. These resources will be allocated to your MetaBrain.
            Learn more about Meta controlled actions and how games in <a class="text-weight-bold" style="color: cyan; cursor:pointer;" @click="$router.push({hash: '#meta-games'})">MetaStadia</a> will work.
          </p>
          -->
        </div>
        <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <q-img 
            width="200px"
            :src="require('@/assets/images/brainspixelated.gif')"/>
        </q-card-section> 
        <div class="q-py-md"/>
        <p class="text-caption">
          To learn more about what's possible and how your MetaBrain will affect gameplay, go to the section <a class="text-weight-bold" style="color: cyan; cursor:pointer;" @click="$router.push({hash: '#meta-games'})">MetaStadia</a> 
        </p>
        <div class="q-py-xl"/>
      </q-card-section>
    </q-card>
    </div>
    <!-- About MetaGear -->
    <div id="meta-gears" 
      class="my-text bg-transparent text-white"
    >
      <div class="gt-sm q-py-xl"/>
      <div align="center" class="gt-sm my-title q-px-lg text-h3 text-weight-bold">METAGEAR</div>
      <div class="lt-md q-py-lg"/>
      <div align="center" class="lt-md my-title q-px-lg text-h4 text-weight-bold">METAGEAR</div>
      <div class="q-py-sm"/>
      <q-card flat class="q-pa-none row bg-transparent justify-center">
        <q-card-section
          class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify"
          style=""  
        >        
          <div align="start" class="q-mt-sm justify-center">
            <div class="q-py-md text-h5">What are MetaGears?</div>
            <p class="text-caption">
              We’re developing a collection 'MetaGears'. MetaGears are integratable items/assets that enhances the stats of MetaBrains.<br/><br/>
            </p>
            <p class="text-caption text-weight-bold">
              Currently the following types of MetaGears are either being development or already exist and available to be minted:
            </p>
            <div class="row justify-center">
              <div class="" style="min-width:275px;max-width:375px;">
                <ul style="list-style:none;">
                  <li class="text-caption text-white">
                    <strong>B’s</strong>&nbsp;&nbsp;&nbsp;&nbsp;(bootloaders)
                  </li>
                  <li class="text-caption text-white">
                    <strong>C’s</strong>&nbsp;&nbsp;&nbsp;&nbsp;(cognitive enhancers)
                  </li>
                  <li class="text-caption text-white">
                    <strong>E’s</strong>&nbsp;&nbsp;&nbsp;&nbsp;(energy enhancers)
                  </li>
                  <li class="text-caption text-white">
                    <strong>G’s</strong>&nbsp;&nbsp;&nbsp;&nbsp;(general enhancers)
                  </li>
                  <li class="text-caption text-white">
                    <strong>M’s</strong>&nbsp;&nbsp;&nbsp;&nbsp;(mood balancers)
                  </li>
                  <li class="text-caption text-white">
                    <strong>X’s</strong>&nbsp;&nbsp;&nbsp;&nbsp;(experience enhancers)
                  </li>                        
                </ul>
              </div>
              <div class="">
                <q-img 
                  style="width:20rem"
                  width="200px"
                  :src="require('@/assets/metagears/metagears.png')"/>
              </div>
            </div>
            <div class="q-py-sm"/>
            <div class="q-py-md text-h5">Brains and Gears</div>
            <p class="text-caption text-weight-bold">
              The reason MetaBrainz IO started developing Digital Brains and Gears is because up untill now people soly relied on their own unstable and in-efficient biological systems.<br/><br/>
              By creating MetaBrains and equipping them with MetaGears one can go beyond their innate capabilties and unleash their full potential in Cyberspace.
              MetaGears come in different flavours, discover all currently available <a class="text-weight-bold" style="color: cyan; cursor:pointer;" @click="$router.push('/metagear')">MetaGears</a> and their corresponding stats.<br/><br/>        
            </p>
          </div>
          <div class="q-py-lg"/>
        </q-card-section>
      </q-card>
    </div>

    <!-- About MetaStadia -->
    <div id="meta-games" 
      class="my-text text-white"
      style="background-color:#100e2f;"
    >
      <div class="gt-sm q-py-xl"/>
      <div align="center" class="gt-sm my-title q-px-lg text-h3 text-weight-bold">METASTADIA</div>
      <div class="lt-md q-py-lg"/>
      <div align="center" class="lt-md my-title q-px-lg text-h4 text-weight-bold">METASTADIA</div>
      <div class="q-py-sm"/>
      <q-card flat class="q-pa-none row justify-center"
       style="background-color:#100e2f;"> 
        <q-card-section
          class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify"
          style=""  
        >        
          <div align="start" class="q-mt-sm justify-center">
            <div class="q-py-md text-h5">What is MetaStadia?</div>
            <p class="text-caption">
              MetaStadia will be a Decentralized Hub (DHub) that connects game developers, creators, gamers and knowlegde seekers/creators of all kinds. MetaStadia's DBhub also functions as the main portal access all games that will be developed by MetaBrainz IO, its collaborators, contributors and (indie) developers.
            </p>
            
            <div class="q-py-md text-h5">Cyberspaces</div>
            <p class="text-caption">
              To allow everyone to connect with eachother, MetaStadia's DHub will develop Open Virtual Worlds (Cyberspaces).
            </p>
            <p class="text-caption">
              There will be Cyberspaces where Asset Creators can sell/showcase their creations, Developers can anounce and deploy their games and communities can test and play games in every stage of the development process.
            </p>
            <div class=""/>
            <div v-if="!$store.getters.deviceMobile">
              <div align="center" class="gt-sm text-h4 text-weight-bold">VR</div>
              <div align="center" class="lt-md text-h6 text-weight-bold">VR</div>
              <div class="gt-sm q-py-lg row justify-center">
                <div style="border: 11px solid #00f2a1;border-radius: 25px;border-top-left-radius: 50px;border-top-right-radius: 50px;background-color:#00f2a1;">

                  <div class="row col-lg-6 col-md-6 col-sm-12 col-xs-12" style="width:450px;height:151px;">
                    <div class="">
                      <video autoplay loop width="225" style="border-radius:15px;border-top-left-radius: 40px">
                        <source src="@/assets/media/vrcyberspaces.webm"
                          type="video/webm">
                          Media unsupported
                      </video>
                    </div>
                    <div class="">
                      <video autoplay loop width="225" style="border-radius:15px;border-top-right-radius: 40px">
                        <source src="@/assets/media/vrcyberspaces.webm"
                          type="video/webm">
                          Media unsupported
                      </video>
                    </div> 
                  </div>
                </div>
              </div>
              <div class="lt-md q-py-md row justify-center">
                <div style="border: 7px solid #00f2a1;border-radius: 25px;border-top-left-radius: 35px;border-top-right-radius: 35px;background-color:#00f2a1;">
                  <div class="row col-lg-6 col-md-6 col-sm-12 col-xs-12" style="width:250px;height:83px;">
                    <div class="">
                      <video autoplay loop width="125" style="border-radius:15px;border-top-left-radius: 30px">
                        <source src="@/assets/media/vrcyberspaces.webm"
                        type="video/webm">
                        Media unsupported
                      </video>
                    </div>
                    <div class="">
                      <video autoplay loop width="125" style="border-radius:15px;border-top-right-radius: 30px">
                        <source src="@/assets/media/vrcyberspaces.webm"
                        type="video/webm">
                        Media unsupported
                      </video>
                    </div> 
                  </div>
                </div>
              </div>
            </div>

            <div v-else>
              <div align="center" class="gt-sm text-h4 text-weight-bold">VR</div>
              <div align="center" class="lt-md text-h6 text-weight-bold">VR</div>
              <div class="gt-sm q-py-lg row justify-center">
                <div style="border: 11px solid #00f2a1;border-radius: 25px;border-top-left-radius: 50px;border-top-right-radius: 50px;background-color:#00f2a1;">
                  <div class="row col-lg-6 col-md-6 col-sm-12 col-xs-12" style="width:450px;height:151px;">
                    <div class="">
                        <q-img style="width:225px;border-radius:15px;border-top-left-radius: 40px;" src="@/assets/media/vrcyberspaces.png"/>
                    </div>
                    <div class="">
                        <q-img style="width:225px;border-radius:15px;border-top-right-radius: 40px;" src="@/assets/media/vrcyberspaces.png"/>
                    </div> 
                  </div>
                </div>
              </div>
              <div class="lt-md q-py-md row justify-center">
                <div style="border: 7px solid #00f2a1;border-radius: 25px;border-top-left-radius: 35px;border-top-right-radius: 35px;background-color:#00f2a1;">
                  <div class="row col-lg-6 col-md-6 col-sm-12 col-xs-12" style="width:250px;height:83px;">
                    <div class="">
                        <q-img style="width:125px;border-radius:15px;border-top-left-radius: 30px;" src="@/assets/media/vrcyberspaces.png"/>
                    </div>
                    <div class="">
                        <q-img style="width:125px;border-radius:15px;border-top-right-radius: 30px;" src="@/assets/media/vrcyberspaces.png"/>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
            <p class="text-caption">
              MetaStadia's DHub will be the main portal to access all games that will be developed by MetaBrainz IO, its collaborators, contributors and (indie) developers.<br/>
            </p>
            <div class="q-py-md text-h5">Games & Gameplay</div>
              <p class="text-caption">
              One of the key aspect of our project is the gameplay. Games in MetaStadia can be divided in two main parts. 'User Controlled Actions' and 'Meta Controlled Actions'. <br/><br/>
              User Controlled Actions refers to any input provided by the user. This includes the use of a mouse, keyboard, controllers and/or haptics. The input is directly linked to the main-character or object in a game.<br/>
              In contrast, Meta Controlled Actions are influenced by a players MetaBrain. These actions applies to every (non-main) character or object and will be
              automatically handled by MetaBrains. A example of a non-main object is a Drone, Turret, Bot.<br/><br/>
              Through the use of MetaBrains we are able provide a extra layer of depth to the way we play games. This depth shifts a players focus to a more strategic approach before a game starts where the attention lies in analyzing previous games, applying the right MetaGears and fine-tune your MetaBrain. After each strategic phase it will be a full-blown war with extreme action during the game itself.
            </p>
          </div>
        <div class="q-py-lg"/>
      </q-card-section>
    </q-card>
    </div>

    <div id=""></div>
    <div class="row q-py-lg bg-transparent items-start my-text text-white">
      <div class="col flex justify-center">
        <div class="q-pa-xl">
          <div class="q-pa-md" style="">
            <div 
                align="center"
                class="text-h4 text-weight-bold"
            >
             <!--FAQ-->
            </div>
            <div class="q-py-md"/>
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
    <div id="roadmap"></div>
    <div 
      class="row my-text text-white"
      style="background-color:#01000b;" 
    >
      <div align="center" class="col">
        <div class="q-py-xl"/>
        <div 
            class="text-h4 text-weight-bolder"
        >
          METABRAINZ IO
        </div>
        <div class="q-py-xl"/>
    -->

    <div id="roadmap"></div>
    <div 
      class="gt-sm row my-text text-white"
      style="background-color:#100e2f;" 
    >
      <div class="col">
      <div class="q-py-xl"/>

        <div align="center" class="text-h3 text-weight-bold">ROADMAP</div>
        <div class="q-py-lg"/>
        <div class="row">
          <div class="col flex justify-center">
            <q-list>
              <q-item 
                  v-for="item in roadmap" 
                  :key="item"
              >
                  <div class="q-py-sm"/>
                  <q-item-section>
                      <q-item-label>
                           <q-avatar 
                              v-if="item.phase"
                              size="2.5rem" color="transparent" text-color="transparent" icon="remove" 
                          />
                          <q-avatar 
                              v-if="item.todo"
                              size="2.5rem" color="transparent" text-color="white" icon="" 
                          />
                          <q-spinner-hourglass 
                              v-if="item.next"
                              color="teal-10" size="2.75em"
                          />
                          <q-spinner-gears 
                              v-if="item.progress"
                              color="secondary" size="2.75em"
                          />
                          <q-avatar 
                              v-if="item.done"
                              size="2.5rem" color="secondary" text-color="dark" icon="check" 
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span v-if="item.phase" class="text-h6 text-weight-bolder">Phase {{item.task.substring(6,7)}}</span>
                          <span v-else class="text-white">{{item.task.substring(8,item.task.length)}}</span>
                      </q-item-label>
                  </q-item-section>
                  <q-item-section avatar>
                  </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
        <div class="q-py-xl"/>
      </div>
    </div>
    <!-- CONTENT: MOBILE
        style="background-color: #01031a"
      -->
    <div id="roadmap"></div>
    <div 
        class="lt-md row items-start"
        style="background-color:#100e2f;" 
    >
        <div 
            class="col q-py-md flex justify-center"
        >
          <div class="q-py-xl q-pa-lg q-gutter-md">
              <div 
                  align="center"
                  class="my-text text-h4 text-weight-bold text-white"
              >
                  ROADMAP
              </div>
              <q-list padding 
                class="my-text q-py-lg text-white" style="max-width: 350px;">
                  <q-item 
                      v-for="item in roadmap" 
                      :key="item"
                  >
                      <q-item-section avatar top>
                          <q-avatar 
                              v-if="item.phase"
                              size="2rem" color="transparent" text-color="transparent" icon="remove" 
                          />
                          <q-avatar 
                              v-if="item.todo"
                              size="1.5rem" color="blue-grey-10" text-color="white" icon="" 
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
                            <span v-if="item.phase" class="text-h6 text-weight-bolder">Phase {{item.task.substring(6,7)}}</span>
                            <span v-else class="text-weight-medium">{{item.task.substring(8,item.task.length)}}</span>
                          </q-item-label>
                      </q-item-section>
                    </q-item>
              </q-list>
          </div>
        </div>
    </div>

   <div id="team"></div>
    <div class="row my-text bg-transparent text-white">
      <div class="col">

      <div class="gt-sm q-py-xl"/>
      <div align="center" class="gt-sm my-title q-px-lg text-h3 text-weight-bold">TEAM</div>
      <div class="lt-md q-py-lg"/>
      <div align="center" class="lt-md my-title q-px-lg text-h4 text-weight-bold">TEAM</div>
      <div class="q-py-xl"/>
        <div class="row justify-center">
          
          <!-- MEMBER -->
          <div 
            class="q-pa-md my-title text-h6 text-white"
            style="background-color:#01000b;border: 2px solid #00f2a1;width:225px;text-align:center;margin:20px;"
          >
            <q-img 
              src="@/assets/team/LnrCdr.gif"
              style="border: 2px solid #01000b;"
            />

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
              <div class="text-caption text-bold">Founder / Programmer & Designer</div>
              <div class="text-caption text-cyan-11">Non-stop creating. Loves Games, Technical Art and Nature <strong>☯︎</strong></div>
              <div class="q-py-sm"/>
            </div>
          </div>
        
          <!-- 
            MEMBER 
          <div 
            class="q-pa-md my-title text-h6 text-white"
            style="background-color:#01000b;border: 2px solid black;width:225px;text-align:center;margin:20px;"
          >
            <q-img 
              src="@/assets/team/MrRndr.gif"
              style="border: 2px solid black;"
            />
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
              <div class="q-py-xs"/>
              <div align="center">
                <div class="text-caption text-bold">Animator & Designer</div>
                <div class="text-caption text-cyan-11">Passion for building and creating. Loves a stout Beer.</div>
                <div class="q-py-sm"/>
              </div>
            </div>
          -->

          <!-- MEMBER -->
          <div 
            class="q-pa-md my-title text-h6 text-white"
            style="background-color:#01000b;border: 2px solid #00f2a1;width:225px;text-align:center;margin:20px;"
          >
            <q-img 
              src="@/assets/team/Member.gif"
              style="border: 2px solid #01000b;"
            />
            <div class="q-py-xs"/>
            <q-item style="font-size: 1.1rem;color: #00f2a1;">
              <q-item-section align="center">
                <q-item-label>
                  <div class="">
                    ? ? ?
                  </div>
                </q-item-label>
              </q-item-section>
            </q-item>
            <div class="q-py-xs"/>
            <div align="center">
              <div class="text-caption text-bold">...</div>
              <div class="text-caption text-cyan-11">...</div>
              <div class="q-py-sm"/>
            </div>
          </div>
          <!-- MEMBER -->
          <div 
            class="q-pa-md my-title text-h6 text-white"
            style="background-color:#01000b;border: 2px solid #00f2a1;width:225px;text-align:center;margin:20px;"
          >
            <q-img 
              src="@/assets/team/Member.gif"
              style="border: 2px solid #01000b;"
            />
            <div class="q-py-xs"/>
            <q-item style="font-size: 1.1rem;color: #00f2a1;">
              <q-item-section align="center">
                <q-item-label>
                  <div class="">
                    ? ? ?
                  </div>
                </q-item-label>
              </q-item-section>
            </q-item>
            <div class="q-py-xs"/>
            <div align="center">
              <div class="text-caption text-bold">...</div>
              <div class="text-caption text-cyan-11">...</div>
              <div class="q-py-sm"/>
            </div>
          </div>          
        </div>
        <div class="q-py-lg"/>

    <div id="notes" 
      class="my-text text-white"
      style="background-color:#100e2f;"
    >
      <div class="gt-sm q-py-xl"/>
      <div align="center" class="gt-sm my-title q-px-lg text-h3 text-weight-bold">NOTES</div>
      <div class="lt-md q-py-lg"/>
      <div align="center" class="lt-md my-title q-px-lg text-h4 text-weight-bold">NOTES</div>
      <div class="q-py-sm"/>

      <q-card flat class="q-pa-none row bg-transparent justify-center">
        <q-card-section
          class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify"
        >        
          <div align="start" class="q-mt-sm justify-center">
            <q-separator color="secondary"/>
            <div align="center" class="q-py-md text-h5"><strong>MetaBrainz.io (Beta)</strong><br/>&nbsp;&nbsp;just&nbsp;&nbsp;Launched&nbsp;!!!&nbsp;🚀🌕</div>
            <q-separator color="secondary"/>
            <div class="q-py-sm"/>
          <p align="center" class="text-subtitle1 text-weight-bold">
            Are you a Developer / Designer? Wanna jump Aboard?<br/>Contact me at Discord:
            <span align="center" class="text-subtitle1 text-weight-bolder text-yellow">
                <strong>LnrCdr#0205</strong>
            </span>
          </p>
          <q-separator color="secondary"/>

            <p align="center" class="q-py-md text-subtitle1 text-weight-bold">
                Want to see MetaBrainz IO succeed and help accelerate the development process? Use one of the crypto adresses below and drop any amount you'd like..<br/><br/>
            </p>
            <div class="row justify-center">
              <q-img 
                width="6em"
                :src="require('@/assets/images/rocket.png')"/>
              <div class="gt-xs text-white" style="font-size:12px;">
                <ul style="left:125px;padding-right:15px;list-style:none;font-weight: bold;">
                  <li>
                    <strong>BTC:</strong>&nbsp;&nbsp;&nbsp;&nbsp;0x00000000000000000
                  </li>
                  <li>
                    <strong>ETH:</strong>&nbsp;&nbsp;&nbsp;&nbsp;0xc498cBd96e37f48138115FBA73bC55fd0e21bc82
                  </li>
                  <li>
                    <strong>XRP:</strong>&nbsp;&nbsp;&nbsp;&nbsp;0x00000000000000000
                  </li>
                  
                  <li class="q-py-sm text-yellow">
                    ps: Leave a reference so I can give a personal thanks!! ❤️
                  </li>
                </ul>
              </div>
              <div class="lt-sm text-white" style="padding-right: 40px;font-size:10px;font-weight: bold;">
                <ul style="list-style:none;">
                  <li>
                    <strong>BTC:</strong><br/>0x00000000000000000
                  </li>
                  <li>
                    <strong>ETH:</strong><br/>0xc498cBd96e37f48138115FBA73bC55fd0e21bc82
                  </li>
                  <li>
                    <strong>XRP:</strong><br/>0x00000000000000000
                  </li>
                  <li class="q-py-lg text-yellow">
                    ps: Leave a reference so I can give a personal thanks!! ❤️
                  </li>
                </ul>
              </div>
              <div>
            </div>
          </div>

          <div align="center" class="">
            <q-btn label="Leave a reference" color="secondary" class="text-black no-border no-border-radius" @click="prompt = true" />
          </div>
          <q-dialog v-model="prompt" persistent>
            <q-card flat class="q-pa-lg my-text" style="border: 1px solid #00f2a1;background-color:#01000b;">
              <q-card-section>
                <p class="text-white text-body0 text-weight-bolder">
                  Leave your email or social media url and crypto address as a reference 
                  so that it's clear that you are the one who contributed.
                </p>
                <div class="q-py-md"/>
                <form action="/action_page.php">
                  <div class="row">
                    <div class="col" style="padding-left:-60px;max-width:300px;">
                      <div class="row">
                        <q-card-section class="q-pt-none">
                          <q-input v-model="patron_url"
                            ref="patronUrlRef"
                            color="secondary" 
                            label="Email / Social media url"
                            lazy-rules :rules="urlRules"
                            dark flat no-border-radius dense autofocus
                          />
                        </q-card-section>
                        <q-card-section class="q-pt-none">
                          <q-input v-model="patron_addr" 
                            ref="patronAddrRef"
                            color="secondary" 
                            label="Your crypto address" 
                            lazy-rules :rules="addrRules"
                            dark flat no-border-radius dense autofocus
                          />
                        </q-card-section>
                      </div>
                    </div>
                  </div>
                </form>
              </q-card-section>
            <q-card-actions align="center" class="q-px-lg justify-between text-secondary text-weight-bold">
              <q-btn flat color="secondary" label="Cancel" @click="sendReference(false)" v-close-popup />
              <q-btn flat color="secondary" label="Send" @click="sendReference(true)"/>
            </q-card-actions>
            </q-card>
          </q-dialog>
          
          </div>
        </q-card-section>
      </q-card>
        <div class="q-py-xl"/>
      </div>
    </div>
  </div>

   <div id="contact"></div>
    <div 
      class="row my-text text-white"
      style="background-color:#01000b;" 
    >
      <div align="center" class="col">
        <div class="q-py-xl"/>
        <div 
            class="text-h4 text-weight-bolder"
            style="cursor:pointer;"
            @click="$router.push({hash: '#about'})"
        >
          METABRAINZ IO
        </div>
        <div class="row q-py-md flex justify-center my-title col text-h5 text-white">
          <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
            <q-item-section>
              <q-item-label>
                <q-icon name="fab fa-twitter"/>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://github.com/metabrainz-io">
            <q-item-section>
              <q-item-label>
              <q-icon name="fab fa-github"/>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://opensea.io/metabrainz">
            <q-item-section>
              <q-item-label>
                <q-img src="@/assets/style/logo_opensea_trans_white.png" color="white" width="24px"/>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://linktr.ee/metabrainz">
            <q-item-section>
              <q-item-label>
                <q-img src="@/assets/style/logo_linktree_trans_white.png" color="white" width="24px"/>
              </q-item-label>
            </q-item-section>
          </q-item>

        </div>

        <div class="q-py-xl"/>
        <div class="row justify-center">

          <div 
            class="q-pa-md my-title text-h6 text-white"
            style="border: 2px solid white;width:225px;text-align:center;margin:20px;"
          >
            <q-item clickable @click="$router.push({hash: '#roadmap'})">
              <q-item-section>
                <q-item-label>
                  LitePaper
                  &nbsp;&nbsp;
                  <q-icon name="article"/>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>            
          
          <div 
            class="q-pa-md my-title text-h6 text-white"
            style="border: 2px solid white;width:225px;text-align:center;margin:20px;"
          >
            <q-item clickable tag="a" target="_blank" href="https://www.linkedin.com/in/bernardohart/">
              <q-item-section>
                <q-item-label>
                  Investors&nbsp;&nbsp;
                  <q-icon name="fab fa-linkedin"/>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <div 
            class="q-pa-md my-title text-h6 text-grey-9"
            style="border: 2px solid #212121;width:270px;text-align:center;margin:20px;"
          >
            <q-item>
              <q-item-section>
                <q-item-label>
                  Build with us &nbsp;&nbsp;
                  <q-icon name="fab fa-discord"/>
                </q-item-label>
              </q-item-section>
            </q-item>                
          </div>
          
        </div>
        <div class="q-py-xl"/>
      </div>
    </div>

    <!-- POPUP -->
    <q-dialog v-model="stats_view">
        <q-card flat class="bg-grey-10 text-white" style="border:2px solid #00f2a1;">
            <q-card-section>
                <template v-slot:avatar>
                    <q-icon name="open_in_new" color="primary" />
                </template>
                <div class="text-h5 text-weight-bold">{{cur_stat.name}}</div>
            </q-card-section>

            <q-card-section horizontal>
              <q-card-section>
                <div style="height:200px;">
                  <div class="text-subtitle1 text-white" style="">
                    {{cur_stat.descr}}
                  </div>
                  <div class="text-subtitle0 text-secondary">
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
                <div style="border:2px solid #00f2a1;background-color:#01000b;">
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
    // Phase 1
    {"task": "PHASE 1", "todo":false, "progress":false, "done":false,"next": false, "phase": true}, // <<<< phase 1
    {"task": "PHASE 1: Site Launch (BETA)", "todo":false, "progress":false, "done":true,"next": false, "phase": false},
    {"task": "PHASE 1: LitePaper", "todo":false, "progress":true, "done":false,"next": false, "phase": false},
    {"task": "PHASE 1: Important Anouncements", "todo":false, "progress":false, "done":false, "next": true, "phase": false},
    {"task": "PHASE 1: 1st Generation MetaGears", "todo":false, "progress":true, "done":false, "next": false, "phase": false},
    {"task": "PHASE 1: Mint NFT Site Functionallity", "todo":false, "progress":false, "done":false, "next": true, "phase": false},
    // Phase 2
    {"task": "PHASE 2", "todo":false, "progress":false, "done":false,"next": false, "phase": true}, // <<<< phase 2
    {"task": "PHASE 2: MetaBrain Activation", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 2: MetaStadia DHub", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 2: MetaStadia Spaces", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    {"task": "PHASE 2: MetaStadia First Game", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
    // Phase 3
    {"task": "PHASE 3", "todo":false, "progress":false, "done":false,"next": false, "phase": true}, // <<<< phase 3
    {"task": "PHASE 3: To Be Anounced ....", "todo":true, "progress":false, "done":false, "next": false, "phase": false},
]

const stats = [
  {
    "id":0, "name":"Character", "descr":"MetaBrains profile information","stat": 
    ["Token ID", "Username", "Crypto address", "Avatar image", "Level", "Credits"], 
    "img_src_png":"stats/avtr_stats.png","img_src_gif":"stats/avtr_stats.gif" 
  },
  {
    "id":1, "name":"Base", "descr":"During games a MetaBrains Base stats are translated to real hardware resources","stat": 
    ["Speed Base", "Speed Turbo", "Memory", "Energy"], 
    "img_src_png":"stats/base_stats.png","img_src_gif":"stats/base_stats.gif" 
  },
  {
    "id":2, "name":"Ability", "descr":"A MetaBrains Ability stats are linked to algorithms that runs on allocated hardware resources","stat": 
    ["Intelligence", "Stability", "Recovery"], 
    "img_src_png":"stats/ably_stats.png","img_src_gif":"stats/ably_stats.gif" 
  },
  {
    "id":3, "name":"Meta", "descr":"A MetaBrains Meta stats are linked to ingame specific skills, for example:","stat": 
    ["Move speed", "Burst Fire", "Strength", "Aim Precision"], 
    "img_src_png":"stats/meta_stats.png","img_src_gif":"stats/meta_stats.gif" 
  },      
]

import { reactive, toRefs, ref } from 'vue'
// import { useStore } from 'vuex'
import { sendReference } from "@/api/api";
export default{
  name:"About",
  setup(){
    // const store = useStore();
    
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
        "event_hover":false,
        
      },
      slide: 1
      // patron_url: "",
      // patron_addr: "",
    });

    const patron_url = ref(null);
    const patron_addr = ref(null);
    const patronUrlRef = ref(null);
    const patronAddrRef = ref(null);
    
    const pause = ref(false);
    const prompt = ref(false);

    function resetForm(){
        prompt.value = false;
        patron_url.value = "";
        patron_addr.value = "";
        patronUrlRef.value.resetValidation();
        patronAddrRef.value.resetValidation();
    }

    return{
      pause,
      prompt,
      patron_url,
      patron_addr,
      patronUrlRef,
      patronAddrRef,
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
          if(value == stat.id){
            state.stats_view = true;
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
      },
      carousel_next: ()=>{
        state.slide += 1;
        if(state.slide > 8){
          state.slide=1;
        }
      },
      sendReference: (send)=>{

        if(send){
          patronUrlRef.value.validate()
          patronAddrRef.value.validate()

          if (patronUrlRef.value.hasError || patronAddrRef.value.hasError) {
            alert("The form seems incomplete, please try again! 🤖")
            return;
          }

          if(patron_url.value != null && patron_addr.value != null){
            const user_ref = {
              "msg_type": "contribution",
              "url": patron_url.value,
              "c_addr": patron_addr.value
            }

            return sendReference(user_ref)
            .then((result) => {
                if(result){
                  alert("Thanks for your support and trust in MetaBrainz IO 🦾 We're one step closer to our goals!! 🚀🪐");
                  resetForm();
                }
                else{
                  alert("Something went wrong, most likely a serverside error. Please try again later..");
                }
            });
          }
        }else{
          resetForm();
        }
      },
      urlRules: [
        val => (val !== null && val !== '') || 'Forgot to fill this field?',
        val => (val.length > 4 && val.length < 129) || 'Requires 5-128 chars'
      ],
      addrRules: [
        val => (val !== null && val !== '') || 'Forgot to fill this field?',
        val => (val.length > 24 && val.length < 43) || 'Invalid crypto address'
      ],
    }
  }
}
</script>

<style lang="scss">

.member-item{
    font-size: 1.1rem;

    color: #00f2a1;
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