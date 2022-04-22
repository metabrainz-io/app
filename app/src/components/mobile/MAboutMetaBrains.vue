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
                            What are M-Brains?
                        </p>
                        <p class="lt-sm text-h5 text-center text-secondary">
                            What are M-Brains?
                        </p>
                        <div class="q-py-md"/>
                        <p class="text-subtitle1 text-center text-white">
                            An M-Brain (or Meta-Brain) is your personal and fully customizable 'Digital Brain' that acts as a sidekick in M-Games. Read more about this in the 'M-Games' section.
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
                                                style="width:208px;height:208px;"
                                                :src="require('@/assets/about/mbrains/mbrains.png')"/>
                                        </div>
                                        <div class="xs">
                                            <q-img 
                                                style="width:160px;height:160px;"
                                                :src="require('@/assets/about/mbrains/mbrains.png')"/>
                                        </div>                                                          
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>     
            </div>

            <!-- SMALL -->
            <q-card-section class="sm col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
                <div align="start" class="q-mt-sm justify-center bg-transparent">
                    <div class="">
                        <q-carousel
                            swipeable
                            animated
                            transition-prev="slide-right"
                            transition-next="slide-left"
                            :transition-duration="300"
                            v-model="btn_slide_mbrains_main"
                            infinite
                            class="mbrains-general-slide-action-btn item-active bg-dark"
                            style="height:255px;border:3px solid #00f2a1;"
                        >
                            <!-- Non-Fungible Tokens  -->
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 1/5 ]</span><br/>
                                        Non-Fungible Tokens 
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="1">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Non-Fungible Tokens <span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 2/5 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle0">
                                        At its core, M-Brains are ERC-721 based Tokens (NFT's) on the blockchain that will reference specialized Algorithms that can be used in games, furthermore, M-brains will contain properties that can be directly translated to off-chain compute resources.
                                    </p>
                                </div>
                            </q-carousel-slide>

                            <!-- How it works 1/2 -->
                            <q-carousel-slide :name="2">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 3/5 ]</span><br/>
                                        How it works 
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="3">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        How it works<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 4/5 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle0">
                                        In M-Games, any non-main character or object you own (turrets, drones, or other bots) can be partially controlled by your M-Brain.
                                        You can build, customize and boost your M-Brain according to your preferences.
                                    </p>
                                </div>
                            </q-carousel-slide>      
                            <q-carousel-slide :name="4">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        How it works<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 5/5 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle0">
                                        By improving and fine-tuning M-Brains, it's possible to implement powerful strategies and gain the upperhand over competitors/enemies in M-Games.
                                        The stats of M-Brains can be improved by playing games (Play To Earn) or by integrating M-Gears.
                                    </p>
                                </div>
                            </q-carousel-slide>                                                      
                        </q-carousel>
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMBrainsMain()"
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
                            v-model="btn_slide_mbrains_main"
                            infinite
                            style="height:320px;border:3px solid #00f2a1;"
                            class="mbrains-general-slide-action-btn item-active"
                        >
                            <!-- Non-Fungible Tokens  -->
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 1/5 ]</span><br/>
                                        Non-Fungible Tokens 
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="1">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        Non-Fungible Tokens <span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 2/5 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        At its core, M-Brains are ERC-721 based Tokens (NFT's) on the blockchain that will reference specialized Algorithms that can be used in games, furthermore, M-brains will contain properties that can be directly translated to off-chain compute resources.
                                    </p>
                                </div>
                            </q-carousel-slide>

                            <!-- How it works 1/2 -->
                            <q-carousel-slide :name="2">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 3/5 ]</span><br/>
                                        How it works
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="3">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        How it works<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 4/5 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        In M-Games, any non-main character or object you own (turrets, drones, or other bots) can be partially controlled by your M-Brain.
                                        You can build, customize and boost your M-Brain according to your preferences.
                                    </p>
                                </div>
                            </q-carousel-slide>      
                            <q-carousel-slide :name="4">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        How it works<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 5/5 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        By improving and fine-tuning M-Brains, it's possible to implement powerful strategies and gain the upperhand over competitors/enemies in M-Games.
                                        The stats of M-Brains can be improved by playing games (Play To Earn) or by integrating M-Gears.
                                    </p>
                                </div>
                            </q-carousel-slide>                                                      
                        </q-carousel>
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMBrainsMain()"
                        />
                    </div>
                </div>
            </q-card-section>            


            <div class="q-py-xl" />


            <!-- STRUCTURE -->
            <div class="q-mt-sm"><!-- style="">-->
                <div class="">
                    <div>
                        <p class="gt-xs text-h4 text-center text-secondary">
                            Structure
                        </p>
                        <p class="lt-sm text-h4 text-center text-secondary">
                            Structure
                        </p>
                        <div class="q-py-md"/>
                        <p class="text-subtitle1 text-center text-white">
                            M-Brains consists of 3 main parts that contain specific Player data.
                            These parts are Profile, Assets and Stats.
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
                                                :src="require('@/assets/about/mbrains/structure.png')"/>
                                        </div>                    
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>     
            </div>

            <!-- SMALL -->
            <q-card-section class="sm col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
                <div align="start" class="q-mt-sm justify-center bg-transparent">
                    <div class="">
                        <q-carousel
                            swipeable
                            animated
                            transition-prev="slide-right"
                            transition-next="slide-left"
                            :transition-duration="300"
                            v-model="btn_slide_mbrains_structure"
                            infinite
                            style="height:300px;border:3px solid #00f2a1;"
                            class="mbrains-general-slide-action-btn item-active bg-dark"
                        >
                            <!-- PROFILE -->
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 1/6 ]</span><br/>
                                        Profile
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="1">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Profile<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 2/6 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle0">
                                        The M-Brains Profile section contains general Player data:
                                    </p>
                                    <table style="width:auto;">
                                        <tr>
                                            <th style="width:auto;"/>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">User ID&nbsp; / &nbsp;Crypto Address</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">Username&nbsp; / &nbsp;Avatar Image</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">Credits&nbsp; / &nbsp;Level</span></td>
                                        </tr>
                                    </table>                                    
                                </div>
                            </q-carousel-slide>

                            <!-- ASSETS -->
                            <q-carousel-slide :name="2">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 3/6 ]</span><br/>
                                        Assets
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="3">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Assets<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 4/6 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle0">
                                        The M-Brain Assets section will directly reference externally collected NFTs that are linked to a Player's crypto address.
                                        MetaBrainz IO aims to produce M-Games that supports as many common file formats as possible.<br/><br/>
                                        Common file formats:
                                    </p>
                                    <table style="width:auto;">
                                        <tr>
                                            <th style="width:150px;"/>
                                            <th style="width:auto;"/>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">2D formats</span></td>
                                            <td><span class="text-subtitle0">BMP, GIF, JPG, PNG, TIFF</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">3D formats</span></td>
                                            <td><span class="text-subtitle0">FBX, DAE, DXF, OBJ</span></td>
                                        </tr>
                                    </table>
                                </div>
                            </q-carousel-slide>

                            <!-- STATS -->
                            <q-carousel-slide :name="4">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 5/6 ]</span><br/>
                                        Stats
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="5">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Stats<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 6/6 ]</span>
                                    </p>                                   
                                    <p class="text-subtitle0">
                                        The M-Brain Stats section contains all stats a Player has build up through playing games and/or integrating Gears:
                                    </p>
                                    <table style="width:auto;">
                                        <tr>
                                            <th style="width:100px;"/>
                                            <th style="width:auto;"/>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">BASE</span></td>
                                            <td><span class="text-subtitle0">Stats that are translatable to compute resources (CPU / GPU / RAM)</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">ABILITY</span></td>
                                            <td><span class="text-subtitle0">M-Brains integrated algoritms that can be mapped to ingame abilities to off-load heavy duty calculations</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-subtitle0" style="color: white;">META</span></td>
                                            <td><span class="text-subtitle0">Stat Points that can be used to boost certain skills</span></td>
                                        </tr>                                                                                
                                    </table>
                                </div>
                            </q-carousel-slide>

                        </q-carousel>
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMBrainsStructure()"
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
                            v-model="btn_slide_mbrains_structure"
                            infinite
                            style="height:300px;border:3px solid #00f2a1;"
                            class="mbrains-general-slide-action-btn item-active"
                        >
                            <!-- PROFILE -->
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h6 text-white text-center">
                                        <span class="text-caption text-secondary">[ 1/6 ]</span><br/>
                                        Profile
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="1">
                                <div class="text-white">
                                    <p class="text-caption text-secondary">
                                        Profile<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 2/6 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        The M-Brains Profile section contains general Player data:
                                    </p>
                                    <table style="width:auto;">
                                        <tr>
                                            <th style="width:auto;"/>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">User ID&nbsp; / &nbsp;Crypto Address</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">Username&nbsp; / &nbsp;Avatar Image</span></td>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">Credits&nbsp; / &nbsp;Level</span></td>
                                        </tr>
                                    </table>                                               
                                </div>
                            </q-carousel-slide>

                           <!-- ASSETS -->
                            <q-carousel-slide :name="2">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 3/6 ]</span><br/>
                                        Assets
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="3">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Assets<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 4/6 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        The M-Brain Assets section will directly reference externally collected NFTs that are linked to a Player's crypto address.
                                        MetaBrainz IO aims to support as many file formats as possible.<br/><br/>
                                        Common file formats:
                                    </p>
                                    <table style="width:auto;">
                                        <tr>
                                            <th style="width:auto;"/>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">2D formats</span></td>
                                        </tr>
                                        <q-separator color="accent"/>
                                        <tr>
                                            <td style="padding-left:20px;"><span class="text-caption">BMP, GIF, JPG, PNG, TIFF</span></td>
                                        </tr>
                                        <div class="q-py-sm"/>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">3D formats</span></td>
                                        </tr>
                                        <q-separator color="accent"/>
                                        <tr>
                                            <td style="padding-left:20px;"><span class="text-caption">FBX, DAE, DXF, OBJ</span></td>
                                        </tr>
                                    </table>
                                </div>
                                <!-- extend carousel scroll -->
                                <div class="q-py-xl"/>                                
                            </q-carousel-slide>

                            <!-- STATS -->
                            <q-carousel-slide :name="4">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-h5 text-white text-center">
                                        <span class="text-caption text-secondary">[ 5/6 ]</span><br/>
                                        Stats
                                    <!--<q-icon name="touch_app" size="0.75em"/>-->
                                    <!--<img src="@/assets/stats/avtr_stats.gif" style="height:100%;"/>-->
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide :name="5">
                                <div class="text-white">
                                    <p class="text-subtitle1 text-secondary">
                                        Stats<span class="q-px-md text-caption text-secondary">&nbsp;&nbsp;[ 6/6 ]</span>
                                    </p>                                   
                                    <p class="text-caption">
                                        The M-Brain Stats section contains all stats a Player has build up through playing games and/or integrating Gears:
                                    </p>
                                    <table style="width:auto;">
                                        <tr>
                                            <th style="width:auto;"/>
                                        </tr>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">BASE</span></td>
                                        </tr>
                                        <q-separator color="accent"/>
                                        <tr>
                                            <td style="padding-left:20px;"><span class="text-caption">Stats that are translatable to compute resources (CPU / GPU / RAM)</span></td>
                                        </tr>
                                        <div class="q-py-sm"/>                                                                             
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">ABILITY</span></td>
                                        </tr>
                                        <q-separator color="accent"/>
                                        <tr>
                                            <td style="padding-left:20px;"><span class="text-caption">M-Brains Integrated Algoritms that can be mapped to ingame abilities to off-load heavy duty calculations</span></td>
                                        </tr>
                                        <div class="q-py-sm"/>
                                        <tr>
                                            <td><span style="color: #00f2a1;">&#x2043;</span>&nbsp;&nbsp;&nbsp;<span class="text-caption" style="color: white;">META</span></td>
                                        </tr>
                                        <q-separator color="accent"/>
                                        <tr>
                                            <td style="padding-left:20px;"><span class="text-caption">Stat Points that can be used to boost certain skills</span></td>
                                        </tr>                                        
                                    </table>
                                </div>
                                <!-- extend carousel scroll -->
                                <div class="q-py-xl"/>
                            </q-carousel-slide>

                        </q-carousel>
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMBrainsStructure()"
                        />
                    </div>
                </div>
            </q-card-section>            

            <div class="q-py-xl" />

           <!-- KEY FEATURES -->
            <div class="q-mt-sm"><!-- style="">-->
                <div class="">
                    <div>
                        <p class="gt-xs text-h4 text-center text-secondary">
                            Key Features
                        </p>
                        <p class="lt-sm text-h4 text-center text-secondary">
                            Key Features
                        </p>
                        <div class="q-py-md"/>
                        <p class="text-subtitle1 text-center text-white">
                            By design M-Brains, unlocks a whole range of features for Players:
                        </p>
                    </div>
                </div>


                <!--
                -->
                <div class="mb-overview-mobile col q-pa-md row flex justify-center">
                    <div align="center" style="width:100%;100%;">
                        <q-card class="my-card my-text q-pa-sm row justify-center bg-dark" style="width: 100%; height:100%;">
                            <q-card-section class="q-px-sm">
                                <div class="column flex-center" style="height:100%;width: 100%;">
                                    <div>
                                        <div class="sm">
                                            <q-img 
                                                src="@/assets/about/mbrains/features.png"
                                                style="width:192px;"/>
                                        </div>
                                        <div class="xs">
                                            <q-img 
                                                src="@/assets/about/mbrains/features.png"
                                                style="width:128px;"/>
                                        </div>                                                          
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>     
            </div>

            <!-- SMALL -->
            <q-card-section class="sm col-lg-6 col-md-6 col-sm-12 col-xs-12 text-justify">
                <div align="start" class="q-mt-sm justify-center bg-transparent">
                    <div class="">
                        <q-carousel
                            swipeable
                            animated
                            :autoplay="1250"
                            transition-prev="scale"
                            transition-next="scale"
                            :transition-duration="150"
                            v-model="btn_slide_mbrains_features"
                            infinite
                            style="height:150px;border:3px solid #00f2a1;"
                            class="mbrains-general-slide-action-btn item-active bg-dark"
                        >
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="q-pa-xl text-white text-center">
                                        <div class="text-h5 text-secondary">
                                            Integratable
                                        </div>      
                                        <!--                             
                                        <p class="text-subtitle0">
                                            The stats you build up by playing games or by using M-Gears will persist even if a Game is over.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="1">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="q-pa-xl text-white text-center">
                                        <div class="text-h5 text-secondary">
                                            Persistent
                                        </div>      
                                        <!--                             
                                        <p class="text-subtitle0">
                                            The stats you build up by playing games or by using M-Gears will persist even if a Game is over.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="2">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="q-pa-xl text-white text-center">
                                        <div class="text-h5 text-secondary">
                                            Portable
                                        </div>                                   
                                        <!--
                                        <p class="text-subtitle0">
                                            M-Brains will be portable within the Metabrainz IO realm through a digital Brain Compute Layer (BCL).
                                            Our goal is to expand the use and implementation of BCL's in games outside of the MetaBrainz IO realm.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="3">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="q-pa-xl text-white text-center">
                                        <div class="text-h5 text-secondary">
                                            Ownership
                                        </div>   
                                        <!--                                
                                        <p class="text-subtitle0">
                                            M-Brains are ECR-721 NFT's which can be minted, owned and controlled by it's holder.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="4">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="q-pa-xl text-white text-center">
                                        <div class="text-h5 text-secondary">
                                            Tradeable
                                        </div>    
                                        <!--                               
                                        <p class="text-subtitle0">
                                            Since M-Brains are ERC-721 Tokens they can also be traded and sold.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="5">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="q-pa-xl text-white text-center">
                                        <div class="text-h5 text-secondary">
                                            Meta
                                        </div> 
                                        <!--                                  
                                        <p class="text-subtitle0">
                                            All the stats of M-Brains are linked to so called 'M-Brain Controlled Actions'. These are events that happens during games and are performed and controlled by your M-Brain. Learn more about M-Brain actions @abc.
                                        </p>
                                        -->
                                    </div>
                                </div>                                
                            </q-carousel-slide>                                                                                                                
                                                       
                        </q-carousel>
                        <!--
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMBrainsFeatures()"
                        />
                        -->
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
                            :autoplay="1250"
                            transition-prev="scale"
                            transition-next="scale"
                            :transition-duration="100"
                            v-model="btn_slide_mbrains_features"
                            infinite
                            style="height:100px;border:3px solid #00f2a1;"
                            class="mbrains-general-slide-action-btn item-active bg-dark"
                        >
                            <q-carousel-slide :name="0">
                                <div class="column flex-center" style="height:100%;">
                                    <div class="text-center text-h6 text-secondary">
                                            Integratable
                                        <!--                                       
                                        <p class="text-caption">
                                            The data of M-Brains can be loaded into games.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="1">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="text-center text-h6 text-secondary">
                                            Persistent
                                        <!--    
                                        <p class="text-caption">
                                            The stats you build up by playing games or by using M-Gears will persist even if a Game is over.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="2">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="text-center text-h6 text-secondary">
                                            Portable
                                        <!--                                   
                                        <p class="text-caption">
                                            M-Brains will be portable within the Metabrainz IO realm through a digital Brain Compute Layer (BCL).
                                            Our goal is to expand the use and implementation of BCL's in games outside of the MetaBrainz IO realm.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="3">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="text-center text-h6 text-secondary">
                                            Ownership
                                        <!--                                   
                                        <p class="text-caption">
                                            M-Brains are ECR-721 NFT's which can be minted, owned and controlled by it's holder.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="4">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="text-center text-h6 text-secondary">
                                            Tradeable
                                        <!--                                      
                                        <p class="text-caption">
                                            Since M-Brains are ERC-721 Tokens they can also be traded and sold.
                                        </p>
                                        -->
                                    </div>
                                </div>
                            </q-carousel-slide>

                            <q-carousel-slide :name="5">
                                <div class="column flex-center" style="height:100%;"> 
                                    <div class="text-center text-h6 text-secondary">
                                            Meta
                                        <!--                               
                                        <p class="text-caption">
                                            All the stats of M-Brains are linked to so called 'M-Brain Controlled Actions'. These are events that happens during games and are performed and controlled by your M-Brain. Learn more about M-Brain actions @abc.
                                        </p>
                                        -->
                                    </div>
                                </div>                                
                            </q-carousel-slide>                                                                                                                
                                                       
                        </q-carousel>
                        <!--
                        <q-icon 
                            class="next_sector_slide_btn"
                            name="navigate_next" size="3.75em"
                            @click="slideBtnMBrainsFeatures()"
                        />
                        -->
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

