<template>
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
            v-model="slide_intro_main"
            class="bg-transparent"
            swipeable
            infinite
            :autoplay="playspeed"
            :transition-duration="3000"
            navigation
            navigation-icon="check_box_outline_blank"
            control-color="secondary"
            style="height:600px;min-width:275px;border-left: 3px solid #00f2a1;border-right: 3px solid #00f2a1;"
          >
            <q-carousel-slide :name="1" img-src="@/assets/bg/intro.png">
              <div class="my-text q-py-lg text-h6 text-weight-bold">Where.. Am I..</div>
              <div class="q-mt-sm my-text my-text-dimmed-bg text-caption text-weight-bold">
                Are you allright? It looks like you forgot what happened, let me try to refresh your memory..<br/><br/>
                First of all I am Ave,<br/>a 1st gen Artificial Intelligent Agent.<br/><br/>
                Welcome to the Grid, one of many future Cyberspaces within the MetaBrainz realm!
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" img-src="@/assets/bg/intro.png">
              <div class="my-text q-py-lg text-h6 text-weight-bold">Where.. Am I..</div>
              <div class="q-mt-sm my-text my-text-dimmed-bg text-caption text-weight-bold">
                It looks like someone tempted you to connect to the MetaBrainz system, you've took the bluepill, didn't you?<br/><br/>
                Currently your physical brain is hooked to a 'Brain-Computer-Interface'. There seems no way back, at least, not that I know of..
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" img-src="@/assets/bg/intro.png">
              <div class="my-text q-py-lg text-h6 text-weight-bold">What now?</div>
              <div class="q-mt-sm my-text-dimmed-bg my-text text-caption text-weight-bold">
                Good question, your guess is as good as mine.. Ever since MetaBrainz labeled me as 'outdated' I'm stuck here..<br/><br/>
                All I know is that there has been a great update recently. As of now, the only way forward is to go into the depths of the Metaverse and participate in so called Meta-Games or M-Games. During M-Games you might be able to beat your competitors and proof yourself worthy.<br/><br/>
                The more you win the more credits you'll earn, the more credits the greater the chance of gaining some control in this system!
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="4" img-src="@/assets/bg/intro.png">
              <div class="my-text q-py-lg text-h6 text-weight-bold">What if I refuse?</div>
              <div class="q-mt-sm my-text-dimmed-bg my-text text-caption text-weight-bold">
                If you refuse to coorporate and challenge the system you will have to bear the consequences.<br/><br/>
                They could erase segments of your memory, or worse.. rewire your mind into a single purpose computer chip to enslave you.<br/><br/>
                My advice is to play along.. just for now.. Maybe in the future there will be a way to unplug from this 'Cybermaze'!
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="5" img-src="@/assets/bg/intro.png">
              <div class="my-text q-py-lg text-h6 text-weight-bold">How do I play?</div>
              <div class="my-text my-text-dimmed-bg q-mt-sm text-caption text-weight-bold">
                From this point on, your next best actions are:<br/><br/>
                <p style="color:#f9579a">1. Obtain a M-Brain. You'll be needing that to get access to compute resources and algorithms to beat your competitors.</p>
                <p>2. Evaluate your M-Brains performance after a game. Make adjustments to your M-Brain, apply the best configuration and increase it's intelligence and power.</p>
                <p>3. Dominate in the MetaBrainz IO realm to earn credits and win prices!</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="6" img-src="@/assets/bg/intro.png">
              <div class="my-text q-py-lg text-h6 text-weight-bold">How do I play?</div>
              <div class="my-text my-text-dimmed-bg q-mt-sm text-caption text-weight-bold">
                From this point on, your next best courses of action are:<br/><br/>
                <p>1. Obtain a M-Brain. You'll be needing that to get access to compute resources and algorithms to beat your competitors.</p>
                <p style="color:#f9579a">2. Evaluate your M-Brains performance after a game. Make adjustments to your M-Brain, apply the best configuration and increase it's intelligence and power.</p>
                <p>3. Dominate in the MetaBrainz IO realm to earn credits and win prices!</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="7" img-src="@/assets/bg/intro.png">
              <div class="my-text q-py-lg text-h6 text-weight-bold">How do I play?</div>
              <div class="my-text my-text-dimmed-bg q-mt-sm text-caption text-weight-bold">
                From this point on, your next best courses of action are:<br/><br/>
                <p>1. Obtain a M-Brain. You'll be needing that to get access to compute resources and algorithms to beat your competitors.</p>
                <p>2. Evaluate your M-Brains performance after a game. Make adjustments to your M-Brain, apply the best configuration and increase it's intelligence and power.</p>
                <p style="color:#f9579a">3. Dominate in the MetaBrainz IO realm to earn credits and win prices!</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="8" img-src="@/assets/bg/intro.png">
              <div class="my-text q-py-lg text-h6 text-weight-bold">Note:</div>
              <div class="q-mt-sm my-text my-text-dimmed-bg text-subtitle0 text-weight-bold">
                <p style="color:#f9579a"><strong>
                  The project is currently under heavy development.
                </strong></p>
                <p class="" style="color:#f9579a"><strong>
                  If you a developer and want to jump aboard, please connect with us at discord.<br/><br/>
                </strong></p>
                <p style="color:#f9579a"><strong>
                  Checkout the roadmap to follow our progress.<br/><br/>
                </strong></p>
                <p class="" style="color:#f9579a"><strong>
                  We're just scratching the surface of what will be possible within the MetaBrainz IO realm. Stay tuned and don't blink!
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
              push flat dense icon="play_arrow"
                class="absolute"
                size="2em"
                style="bottom: 60px;right:90px;color:#00f2a1;"
                @click="pause = false, playspeed=12500"
            />
            <q-btn v-else
              push flat dense icon="pause"
                class="absolute"
                size="2em"
                style="bottom: 60px;right:90px;color:#00f2a1;"
                @click="pause = true, playspeed=0"
            />
            <q-btn
              push flat dense icon="skip_next"
                class="absolute"
                size="2em"
                style="bottom: 60px;right:30px;color:#00f2a1;"
                @click="intro_main_next()"
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

      <div class="q-py-xl"/>

    <!-- MetaBrain -->
    <div id="meta-brainz-io"
      class="my-text text-white bg-transparent"
    >

      <div class="gt-sm q-py-xl"/>


      <!--<div align="center" class="gt-md my-title q-px-lg text-center text-h2 text-weight-bold">MetaBrainz IO</div>-->
      <div class="lt-md q-py-lg"/>
      <!--<div align="center" class="lt-lg my-title q-px-lg text-center text-h3 text-weight-bold">MetaBrainz IO</div>-->

      <div class="q-py-xs"/>
      <q-card flat
        class="q-pa-none row justify-center bg-transparent"
      > 
        <q-card-section 
          class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify"
          style=""  
        >
            <q-carousel
                infinite
                swipeable
                animated
                :autoplay="4000"
                transition-prev="slide-right"
                transition-next="slide-left"
                :transition-duration="500"
                v-model="slide_intro_sec"
                class="gt-sm bg-transparent"
                height="450px"
                style="width:100%;height:300px;"
            >
                <q-carousel-slide :name="1" class="row items-center">
                    <div class="col gt-md">
                        <p class="q-py-md text-h4 text-center text-secondary">
                            Shaping the future of Gaming
                        </p>
                    </div>

                    <div class="col lt-lg">
                        <p class="q-py-md text-h5 text-center text-secondary">
                            Shaping the future of Gaming
                        </p>
                    </div>     
                </q-carousel-slide>

                <q-carousel-slide :name="2" class="row items-center">
                    <div class="col gt-md">
                        <p class="q-py-md text-h4 text-center text-secondary">
                            We present <strong> M-Brains</strong><br/><br/>A Digital Brain that gives you access to Offchain Hardware resources, Algorithms & Artificial Intelligence
                        </p>
                    </div>

                    <div class="col lt-lg">
                        <p class="q-py-md text-h5 text-center text-secondary">
                            We present <strong> M-Brains</strong><br/><br/>A Digital Brain that gives you access to Offchain Hardware resources, Algorithms & Artificial Intelligence
                        </p>
                    </div>                    
                </q-carousel-slide>
                
                <q-carousel-slide :name="3" class="row items-center">
                    <div class="col gt-md">
                        <p class="q-py-md text-h4 text-center text-secondary">
                            Utilize your resources during Games in REALTIME
                        </p>
                    </div>

                    <div class="col lt-lg">
                        <p class="q-py-md text-h5 text-center text-secondary">
                            Utilize your resources during Games in REALTIME
                        </p>
                    </div>                    
                </q-carousel-slide>                  

                <q-carousel-slide :name="4" class="row items-center">
                    <div class="col gt-md">
                        <p class="q-py-md text-h4 text-center text-secondary">
                          Build, Enhance and Fine-Tune your M-Brain
                        </p>
                    </div>

                    <div class="col lt-lg">
                        <p class="q-py-md text-h5 text-center text-secondary">
                          Build, Enhance and Fine-Tune your M-Brain
                        </p>
                    </div>                    
                </q-carousel-slide>

                <q-carousel-slide :name="5" class="row items-center">
                    <div class="col gt-md">
                        <p class="q-py-md text-h4 text-center text-secondary">
                          Outperform your competitors
                        </p>
                    </div>

                    <div class="col lt-lg">
                        <p class="q-py-md text-h5 text-center text-secondary">
                          Outperform your competitors
                        </p>
                    </div>                    
                </q-carousel-slide>                

                <q-carousel-slide :name="6" class="row items-center">
                    <div class="col">
                        <p class="q-py-md text-h4 text-center text-secondary">
                        Unlock the true power of Meta
                        </p>
                    </div>                  
                </q-carousel-slide>
            </q-carousel>


            <q-carousel
                infinite
                swipeable
                animated
                :autoplay="4000"
                transition-prev="slide-right"
                transition-next="slide-left"
                :transition-duration="500"
                v-model="slide_intro_sec"
                class="lt-md bg-transparent"
                style="width:100%;height:300px;"
            >
                <q-carousel-slide :name="1" class="row items-center">
                    <div class="col">
                        <p class="q-py-md text-h6 text-center text-secondary">
                            Shaping the future of Gaming
                        </p>
                    </div>                    
                </q-carousel-slide>

                <q-carousel-slide :name="2" class="row items-center">
                    <div class="col">                
                        <p class="q-py-md text-h6 text-center text-secondary">
                            We present <strong> M-Brains</strong><br/><br/>A Digital Brain that gives you access to Offchain Hardware resources, Algorithms & Artificial Intelligence
                        </p>
                    </div>                             
                </q-carousel-slide>

                <q-carousel-slide :name="3" class="row items-center">
                    <div class="col">
                        <p class="q-py-md text-h6 text-center text-secondary">
                          Utilize your resources during Games in REALTIME
                        </p>
                    </div>                    
                </q-carousel-slide>    

                <q-carousel-slide :name="4" class="row items-center">
                    <div class="col">
                        <p class="q-py-md text-h6 text-center text-secondary">
                          Build, Enhance and Fine-Tune your M-Brain
                        </p>  
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="5" class="row items-center">
                    <div class="col">
                        <p class="q-py-md text-h6 text-center text-secondary">
                          Outperform your competitors in M-Games
                        </p>  
                    </div>
                </q-carousel-slide>

                <q-carousel-slide :name="6" class="row items-center">
                    <div class="col">
                        <p class="q-py-md text-h6 text-center text-secondary">
                          Unlock the true power of Meta
                        </p>
                    </div>                    
                </q-carousel-slide>
            </q-carousel>

        </q-card-section>
      </q-card>
    </div>

</template>

<script>

import { reactive, toRefs } from 'vue';
export default{
    name: "AboutIntro",
    setup(){

    const state = reactive({
      pause: false,
      playspeed: 12500,
      slide_intro_main: 1,
      slide_intro_sec: 1,
    });

        return{
            ... toRefs(state),
            intro_main_next: ()=>{
                state.slide_intro_main += 1;
                if(state.slide_intro_main > 8){
                state.slide_intro_main=1;
                }
            },
            intro_sec_next: ()=>{
                state.slide_intro_sec += 1;
                if(state.slide_intro_sec > 3){
                state.slide_intro_sec=1;
                }
            },            
        }
    }
}
</script>