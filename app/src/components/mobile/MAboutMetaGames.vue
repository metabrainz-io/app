<template>
   <q-card class="q-pa-none bg-dark row my-text">
        <q-card-section 
            class="q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify"
        >
            <!-- WHAT ARE M-BRAINS? -->
            <div class="q-mt-sm"><!-- style="">-->
                <div class="">
                    <div>
                        <p class="gt-xs text-h4 text-center text-secondary">
                            What are M-Games?
                        </p>
                        <p class="lt-sm text-h4 text-center text-secondary">
                            What are M-Games?
                        </p>
                        <div class="q-py-md"/>
                        <p class="text-subtitle1 text-center text-white">
                           M-Games (or Meta-Games) are games that implement the MetaBrainz IO Library.
                        </p>
                    </div>
                </div>

                <div class="mb-overview-mobile col q-pa-md row flex justify-center">
                    <div align="center" style="width:100%;100%;">
                        <q-card class="my-card my-text q-pa-sm row justify-center bg-dark" style="width: 100%; height:100%;">
                            <q-card-section class="q-px-sm">
                                <div class="column flex-center" style="height:100%;width: 100%;">
                                    <div>
                                        <div class="sm">
                                            <q-img 
                                                style="width:336px;height:168px;"
                                                :src="require('@/assets/about/mgames/mgames.gif')"/>                                                  
                                        </div>
                                        <div class="xs">
                                            <q-img 
                                                style="width:312px;height:156px;"
                                                :src="require('@/assets/about/mgames/mgames.gif')"/>                                                  
                                        </div>                                          
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>     
            </div>

            <!-- SMALL -->
            <q-card-section class="sm col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify" style="">
                <div align="start" class="q-mt-sm justify-center bg-green" style="">
                    <div class="">
                        <q-carousel
                            swipeable
                            animated
                            transition-prev="slide-right"
                            transition-next="slide-left"
                            :transition-duration="300"
                            v-model="btn_slide_mgames_main"
                            infinite
                            style="height:300px;border:3px solid #00f2a1;"                            
                            class="mbrains-general-slide-action-btn item-active bg-dark"
                        >
                            <!-- Non-Fungible Tokens (NFT's) -->
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 1/9 ]</span><br/>
                                        How it works
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="1">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        How it works<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 2/9 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle2">
                                        Unlike 'regular' games, M-Games are 'Algorithmic Aided Games'. This means that a Player's M-Brain acts as a sidekick during gameplay and intelligently performs on/off-chain calculations based on it's configuration.
                                    </p>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="2">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        How it works<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 3/9 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle2">
                                        Players can fully customize and fine-tune their M-Brain according to their preferences, allowing them to have more control over the behaviour of their ingame assets.
                                    </p>
                                </div>
                            </q-carousel-slide>                            

                            <!-- Mechanics 1/2 -->
                            <q-carousel-slide :name="3">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 4/9 ]</span><br/>
                                        Gameplay & Actions
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="4">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Gameplay & Actions<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 5/9 ]</span>
                                    </p>
                                    <p class="text-subtitle2">
                                        The gameplay in M-Games can be divided in two different ways, by 'User Controlled Actions' and 'M-Brain Controlled Actions'.
                                    </p>
                                </div>
                            </q-carousel-slide>      
                            <q-carousel-slide :name="5">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Gameplay & Actions<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 6/9 ]</span>
                                    </p>
                                    <p class="text-subtitle2">
                                        User Controlled Actions refers to any input provided a Player (Haptics, Keyboard and/or Mouse).<br/><br/>
                                        M-Brain Controlled Actions are actions that are automatically handled by a Player's M-Brain.
                                    </p>
                                </div>
                            </q-carousel-slide>    

                            <q-carousel-slide :name="6">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                    <span class="text-caption text-secondary">[ 7/9 ]</span><br/>
                                        Off-chain vs Local
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="7">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Off-chain vs Local<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 8/9 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle2">
                                        Base and Ability stats are linked to any M-Brain controlled action. The processing of these actions happens off-chain.<br/><br/>
                                        The higher the Base stats, the more compute power will be available to use. The more Abilities (Algorithms) M-Brains contains, the better and more intelligent it will make use of the available resources.
                                    </p>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="8">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Off-chain vs Local<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 9/9 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle2">
                                        Meta stats are associated with actions that don't require a lot of computing power, therefore the processing of these actions takes place on a Player's local computer.
                                    </p>
                                </div>
                            </q-carousel-slide>                        
                                                                            
                        </q-carousel>
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMGamesMain()"
                        />
                    </div>
                </div>
            </q-card-section>

            <!-- EXTRA SMALL -->
            <q-card-section class="xs col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
                <div align="start" class="q-mt-sm justify-center bg-transparent">
                    <div class="">
                        <q-carousel
                            swipeable
                            animated
                            transition-prev="slide-right"
                            transition-next="slide-left"
                            :transition-duration="300"
                            v-model="btn_slide_mgames_main"
                            infinite
                            style="height:340px;border:3px solid #00f2a1;"                                                         
                            class="mbrains-general-slide-action-btn item-active bg-dark"
                        >
                          <!-- Non-Fungible Tokens (NFT's) -->
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 1/9 ]</span><br/>                                    
                                        How it works
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="1">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        How it works<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 2/9 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        Unlike 'regular' games, M-Games are 'Algorithmic Aided Games'. This means that a Player's M-Brain acts as a sidekick during gameplay and intelligently performs on/off-chain calculations based on it's configuration.
                                    </p>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="2">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        How it works<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 3/9 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        Players can fully customize and fine-tune their M-Brain according to their preferences, allowing them to have more control over the behaviour of their ingame assets.
                                    </p>
                                </div>
                            </q-carousel-slide>                            

                            <!-- Mechanics 1/2 -->
                            <q-carousel-slide :name="3">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 4/9 ]</span><br/> 
                                        Gameplay & Actions
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="4">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        Gameplay & Actions<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 5/9 ]</span>
                                    </p>
                                    <p class="text-caption">
                                        The gameplay in M-Games can be divided in two different ways, by 'User Controlled Actions' and 'M-Brain Controlled Actions'.
                                    </p>
                                </div>
                            </q-carousel-slide>      
                            <q-carousel-slide :name="5">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        Gameplay & Actions<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 6/9 ]</span>
                                    </p>
                                    <p class="text-caption">
                                        User Controlled Actions refers to any input provided a Player (Haptics, Keyboard and/or Mouse).<br/><br/>
                                        M-Brain Controlled Actions are actions that are automatically handled by a Player's M-Brain.
                                    </p>
                                </div>
                            </q-carousel-slide>    

                            <q-carousel-slide :name="6">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 7/9 ]</span><br/> 
                                        Off-chain vs Local
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="7">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        Off-chain vs Local<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 8/9 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        Base and Ability stats are linked to any M-Brain controlled action. The processing of these actions happens off-chain.<br/><br/>
                                        The higher the Base stats, the more compute power will be available to use. The more Abilities (Algorithms) M-Brains contains, the better and more intelligent it will make use of the available resources.
                                    </p>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="8">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        Off-chain vs Local<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 9/9 ]</span><br/>
                                    </p>                                   
                                    <p class="text-caption">
                                        Meta stats are associated with actions that don't require a lot of computing power, therefore the processing of these actions takes place on a Player's local computer.
                                    </p>
                                </div>
                            </q-carousel-slide>                 

                                                                            
                        </q-carousel>
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMGamesMain()"
                        />
                    </div>
                </div>
            </q-card-section>   
        </q-card-section>   

        <!-- bottom elements begin -->
        <div class="lt-md" style="height:75px;width:100%;"/>
        <!-- bottom elements end -->
    </q-card>
</template>


<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'MAboutMetaGames',
    setup(){
        const state = reactive({
            btn_slide_mgames_main: 0,
        });

        return {
            ... toRefs(state),
            slideBtnMGamesMain: ()=>{
                if(state.btn_slide_mgames_main >= 8)
                    state.btn_slide_mgames_main = 0;
                else
                    state.btn_slide_mgames_main +=1;
            },
        }
    }
}
</script>


<style lang="scss">


</style>