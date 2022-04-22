<template>
   <!-- CARD BEGIN -->
    <q-card class="gt-sm q-pa-none justify-center bg-dark row my-text">
        
        <!-- ROW BEGIN -->
        <div class="q-pa-md q-px-xl bg-dark fit row justify-evenly" style="max-width:1439px;">
            <div class="q-pa-sm">
            <q-card class="my-card q-pa-sm bg-dark row my-text" style="width: 420px; height:100%;">
                <q-card-section class="">
                    <div class="" style="">
                        <div class="">
                            <p class="md text-h4 text-left text-secondary" style="width:392px;">
                                What are M-Games?
                            </p>

                            <div class="q-py-md"/>
                            <div class="column flex-center" style="">
                                <q-carousel
                                    v-model="slide"
                                    class="bg-dark"
                                    swipeable
                                    animated
                                    infinite
                                    :autoplay="12500"
                                    transition-prev="scale"
                                    transition-next="scale"
                                    :transition-duration="800"
                                    navigation
                                    navigation-icon="check_box_outline_blank"
                                    control-color="secondary"
                                    style="width:100%;"
                                >
                                    <q-carousel-slide :name="1">
                                        <!--
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            M-Games
                                        </p>
                                        <p class="lt-md text-subtitle1 text-center text-white text-weight-bolder" style="color: #f975ac;">
                                            M-Games
                                        </p> 
                                        -->                               

                                        <p class="q-px-md md text-subtitle1 text-white" style="">
                                            M-Games (or Meta-Games) are games that implement the MetaBrainz IO Library.
                                        </p>
                                    </q-carousel-slide>

                                    <q-carousel-slide :name="2">
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            How it works<!--<span class="text-caption text-secondary">&nbsp;&nbsp;[ 1/6 ]</span>-->
                                        </p>

                                        <p class="q-px-md md text-subtitle2 text-white" style="">
                                            Unlike 'regular' games, M-Games are 'Algorithmic Aided Games'. This means that a Player's M-Brain acts as a sidekick during gameplay and intelligently performs on/off-chain calculations based on it's configuration.
                                        </p>                                          
                                    </q-carousel-slide>

                                    <q-carousel-slide :name="3">
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            How it works<!--<span class="text-caption text-secondary">&nbsp;&nbsp;[ 2/6 ]</span>-->
                                        </p>

                                        <p class="q-px-md md text-subtitle2 text-white" style="">
                                            Players can fully customize and fine-tune their M-Brain according to their preferences, allowing them to have more control over the behaviour of their ingame assets.
                                        </p>                                          
                                    </q-carousel-slide>



                                    <q-carousel-slide :name="4">
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            Gameplay & Actions<!--<span class="text-caption text-secondary">&nbsp;&nbsp;[ 3/6 ]</span>-->
                                        </p>

                                        <p class="q-px-md md text-subtitle2 text-white" style="">
                                            The gameplay in M-Games can be divided in two different ways, by 'User Controlled Actions' and 'M-Brain Controlled Actions'.
                                        </p>                                          
                                    </q-carousel-slide>



                                    <q-carousel-slide :name="5">
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                           Gameplay & Actions<!--<span class="text-caption text-secondary">&nbsp;&nbsp;[ 4/6 ]</span>-->
                                        </p>

                                        <p class="q-px-md md text-subtitle2 text-white" style="">
                                            User Controlled Actions refers to any input provided a Player (Haptics, Keyboard and/or Mouse).<br/><br/>
                                            M-Brain Controlled Actions are actions that are automatically handled by a Player's M-Brain.
                                        </p>                                          
                                    </q-carousel-slide>



                                    <q-carousel-slide :name="6">
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            Off-chain vs Local<!--<span class="text-caption text-secondary">&nbsp;&nbsp;[ 5/6 ]</span>-->
                                        </p>

                                        <p class="q-px-md md text-subtitle2 text-white" style="">
                                            Base and Ability stats are linked to any M-Brain controlled action. The processing of these actions happens off-chain.<br/><br/>
                                            The higher the Base stats, the more compute power will be available to use. The more Abilities (Algorithms) M-Brains contains, the better and more intelligent it will make use of the available resources.
                                        </p>                                          
                                    </q-carousel-slide>                                    


                                    <q-carousel-slide :name="7">
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            Off-chain vs Local<!--<span class="text-caption text-secondary">&nbsp;&nbsp;[ 6/6 ]</span>-->
                                        </p>

                                        <p class="q-px-md md text-subtitle2 text-white" style="">
                                            Meta stats are associated with actions that don't require a lot of computing power, therefore the processing of these actions takes place on a Player's local computer.
                                        </p>                                          
                                    </q-carousel-slide>                                                                        

                                </q-carousel>

                            </div>
                        </div>
                    </div>
                    <div class="gt-sm q-py-xl"/>
                </q-card-section>
            </q-card>
            </div>

            <div class="q-pa-sm">
                <q-card class="my-card my-text q-pa-sm row justify-center bg-dark" style="width: 420px; height:100%;">
                    <q-card-section class="q-px-sm">
                        <div class="column flex-center" style="height:100%;width: 420px; ">
                            <div>
                                <div class="">
                                    <q-img 
                                        style="width:384px;height:192px;"
                                        :src="require('@/assets/about/mgames/mgames.gif')"/>                                        
                                </div>                    
                            </div>
                        </div>
                        <div class="gt-sm q-py-xl"/>
                    </q-card-section>
                </q-card>
            </div>

        </div>
        <!-- ROW END -->
    </q-card>
    <!-- CARD END -->

</template>

<script>

import { ref } from 'vue'
export default {
    name: 'AboutMetaGamesMD',
    setup(){
       
        return {
            slide: ref(1)
        }
    }
}
</script>


<style lang="scss">
.my-card{
  width: 100%;
  max-width: 750px;
}
</style>