export default {
    name: 'MAboutMetaBrains',
    setup(){
        const state = reactive({

            btn_slide_mbrains_main: 0,
            btn_slide_mbrains_structure: 0,
            btn_slide_mbrains_features: 0
        });

        return {
            ... toRefs(state),
            overview_hover: ref(false),
            slideBtnMBrainsMain: ()=>{
                if(state.btn_slide_mbrains_main >= 4)
                    state.btn_slide_mbrains_main = 0;
                else
                    state.btn_slide_mbrains_main +=1;
            },
            slideBtnMBrainsStructure: ()=>{
                if(state.btn_slide_mbrains_structure >= 5)
                    state.btn_slide_mbrains_structure = 0;
                else
                    state.btn_slide_mbrains_structure +=1;
            }
        }
    }
}
</script>


<style lang="scss">

.mbrains-general-slide-action-btn {
    width:100%;
    cursor:pointer;
    border: 2px solid #100e2f;
    color: white;
    background: rgba(0, 0, 0, 0.3);
}

.next_sector_slide_btn{
    color:#f9579a;
    position:absolute;
    right:10px;
    bottom:10px;
    background-color:#100e2f;
    border-radius:0px;
    border-left: 5px solid #01000b;
    border-top: 5px solid #01000b;
    cursor:pointer;
    &:hover{
        border: 3px solid #00f2a1;
        color:#f9579a;
    }
}

.next_feature_slide_btn{
    color:#00f2a1;
    position:absolute;
    right:35px;
    bottom:10px;
    background-color:#100e2f;
    border-radius:2px;
    border-left: 5px solid #01000b;
    border-top: 5px solid #01000b;
    cursor:pointer;
    &:hover{
        border: 2px solid #00f2a1;
        color:#00f2a1;
    }
}

</style>