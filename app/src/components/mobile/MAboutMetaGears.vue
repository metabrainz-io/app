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
                            What are M-Gears?
                        </p>
                        <p class="lt-sm text-h4 text-center text-secondary">
                            What are M-Gears?
                        </p>
                        <div class="q-py-md"/>
                        <p class="text-subtitle1 text-center text-white">
                            M-Gears (or Meta-Gears) are ERC-721/1155 based Tokens (NFT's) that integrates into M-Brains to enhance it's stats.                            
                        </p>
                    </div>
                </div>

                <div class="mb-overview-mobile col q-pa-md row flex justify-center">
                    <div align="center" style="width:100%;100%;">
                        <q-card class="my-card my-text q-pa-sm row justify-center bg-dark" style="width: 100%; height:100%;">
                            <q-card-section class="q-px-sm">
                                <div class="column flex-center" style="height:100%;width: 100%;">
                                    <div>
                                        <div class="">
                                            <q-img 
                                                style="width:320px;"
                                                :src="require('@/assets/about/mgears/mgears.png')"/>
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
                            v-model="btn_slide_mgears_main"
                            infinite
                            style="height:300px;border:3px solid #00f2a1;"                            
                            class="mbrains-general-slide-action-btn item-active bg-dark"
                        >
                            <!-- Non-Fungible Tokens (NFT's) -->
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 1/6 ]</span><br/>
                                        Gears and Stats
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="1">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Gears and Stats<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 2/6 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle0">
                                        M-Gears initially contains the algorithms and allows compute resources to be used by your M-Brain.<br/><br/>M-Gear's can either boost your M-Brains Base stats, Meta stats, Abilities, or a mix of all.
                                    </p>
                                </div>
                            </q-carousel-slide>

                            <!-- Mechanics 1/2 -->
                            <q-carousel-slide :name="2">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 3/6 ]</span><br/>
                                        Types of M-Gears
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="3">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Types of M-Gears<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 4/6 ]</span>
                                    </p>
                                    <p class="text-subtitle0">
                                        There will be several main M-Gear categories:<br/><br/>
                                    </p>
                                     <table style="width:auto;">
                                        <tr>
                                            <th style="width:100px;"/>
                                            <th style="width:300px;"/>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">B’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-subtitle0">Bootloaders</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">M’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-subtitle0">Mood Balancers</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">G’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-subtitle0">General Enhancers</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">C’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-subtitle0">Cognitive Specific Enhancers</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">E’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-subtitle0">Energy enhancers</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">X’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-subtitle0">Exp enhancers</span></td>
                                        </tr>
                                        <tr>
                                        </tr>                                                                                                                                                                                                                  
                                    </table>

                                </div>
                            </q-carousel-slide>      

                            <q-carousel-slide :name="4">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 5/6 ]</span><br/>
                                        For Creators
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="5">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        For Creators<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 6/6 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle0">
                                        MetaBrainz IO aims to let anyone create M-Gears using their own custom scripts and algorithms.
                                        After that, creators are free to sell, trade or integrate creations into their own 'Digital Brain'.
                                    </p>
                                </div>
                            </q-carousel-slide>  
                                                                            
                        </q-carousel>
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMGearsMain()"
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
                            v-model="btn_slide_mgears_main"
                            infinite
                            style="height:320px;border:3px solid #00f2a1;"                                                         
                            class="mbrains-general-slide-action-btn item-active bg-dark"
                        >
                            <!-- Non-Fungible Tokens (NFT's) -->
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 1/6 ]</span><br/>
                                        Gears and Stats
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="1">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        Gears and Stats<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 2/6 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        M-Gears initially contains the algorithms and allows compute resources to be used by your M-Brain.<br/><br/>M-Gear's can either boost your M-Brains Base stats, Meta stats, Abilities, or a mix of all.
                                    </p>
                                </div>
                            </q-carousel-slide>

                            <!-- Mechanics 1/2 -->
                            <q-carousel-slide :name="2">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 3/6 ]</span><br/>
                                        Types of M-Gears
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="3">
                                <div class="text-white text-left">
                                    <p class="text-caption text-secondary">
                                        Types of M-Gears<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 4/6 ]</span>
                                    </p>
                                    <p class="text-caption">
                                        There will be several main M-Gear categories:<br/><br/>
                                    </p>
                                     <table style="width:auto;">
                                        <tr>
                                            <th style="width:50px;"/>
                                            <th style="width:300px;"/>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">B’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-caption">Bootloaders</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">M’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-caption">Mood Balancers</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">G’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-caption">General Enhancers</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">C’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-caption">Cognitive Specific Enhancers</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">E’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-caption">Energy enhancers</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">X’s</span></td>
                                            <td style="padding-left:20px;"><span class="text-caption">Exp enhancers</span></td>
                                        </tr>
                                        <tr>
                                        </tr>                                                                                                                                                                                                                  
                                    </table>

                                </div>
                            </q-carousel-slide>      

                            <q-carousel-slide :name="4">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 5/6 ]</span><br/>
                                        For Creators
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="5">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        For Creators<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 6/6 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        MetaBrainz IO aims to let anyone create M-Gears using their own custom scripts and algorithms.
                                        After that, creators are free to sell, trade or integrate creations into their own 'Digital Brain'.
                                    </p>
                                </div>
                            </q-carousel-slide>  
                                                                            
                        </q-carousel>
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMGearsMain()"
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

export default {
    name: 'MAboutMetaGears',
    setup(){
        const state = reactive({
            btn_slide_mgears_main: 0,
        });

        function generalSlideView(view_type){
            state.general_view_btn_active=view_type;
            state.general_slide_view_cur=view_type
            state.general_slide_view_cur=view_type;
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


        return {
            ... toRefs(state),
            overview_hover: ref(false),
            showNextSlide: ()=>{
                let next = state.general_slide_view_cur + 1;
                if(next > 3) next = 1;
                generalSlideView(next);
            },
            showNextFeature: ()=>{
                let next = state.feature_slide_view_cur + 1;
                if(next > 6) next = 1;
                featureSlideView(next);
            },
            generalSlideView,
            featureSlideView,
            metabrain_img_sources,
            slideBtnMGearsMain: ()=>{
                if(state.btn_slide_mgears_main >= 5)
                    state.btn_slide_mgears_main = 0;
                else
                    state.btn_slide_mgears_main +=1;
            },
        }
    }
}
</script>


<style lang="scss">

.mobile-meta-gear-classes{
    color: white;
}

</style>