<template>
   <!-- CARD BEGIN -->
    <q-card class="gt-sm q-pa-none justify-center bg-dark row my-text">
        
        <!-- ROW BEGIN -->
        <div class="q-pa-md q-px-xl bg-dark fit row justify-between" style="max-width:1600px;">
            <div class="q-pa-sm">
            <q-card class="my-card q-pa-sm bg-dark row my-text" style="min-width: 640px; max-width: 640px; width: 100%; height:100%;">
                <q-card-section class="">
                    <div class="" style="">
                        <div class="">
                            <p class="q-px-sm gt-sm text-h3 text-left text-secondary">
                                What are M-Gears?
                            </p>
                            <div class="q-py-md"/>

                            <div class="column flex-center" style="">
                                <q-carousel
                                    v-model="slide"
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
                                    style="width:580px;height:480px;"
                                >
                                    <q-carousel-slide :name="1">
                                        <!--
                                        <p class="gt-sm text-h6 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            M-Gears
                                        </p>
                                        <p class="lt-md text-subtitle1 text-center text-white text-weight-bolder" style="color: #f975ac;">
                                            M-Gears
                                        </p>                                
                                        -->
                                        
                                        <p class="q-px-md xl text-subtitle1 text-white" style="">
                                            M-Gears (or Meta-Gears) are ERC-721/1155 based Tokens (NFT's) that integrates into M-Brains to enhance it's stats.
                                        </p>

                                        <p class="q-px-sm lt-xl  text-subtitle0 text-white" style="">
                                            M-Gears (or Meta-Gears) are ERC-721/1155 based Tokens (NFT's) that integrates into M-Brains to enhance it's stats.
                                        </p>
                                    </q-carousel-slide>

                                    <q-carousel-slide :name="2">
                                        <p class="gt-sm text-h6 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            Gears and Stats
                                        </p>
                                        <p class="lt-md text-subtitle1 text-center text-white text-weight-bolder" style="color: #f975ac;">
                                            Gears and Stats
                                        </p>

                                        <p class="q-px-md xl  text-subtitle1 text-white" style="">
                                           M-Gears initially contains the algorithms and allows compute resources to be used by your M-Brain.<br/><br/>M-Gear's can either boost your M-Brains Base stats, Meta stats, Abilities, or a mix of all.
                                        </p>
                                        <p class="q-px-sm lt-xl  text-subtitle0 text-white" style="">
                                           M-Gears initially contains the algorithms and allows compute resources to be used by your M-Brain.<br/><br/>M-Gear's can either boost your M-Brains Base stats, Meta stats, Abilities, or a mix of all.
                                        </p>                                               
                                    </q-carousel-slide>

                                    <q-carousel-slide :name="3">
                                        <p class="xl text-h6 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            Types of M-Gears
                                        </p>
                                        <p class="lt-xl text-subtitle1 text-white text-center text-weight-bolder" style="color: #f975ac;">
                                            Types of M-Gears
                                        </p>

                                        <!-- XL -->
                                        <p class="xl q-px-md text-subtitle1 text-white">
                                            There will be several main M-Gear categories:<br/><br/>
                                        </p>
                                        <table class="xl q-px-md" style="width:auto;">
                                            <tr>
                                                <th style="width:75px;"/>
                                                <th style="width:auto;"/>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle1" style="color: white;">B’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle1" style="color: white;">Bootloaders</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle1" style="color: white;">M’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle1" style="color: white;">Mood Balancers</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle1" style="color: white;">G’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle1" style="color: white;">General Enhancers</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle1" style="color: white;">C’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle1" style="color: white;">Cognitive Specific Enhancers</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle1" style="color: white;">E’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle1" style="color: white;">Energy enhancer</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle1" style="color: white;">X’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle1" style="color: white;">Exp enhancers</span></td>
                                            </tr>
                                            <tr>
                                            </tr>                                                                                                                                                                                                                  
                                        </table>

                                        <!-- LT-XL -->
                                        <p class="lt-xl q-px-md text-subtitle0 text-white">
                                            There will be several main M-Gear categories:<br/><br/>                                            
                                        </p>
                                        <table class="lt-xl q-px-md" style="width:auto;">
                                            <tr>
                                                <th style="width:75px;"/>
                                                <th style="width:auto;"/>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">B’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle0" style="color: white;">Bootloaders</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">M’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle0" style="color: white;">Mood Balancers</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">G’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle0" style="color: white;">General Enhancers</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">C’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle0" style="color: white;">Cognitive Specific Enhancers</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">E’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle0" style="color: white;">Energy enhancer</span></td>
                                            </tr>
                                            <tr>
                                                <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">X’s</span></td>
                                                <td style="padding-left:0px;"><span class="text-subtitle0" style="color: white;">Exp enhancers</span></td>
                                            </tr>
                                            <tr>
                                            </tr>                                                                                                                                                                                                                  
                                        </table>

                                    </q-carousel-slide>    

                                    <q-carousel-slide :name="4">
                                        <p class="gt-sm text-h6 text-left text-white text-weight-bolder" style="color: #f975ac;">
                                            For Creators
                                        </p>
                                        <p class="lt-md text-subtitle1 text-center text-white text-weight-bolder" style="color: #f975ac;">
                                            For Creators
                                        </p>

                                        <p class="q-px-md xl text-subtitle1 text-white" style="">
                                            MetaBrainz IO aims to let anyone create M-Gears using their own custom scripts and algorithms.
                                            After that, creators are free to sell, trade or integrate creations into their own 'Digital Brain'.
                                        </p>
                                        <p class="q-px-sm lt-xl text-subtitle0 text-white" style="">
                                            MetaBrainz IO aims to let anyone create M-Gears using their own custom scripts and algorithms.
                                            After that, creators are free to sell, trade or integrate creations into their own 'Digital Brain'.                                      
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
                <q-card class="my-card my-text q-pa-sm row justify-center bg-dark" style="min-width: 640px; max-width: 640px; width: 100%; height:100%;">
                    <q-card-section class="q-px-sm">
                        <div class="column flex-center" style="height:100%;min-width: 640px; max-width: 640px; ">
                            <div>
                                <div class="gt-md">
                                    <q-img 
                                        style="width:540px;"
                                        :src="require('@/assets/about/mgears/mgears.png')"/>
                                </div>
                                <div class="lt-lg">
                                    <q-img 
                                        style="width:360px;"
                                        :src="require('@/assets/about/mgears/mgears.png')"/>
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
    name: 'AboutMetaGearsLG',
    setup(){
       
        return {
            slide: ref(1)
        }
    }
}
</script>


<style lang="scss">


.meta-gear-classes{
    &:hover{
        cursor: default;
        color:#00f2a1;
        font-weight: bold;
        padding-left:15px;
    }
}

</style>