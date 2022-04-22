<template>

    <!-- CARD BEGIN -->
    <q-card class="md q-pa-none justify-center bg-dark row my-text">
        
        <!-- ROW BEGIN -->
        <div class="q-pa-md q-px-xl bg-dark fit row justify-evenly" style="max-width:1439px;">
            <div class="q-pa-sm">
            
            <q-card class="my-card q-pa-sm bg-dark row my-text" style="width: 420px; height:100%;">

                <q-card-section class="q-px-sm">
                    <div class="" style="">
                        <div class="">
                            <p class="md text-h4 text-left text-secondary">
                                What are M-Brains?
                            </p>

                            <div class="q-py-md"/>
                            <div class="" style="">
                                <q-carousel
                                    v-model="general_slide_view_cur"
                                    class="bg-dark"
                                    swipeable
                                    animated
                                    infinite
                                    :autoplay="10000"
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
                                        <p class="md text-h6 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            M-Brains
                                        </p>
                                        <p class="md text-subtitle1 text-center text-white text-weight-bolder" style="color: #f975ac;">
                                            M-Brains
                                        </p>                                
                                        -->

                                        <p class="q-px-md md text-subtitle0 text-white" style="">
                                            An M-Brain (or Meta-Brain) is your personal and fully customizable 'Digital Brain' that acts as a sidekick in M-Games. Read more about this in the 'M-Games' section.
                                        </p>
                                    </q-carousel-slide>

                                    <q-carousel-slide :name="2">
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            Non-Fungible Tokens (NFT's)
                                        </p>

                                        <p class="q-px-md md text-subtitle0 text-white" style="">
                                            At its core, M-Brains are ERC-721 based Tokens (NFT's) on the blockchain that will reference specialized Algorithms that can be used in games, furthermore, M-brains will contain properties that can be directly translated to off-chain compute resources.
                                        </p>
                                    </q-carousel-slide>

                                    <q-carousel-slide :name="3">
                                        <p class="md text-subtitle1 text-white text-left text-weight-bolder" style="color: #f975ac;">
                                            How it works 1/2
                                        </p>

                                        <p class="q-px-md md text-subtitle0 text-white" style="">
                                            In M-Games, any non-main character or object you own (turrets, drones, or other bots) can be partially controlled by your M-Brain.
                                            You can build, customize and boost your M-Brain according to your preferences.
                                        </p>
                                    </q-carousel-slide>    

                                    <q-carousel-slide :name="4">
                                        <p class="md text-subtitle1 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            How it works 2/2
                                        </p>

                                        <p class="q-px-sm md text-subtitle0 text-white" style="">
                                            By improving and fine-tuning M-Brains, it's possible to implement powerful strategies and gain the upperhand over competitors/enemies in M-Games.
                                            The stats of M-Brains can be improved by playing games (Play To Earn) or by integrating M-Gears.
                                        </p>                                
                                    </q-carousel-slide>   

                                </q-carousel>

                            </div>
                        </div>
                    </div>
                    <div class="md q-py-xl"/>
                </q-card-section>
            </q-card>
            </div>

            <div class="q-pa-sm">
                <q-card class="my-card my-text q-pa-sm row justify-center bg-dark" style="width: 420px; height:100%;">
                    <q-card-section class="q-px-sm">
                        <div class="column flex-center" style="height:100%;width: 420px;">
                            <div>
                                <div class="">
                                    <q-img 
                                        style="width:208px;height:208px;"
                                        :src="require('@/assets/about/mbrains/mbrains.png')"/>
                                </div>                    
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>

        </div>
        <!-- ROW END -->
    </q-card>
    <!-- CARD END -->

    <div class="q-py-xl bg-dark" style="width:100%;"/>

    <!-- CARD BEGIN -->
    <q-card class="md q-pa-none justify-center bg-dark row my-text">
               
        <!-- ROW BEGIN -->
        <div class="q-pa-md q-px-xl bg-dark fit row justify-evenly" style="max-width:1600px;">
            <div class="q-pa-sm">
                <q-card class="my-card my-text q-pa-sm row justify-center bg-dark" style="max-width: 420px; width: 100%; height:500px;">
                    <q-card-section class="q-px-sm">
                        <div class="column flex-center" style="height:100%;max-width: 420px; ">

                            <div
                                align="center"
                                class="bg-transparent"
                                style="width:100%;height:300px;cursor:pointer;"
                                @click="showNextStructureSlide()"
                                @mouseover="overview_hover = true" @mouseleave="overview_hover = false, hideAll()"
                            >
                                <div class="q-py-sm"/>
                                <div class="md">
                                    <img
                                        v-if="structure_slide_view_cur != 0"
                                        v-bind:src="require('@/assets/'+ mbrain_structure_img_sources[structure_slide_view_cur])"
                                        style="width:175px;position:absolute;left:50px;top:75px;"
                                    >                                             
                                    <!--
                                    <img 
                                    src="@/assets/bg/overview_hover_final.png" 
                                    style="max-width:256px;aspect-ratio:1/1;"
                                    >
                                    v-if="overview_hover || structure_slide_view_cur >= 1 && structure_slide_view_cur <= 3" 
                                    <img 
                                    v-else 
                                    src="@/assets/bg/overview_final.png" 
                                    style="max-height:384px;max-width:384px;aspect-ratio:1/1;"
                                    >
                                    -->
                                </div>
                            </div>


                            <!-- small menu overview -->
                            <div class="md">
                                <!-- profile -->
                                <div v-if="structure_view_btn_active == 1"
                                    class="mb-md-menu-view mb-md-profile-view text-caption"
                                    style="border-top: 3px solid #00f2a1;border-bottom: 3px solid #f9579a;border-radius:0px;background-image: linear-gradient(to top, rgba(249,87,154,0.1), rgba(0,20,20,1)) !important;"
                                    @mouseover="overview_active_profile=true, overview_hover=true" @mouseleave="overview_active_profile=false, overview_hover=false"
                                    >
                                        User ID<br/>
                                        Crypto Addr<br/>
                                        Username<br/>
                                        Avatar Image<br/>
                                        Credits<br/>
                                        Level<br/>
                                </div>                             
                                <!-- assets -->
                                <div v-if="structure_view_btn_active == 2"
                                class="mb-md-menu-view mb-md-assets-view text-caption"
                                style="border-top: 3px solid #00f2a1;border-bottom: 3px solid #f9579a;border-radius:0px;background-image: linear-gradient(to top, rgba(249,87,154,0.1), rgba(0,20,20,1)) !important;"
                                @mouseover="overview_active_assets=true, overview_hover=true" @mouseleave="overview_active_assets=false, overview_hover=false"
                                >
                                File formats:<br/>
                                &nbsp;-&nbsp;&nbsp;BMP&nbsp;&nbsp;/&nbsp;&nbsp;GIF<br/>
                                &nbsp;-&nbsp;&nbsp;JPG&nbsp;&nbsp;/&nbsp;&nbsp;PNG<br/>
                                &nbsp;-&nbsp;&nbsp;FBX&nbsp;&nbsp;/&nbsp;&nbsp;DAE<br/>
                                &nbsp;-&nbsp;&nbsp;DXF&nbsp;&nbsp;/&nbsp;&nbsp;OBJ<br/>
                                &nbsp;-&nbsp;&nbsp;...<br/>
                                </div>     
                                <!-- stats -->
                                <div v-if="structure_view_btn_active == 3"
                                class="mb-md-menu-view mb-md-stats-view text-caption"
                                style="border-top: 3px solid #00f2a1;border-bottom: 3px solid #f9579a;border-radius:0px;background-image: linear-gradient(to top, rgba(249,87,154,0.1), rgba(0,20,20,1)) !important;"
                                @mouseover="overview_active_stats=true, overview_hover=true" @mouseleave="overview_active_stats=false, overview_hover=false"
                                >
                                Base<br/>
                                Ability<br/>
                                Meta<br/>
                                </div>
                            </div>

                            <!-- sm/md carousel -->
                            <div class="md">
                                <q-carousel
                                    animated
                                    transition-prev="scale"
                                    transition-next="scale"
                                    v-model="structure_slide_view_cur"
                                    class="text-white bg-transparent"
                                    style="width:400px;height:250px;background-color: #01000b;bottom:45px;"
                                    @click="structureSlideView(structure_slide_view_cur)"
                                >
                                    <q-carousel-slide :name="1">
                                        <div class="text-white">
                                            <p class="text-subtitle0 text-secondary">
                                                Profile
                                            </p>
                                            <p class="text-caption">
                                                The M-Brains Profile section contains general Player data.
                                            </p>
                                        </div>
                                    </q-carousel-slide>
                                    <q-carousel-slide :name="2">
                                        <div class="text-white">
                                            <p class="text-subtitle0 text-secondary">
                                                Assets
                                            </p>
                                            <p class="text-caption">
                                                The M-Brain Assets section will directly reference externally collected NFTs that are linked to a Player's crypto address.
                                                MetaBrainz IO aims to support as many file formats as possible.
                                            </p>
                                        </div>
                                    </q-carousel-slide>
                                    <q-carousel-slide :name="3">
                                        <div class="text-white">
                                            <p class="text-subtitle0 text-secondary">
                                                Stats
                                            </p>
                                            <p class="text-caption">
                                                The M-Brain Stats section contains all stats a Player has build up through playing games and/or integrating Gears.
                                            </p>
                                        </div>
                                    </q-carousel-slide>                        
                                </q-carousel>
                            </div>

                        </div>
                    </q-card-section>
                </q-card>
            </div>

            <div class="q-pa-sm">
            <q-card class="my-card q-pa-sm bg-dark row my-text" style="max-width: 420px; width: 100%; height:100%;">
                <q-card-section class="q-px-sm">
                    <div class="" style="">
                        <div class="">
                            <p class="md text-h4 text-left text-secondary">
                                M-Brains Structure
                            </p>                                                
                            <div class="" style="">

                                <div class="q-py-md"/>
                                <p class="md text-subtitle1 text-left" style="color: white">
                                    M-Brains consists of 3 main parts that contain specific Player data.
                                    These parts are Profile, Assets and Stats.
                                </p>     
                                <div class="q-py-md"/>

                                <!-- btn default -->
                                <div align="center">
                                    <div
                                        v-if="structure_view_btn_active != 1 && structure_view_btn_active != null || structure_view_btn_active == null"
                                        class="general-action-btn"
                                        @click="structureSlideView(1)"
                                    >
                                        <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                            <div class="text-subtitle0">
                                                PROFILE
                                            </div>
                                        </div>
                                    </div>
                                    <!-- btn active -->
                                    <div
                                        v-else
                                        class="general-action-btn item-active"
                                        @click="structureSlideView(null)"
                                    >
                                        <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                            <div class="text-subtitle0">
                                                PROFILE
                                            </div>
                                        </div>
                                    </div>

                                    <div class="q-py-sm"/>
                                    <div
                                        v-if="structure_view_btn_active != 2 && structure_view_btn_active != null || structure_view_btn_active == null"
                                        class="general-action-btn"
                                        @click="structureSlideView(2)"
                                    >
                                        <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                            <div class="text-subtitle0">
                                                ASSETS
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        v-else
                                        class="general-action-btn item-active"
                                        @click="structureSlideView(null)"
                                    >
                                        <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                            <div class="text-subtitle0">
                                                ASSETS
                                            </div>
                                        </div>
                                    </div>                                
                                    <div class="q-py-sm"/>
                                    <div
                                        v-if="structure_view_btn_active != 3 && structure_view_btn_active != null || structure_view_btn_active == null"
                                        class="general-action-btn"
                                        @click="structureSlideView(3)"
                                    >
                                        <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                            <div class="text-subtitle0">
                                                STATS
                                            </div>
                                        </div>
                                    </div>         
                                    <div
                                        v-else
                                        class="general-action-btn item-active"
                                        @click="structureSlideView(null)"
                                    >
                                        <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                            <div class="text-subtitle0">
                                                STATS
                                            </div>
                                        </div>
                                    </div>                                                             
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md q-py-xl"/>
                </q-card-section>
            </q-card>
            </div>


        </div>
        <!-- ROW END -->
    </q-card>
    <!-- CARD END -->

    <div class="q-py-xl bg-dark" style="width:100%;"/>


    <!-- CARD BEGIN -->
    <q-card class="md q-pa-none justify-center bg-dark row my-text">
               
        <!-- ROW BEGIN -->
        <div class="q-pa-md q-px-xl bg-dark fit row justify-evenly" style="max-width:1439px;">
            <div class="q-pa-sm">
            <q-card class="my-card q-pa-sm bg-dark row my-text" style="width: 420px; height:100%;">
                <q-card-section class="q-px-sm">
                    <div class="" style="">
                        <div class="">
                            <p class="md text-h4 text-left text-secondary">
                                Key Features
                            </p>                                                
                            <div class="" style="">

                                <div class="q-py-md"/>
                                <p class="md text-subtitle1 text-left" style="color: white">
                                    By design, M-Brains unlocks a whole range of features for Players:
                                </p>     
                                <div class="q-py-md"/>

                                <div class="row justify-center">

                                    <div class="row q-pa-md">
                                        <!-- btn default -->
                                        <div
                                            v-if="feature_view_btn_active != 1 && feature_view_btn_active != null || feature_view_btn_active == null"
                                            class="mb-md-feature-action-btn"
                                            @click="featureSlideView(1)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    INTEGRATABLE
                                                </div>
                                            </div>
                                        </div>
                                        <!-- btn active -->
                                        <div
                                            v-else
                                            class="mb-md-feature-action-btn item-active"
                                            @click="featureSlideView(null)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    INTEGRATABLE
                                                </div>
                                            </div>
                                        </div>
                                        <div class="q-px-md"/>
                                        <div
                                            v-if="feature_view_btn_active != 2 && feature_view_btn_active != null || feature_view_btn_active == null"
                                            class="mb-md-feature-action-btn"
                                            @click="featureSlideView(2)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    PERSISTENT
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            v-else
                                            class="mb-md-feature-action-btn item-active"
                                            @click="featureSlideView(null)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    PERSISTENT
                                                </div>
                                            </div>
                                        </div>                              
                                    </div>                              

                                 

                                    <div class="row q-pa-md">
                                        <div
                                            v-if="feature_view_btn_active != 3 && feature_view_btn_active != null || feature_view_btn_active == null"
                                            class="mb-md-feature-action-btn"
                                            @click="featureSlideView(3)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    PORTABLE
                                                </div>
                                            </div>
                                        </div>         
                                        <div
                                            v-else
                                            class="mb-md-feature-action-btn item-active"
                                            @click="featureSlideView(null)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    PORTABLE
                                                </div>
                                            </div>
                                        </div>
                                        <div class="q-px-md"/>
                                        <!-- btn default -->
                                        <div
                                            v-if="feature_view_btn_active != 4 && feature_view_btn_active != null || feature_view_btn_active == null"
                                            class="mb-md-feature-action-btn"
                                            @click="featureSlideView(4)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    OWNERSHIP
                                                </div>
                                            </div>
                                        </div>
                                        <!-- btn active -->
                                        <div
                                            v-else
                                            class="mb-md-feature-action-btn item-active"
                                            @click="featureSlideView(null)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    OWNERSHIP
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row q-pa-md">
                                        <div
                                            v-if="feature_view_btn_active != 5 && feature_view_btn_active != null || feature_view_btn_active == null"
                                            class="mb-md-feature-action-btn"
                                            @click="featureSlideView(5)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    TRADEABLE
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            v-else
                                            class="mb-md-feature-action-btn item-active"
                                            @click="featureSlideView(null)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    TRADEABLE
                                                </div>
                                            </div>
                                        </div>                                
                                        <div class="q-px-md"/>
                                        <div
                                            v-if="feature_view_btn_active != 6 && feature_view_btn_active != null || feature_slide_view_cur == null"
                                            class="mb-md-feature-action-btn"
                                            @click="featureSlideView(6)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    META
                                                </div>
                                            </div>
                                        </div>         
                                        <div
                                            v-else
                                            class="mb-md-feature-action-btn item-active"
                                            @click="featureSlideView(null)"
                                        >
                                            <div class="row flex justify-center items-center" style="width:100%;height:100%;">
                                                <div class="text-subtitle0">
                                                    META
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md q-py-xl"/>
                </q-card-section>
            </q-card>
            </div>

            <div class="q-pa-sm">
                <q-card class="my-card q-pa-sm bg-dark row my-text" style="width: 420px; height:100%;">
                    <q-card-section class="q-px-sm">
                        <div class="column flex-center" style="height:100%;width: 420px;">

                        <div
                            style="cursor:pointer;"
                            @click="showNextFeatureSlide()"
                        >
                            <div class="q-py-sm"/>
                            <div class="md">
                                <img
                                    src="@/assets/about/mbrains/features.png"
                                    style="width:192px;"                                    
                                >                        
                                <!--
                                    v-if="feature_view_btn_active == 6"
                                <img
                                    v-else
                                    v-bind:src="require('@/assets/'+ metabrain_img_sources[feature_img_view_cur])"
                                    style="width:128px;"
                                >
                                -->
                            </div>
                        </div>

                        <div class="q-py-sm"/>
                        <!-- gt-md carousel -->
                        <div class="md ">
                            <q-carousel
                                animated
                                transition-prev="scale"
                                transition-next="scale"
                                v-model="feature_slide_view_cur"
                                class="text-white bg-transparent"
                                style="width:420px;height:225px;background-color: #01000b;bottom:45px;"
                                @click="structureSlideView(feature_slide_view_cur)"
                            >
                                <q-carousel-slide :name="1">
                                    <div class="text-white">
                                        <p class="text-subtitle1 text-secondary">
                                            Integratable
                                        </p>
                                        <p class="text-caption">
                                            The data of M-Brains will be integratable into games. This includes Player's Profile, Assets and Stats data.
                                        </p>
                                    </div>
                                </q-carousel-slide>
                                <q-carousel-slide :name="2">
                                    <div class="text-white">
                                        <p class="text-subtitle1 text-secondary">
                                            Persistent
                                        </p>
                                        <p class="text-caption">
                                            The stats you build up by playing games or by integrating M-Gears will persist, even if a game is over.
                                        </p>
                                    </div>
                                </q-carousel-slide>
                                <q-carousel-slide :name="3">
                                    <div class="text-white">
                                        <p class="text-subtitle1 text-secondary">
                                            Portable
                                        </p>
                                        <p class="text-caption">
                                            M-Brains will be portable to every game that implements (parts) of the Metabrainz IO Library.
                                        </p>
                                    </div>
                                </q-carousel-slide>  
                                <q-carousel-slide :name="4">
                                    <div class="text-white">
                                        <p class="text-subtitle1 text-secondary">
                                            Ownership
                                        </p>
                                        <p class="text-caption">
                                            M-Brains are mintable NFT's which can be owned and controlled by it's holder.
                                        </p>
                                    </div>
                                </q-carousel-slide>  
                                <q-carousel-slide :name="5">
                                    <div class="text-white">
                                        <p class="text-subtitle1 text-secondary">
                                            Tradeable
                                        </p>
                                        <p class="text-caption">
                                            Since M-Brains are ERC-721 Tokens they can also be traded and sold, directly or via marketplaces.
                                        </p>
                                    </div>
                                </q-carousel-slide>  
                                <q-carousel-slide :name="6">
                                    <div class="text-white">
                                        <p class="text-subtitle1 text-secondary">
                                            Meta
                                        </p>
                                        <p class="text-caption">
                                            During the game initialization process, stats of M-Brains will be mapped to so called 'M-Brain Controlled Actions'. These actions are handled by your M-Brain and can be triggered based on specific game events.
                                        </p>
                                    </div>
                                </q-carousel-slide>                                                                                                
                            </q-carousel>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
            </div>

        </div>
        <!-- ROW END -->

        <!-- bottom elements begin -->
        <div class="gt-md" style="height:100px;width:100%;"/>
        <div class="md md" style="height:75px;width:100%;"/>
        <!-- bottom elements end -->
    </q-card>
    <!-- CARD END -->


  
    
</template>


<script>
import { ref, reactive, toRefs } from 'vue'
const metabrain_img_sources = [
    'style/metabrain_sliced/metabrain_sync_trans_0.png',
    'style/metabrain_sliced/metabrain_sync_trans_1.png',
    'style/metabrain_sliced/metabrain_sync_trans_2.png',
    'style/metabrain_sliced/metabrain_sync_trans_3.png',
    'style/metabrain_sliced/metabrain_sync_trans_4.png',
    'style/metabrain_sliced/metabrain_sync_trans_5.png',
    'style/metabrain_sliced/metabrain_sync_trans_6.png',
    'style/metabrain_sliced/metabrain_sync_trans_7.png',
    'style/metabrain_sliced/metabrain_sync_trans_8.png',
    'style/metabrain_sliced/metabrain_sync_trans_9.png',
    'style/metabrain_sliced/metabrain_sync_trans_10.png',
    'style/metabrain_sliced/metabrain_sync_trans_11.png',
]

const mbrain_structure_img_sources = [
    '',
    'about/mbrains/structure_profile.png',
    'about/mbrains/structure_assets.png',
    'about/mbrains/structure_stats.png',
]

export default {
    name: 'AboutMetaBrainsMD',
    setup(){
        const state = reactive({
            general_slide_view_cur: 1,

            structure_slide_view_cur: 1,
            structure_view_btn_active: 1,

            feature_img_view_cur: 0,
            feature_slide_view_cur: 0,
            feature_view_btn_active: 0,

            overview_active_profile: false,
            overview_active_assets: false,
            overview_active_stats: false,
        });

        function structureSlideView(view_type){
            state.structure_view_btn_active=view_type;
            state.structure_slide_view_cur=view_type
            state.structure_slide_view_cur=view_type;
        }

        function featureSlideView(view_type){
            state.feature_view_btn_active=view_type;
            state.feature_slide_view_cur=view_type
            state.feature_slide_view_cur=view_type;
            
            if(state.feature_img_view_cur < 4) state.feature_img_view_cur += 2;
            else{
                if(state.feature_img_view_cur >= 4) state.feature_img_view_cur += 1;
                if(state.feature_img_view_cur > 11) state.feature_img_view_cur -=10;
            } 
        }

        // function structureSlideView(view_type){
        //     switch(view_type){
        //         case 0:
        //             if(state.btn_view_profile == 0) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;
        //         case 1:
        //             if(state.btn_view_profile == 1) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;
        //         case 2:
        //             if(state.btn_view_profile == 2) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;
        //         default:
        //             break;
        
        //     }
        // }

        // function featureSlideView(view_type){
        //     switch(view_type){
        //         case 0:
        //             if(state.btn_view_profile == 0) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;
        //         case 1:
        //             if(state.btn_view_profile == 1) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;
        //         case 2:
        //             if(state.btn_view_profile == 2) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;
        //         case 3:
        //             if(state.btn_view_profile == 3) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;
        //         case 4:
        //             if(state.btn_view_profile == 4) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;
        //         case 5:
        //             if(state.btn_view_profile == 5) state.btn_view_profile=1;
        //             else state.btn_view_profile=0;
        //             break;                        
        //         default:
        //             break;

        //     }
        // }

        return {
            ... toRefs(state),
            overview_hover: ref(false),

            showNextStructureSlide: ()=>{
                let next = state.structure_slide_view_cur + 1;
                if(next > 3) next = 1;
                structureSlideView(next);
            },
            showNextFeatureSlide: ()=>{
                let next = state.feature_slide_view_cur + 1;
                if(next > 6) next = 1;
                featureSlideView(next);
            },
            structureSlideView,
            featureSlideView,
            metabrain_img_sources,
            mbrain_structure_img_sources
        }
    }
}
</script>


<style lang="scss">
.general-action-btn {
    max-width:320px;
    height:50px;
    cursor:pointer;
    border: 2px solid #100e2f;
    color: white;

    &:hover{
        border: 3px solid #00f2a1;
        background-color: #100e2f;
        font-weight: bold;
        color:white;
    }

    &.item-active{
        border: 3px solid #00f2a1;
        color: #00f2a1;
    }
}

.mb-md-feature-action-btn {
    width:160px;
    height:50px;
    cursor:pointer;
    border: 2px solid #100e2f;
    color: white;

    &:hover{
        border: 3px solid #00f2a1;
        background-color: #100e2f;
        font-weight: bold;
        color:white;
    }

    &.item-active{
        border: 3px solid #00f2a1;
        color: #00f2a1;
    }
}

.mb-md-menu-view{
    color: white;
    padding: 5px;
    position:absolute;
    border-radius: 5px;
    border-top:3px solid #f9579a;
    border-bottom:3px solid #f9579a;
    background-image: linear-gradient(to top, rgba(0,20,20,0), rgba(0,20,20,1)) !important;

    &.mb-md-profile-view{
        width:125px;
        top:100px;
        right:45px;

    }

    &.mb-md-assets-view{
        width:125px;
        top:100px;
        right:45px;
    }

    &.mb-md-stats-view{
        width:125px;
        top:125px;
        right:45px;
    }
}

</style>