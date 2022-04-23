<template>
<q-page id="home" class="q-py-lg">

        <!-- CONTENT: LANDING 
        -->
    <div class="row justify-evenly">
        <div
            align="center"
            class="row"
            style="width:75%;"
        >
            <!-- 
            CONTENT LEFT - DEFAULT
                style="border: 1px solid yellow;"
            -->
            <div class="gt-xs col">
                <!-- TITLE 
                    style="border: 1px solid green;"
                -->

                <!-- SUBTITLE 
                    style="border: 1px solid green;"
                -->
                <div align="center" class="row justify-center">
                    <div class="gt-md my-text text-h3 text-secondary">
                        <img src="@/assets/logo/metabrainzio_pix_xl.png">
                    </div>
                    <div class="md my-text text-h4 text-secondary">
                        <img src="@/assets/logo/metabrainzio_pix_lg.png">
                    </div>
                    <div class="gt-md q-pa-md text-h4 text-weight-bolder my-text text-secondary" style="width:100%;">
                        {{msg_intro_subtitle}}
                    </div>
                    <div class="md q-pa-md text-h5 text-weight-bolder my-text text-secondary" style="width:100%;">
                        {{msg_intro_subtitle}}
                    </div>                       
                </div>

                <div class="gt-sm q-py-sm"/>

                <!-- TITLE BODY 
                    style="border: 1px solid green;"
                -->
                <div
                    align="center" class="row justify-center"
                >
                    <!-- GT-MD -->
                    <div class="gt-md my-text text-h5 text-white text-weight-bolder" style="width:100%;max-width:720px;">
                        {{msg_intro_text_1}}
                    </div>
                    <div class="gt-md q-py-lg"/>
                    <div class="gt-md my-text text-h6 text-white" style="width:100%;max-width:720px;">

                        <q-carousel
                            infinite
                            swipeable
                            animated
                            :autoplay="3000"
                            transition-prev="slide-right"
                            transition-next="slide-left"
                            :transition-duration="500"
                            v-model="slide_home"
                            class="bg-transparent"
                            style="width:100%;height:125px;"
                        >
                            <q-carousel-slide :name="0" class="row items-center">
                                <div class="col">
                                    -- Activate your M-Brain and Integrate M-Gears --

                                </div>  
                            </q-carousel-slide>

                            <q-carousel-slide :name="1" class="row items-center">
                                <div class="col">
                                    -- Enhance it's COMPUTING POWER and INTELLIGENCE --

                                </div>  
                            </q-carousel-slide>

                            <q-carousel-slide :name="2" class="row items-center">
                                <div class="col">
                                    -- Utilize your M-Brain in Play 2 Earn Games! --

                                </div>  
                            </q-carousel-slide>
                        </q-carousel>

                    </div>

                    <!-- MD -->
                    <div class="md my-text text-h6 text-white text-weight-bolder" style="width:100%;max-width:540px;">
                        {{msg_intro_text_1}}
                    </div>
                    <div class="md q-py-md"/>                 
                    <div class="md my-text text-subtitle1 text-weight-bold text-white" style="width:100%;max-width:540px;">
                        
                        <q-carousel
                            infinite
                            swipeable
                            animated
                            :autoplay="3000"
                            transition-prev="slide-right"
                            transition-next="slide-left"
                            :transition-duration="500"
                            v-model="slide_home"
                            class="bg-transparent"
                            style="max-width:100%;height:125px;"
                        >
                            <q-carousel-slide :name="0" class="row items-center">
                                <div class="col">
                                    -- Activate your M-Brain and Integrate M-Gears --

                                </div>  
                            </q-carousel-slide>

                            <q-carousel-slide :name="1" class="row items-center">
                                <div class="col">
                                    -- Enhance it's COMPUTING POWER and INTELLIGENCE --

                                </div>  
                            </q-carousel-slide>

                            <q-carousel-slide :name="2" class="row items-center">
                                <div class="col">
                                    -- Utilize your M-Brain in Play 2 Earn Games! --

                                </div>  
                            </q-carousel-slide>
                        </q-carousel>

                    </div>                    

                </div>

                <div class="gt-sm q-py-md"/>
                
                <!-- ACTIONS 
                    style="border: 1px solid green;"
                -->
                <div
                    class="gt-sm row flex justify-center"
                    
                >
                    <!-- BTN -->
                    <div class="q-pa-md">
                    <div style="width:256px;">

                        <div v-if="!$store.getters.deviceMobile">
                            <q-btn 
                                class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                                @mouseover="fp_btn_2_hover = true" @mouseleave="fp_btn_2_hover = false"
                                @click="$router.push({ name: 'Metabrain', hash: '#main'})"
                            >
                                <img v-if="!fp_btn_2_hover" src="../assets/style/btn_lg.png" width="256">
                                <img v-else src="../assets/style/btn_press_lg.png" width="256">
                                <div v-if="!fp_btn_2_hover" class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-brains</div>
                                <div v-else class="my-text text-subtitle1 text-weight-bold text-dark" style="width:256px;position:absolute;top:20px;left:-1px;">get m-brains</div>
                            </q-btn>
                        </div>           
                        <div v-else>
                            <q-btn 
                                class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                                @click="$router.push({ name: 'Metabrain', hash: '#main'})"
                            >
                                <img src="../assets/style/btn_lg.png" width="256">
                                <div class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-brains</div>
                            </q-btn>   
                        </div>           
                    </div>           
                    </div>
                    <!-- BTN -->
                    <div class="q-pa-md">
                    <div style="width:256px;">
                        <div v-if="!$store.getters.deviceMobile">
                            <q-btn 
                                class="btn-helper" dense flat unelevated :value="fp_btn_1_hover"
                                @mouseover="fp_btn_1_hover = true" @mouseleave="fp_btn_1_hover = false"
                                @click="$router.push({ name: 'Metagear', hash: '#main'})"
                            >
                                <img v-if="!fp_btn_1_hover" src="../assets/style/btn_lg.png" width="256">
                                <img v-else src="../assets/style/btn_press_lg.png" width="256">
                                <div v-if="!fp_btn_1_hover" class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-gears</div>
                                <div v-else class="my-text text-subtitle1 text-weight-bold text-dark" style="width:256px;position:absolute;top:20px;left:-1px;">get m-gears</div>
                            </q-btn>
                        </div>
                        <div v-else>
                            <q-btn 
                                class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                                @click="$router.push({ name: 'Metabrain', hash: '#main'})"
                            >
                                <img src="../assets/style/btn_lg.png" width="256">
                                <div class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-gears</div>
                            </q-btn>
                        </div>   
                    </div>
                    </div>
                </div>

                <!-- ACTIONS 
                -->
                <div
                    class="lt-sm row"
                    align="center"
                >
                    <!-- BTN -->
                    <div class="q-pa-md">
                    <div style="width:256px;">
                        <div v-if="!$store.getters.deviceMobile">
                            <q-btn 
                                class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                                @mouseover="fp_btn_2_hover = true" @mouseleave="fp_btn_2_hover = false"
                                @click="$router.push({ name: 'Metabrain', hash: '#main'})"
                            >
                                <img v-if="!fp_btn_2_hover" src="../assets/style/btn_lg.png" width="256">
                                <img v-else src="../assets/style/btn_press_lg.png" width="256">
                                <div v-if="!fp_btn_2_hover" class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-brains</div>
                                <div v-else class="my-text text-subtitle1 text-weight-bold text-dark" style="width:256px;position:absolute;top:20px;left:-1px;">get m-brains</div>
                            </q-btn>
                        </div>
                        <div v-else>
                            <q-btn 
                                class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                                @click="$router.push({ name: 'Metabrain', hash: '#main'})"
                            >
                                <img src="../assets/style/btn_lg.png" width="256">
                                <div class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-brains</div>
                            </q-btn>
                        </div>
                    </div>                    
                    </div>
                    <!-- BTN -->
                    <div class="q-pa-md">
                    <div style="width:256px;">
                        <div v-if="!$store.getters.deviceMobile">
                            <q-btn 
                                class="btn-helper" dense flat unelevated :value="fp_btn_1_hover"
                                @mouseover="fp_btn_1_hover = true" @mouseleave="fp_btn_1_hover = false"
                                @click="$router.push({ name: 'Metagear', hash: '#main'})"
                            >
                                <img v-if="!fp_btn_1_hover" src="../assets/style/btn_lg.png" width="256">
                                <img v-else src="../assets/style/btn_press_lg.png" width="256">
                                <div v-if="!fp_btn_1_hover" class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-gears</div>
                                <div v-else class="my-text text-subtitle1 text-weight-bold text-dark" style="width:256px;position:absolute;top:20px;left:-1px;">get m-gears</div>
                            </q-btn>
                        </div>
                        <div v-else>
                            <q-btn 
                                class="btn-helper" dense flat unelevated :value="fp_btn_1_hover"
                                @click="$router.push({ name: 'Metagear', hash: '#main'})"
                            >
                                <img src="../assets/style/btn_lg.png" width="256">
                                <div class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-gears</div>
                            </q-btn>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <!-- 
            CONTENT LEFT - MOBILE
            -->
            <div class="lt-md flex justify-center" style="width:100%;">
                <div class="lt-md row items-center justify-center my-title text-h3 text-weight-bold text-white">
                    <img class="sm" src="@/assets/logo/metabrainzio_pix_md.png">
                    <img class="xs" src="@/assets/logo/metabrainzio_pix_md.png" width="320" height="33">
                </div>                     
            </div>            
            <div align="center" class="lt-md q-py-lg flex justify-center">
                <div class="q-py-md"/>
                <div class="row justify-center" style="width:100%;">
                    <div class="text-h6 my-text text-secondary" style="width:100%;max-width:400px;">
                        {{msg_intro_subtitle}}
                    </div>
                    <div class="q-py-lg"/>
                    <div class="my-text text-subtitle1 text-weight-bold text-white" style="width:100%;max-width:400px;">
                        {{msg_intro_text_1}}
                        <div class="q-py-sm"/>
                    </div>
                   <div class="my-text text-body text-white" style="width:100%;max-width:400px;">
                         <q-carousel
                            infinite
                            swipeable
                            animated
                            :autoplay="3500"
                            transition-prev="fade"
                            transition-next="fade"
                            :transition-duration="500"
                            v-model="slide_home"
                            class="bg-transparent"
                            style="max-width:400px;max-height:80px;"
                        >
                            <q-carousel-slide :name="0" class="row items-center">
                                <div class="col">
                                    Activate your M-Brain and Integrate M-Gears

                                </div>  
                            </q-carousel-slide>

                            <q-carousel-slide :name="1" class="row items-center">
                                <div class="col">
                                    Enhance it's COMPUTING POWER and INTELLIGENCE

                                </div>  
                            </q-carousel-slide>

                            <q-carousel-slide :name="2" class="row items-center">
                                <div class="col">
                                    Utilize your M-Brain in Play 2 Earn Games!

                                </div>
                            </q-carousel-slide>
                        </q-carousel>


                        
                        <div class="q-py-sm"/>
                    </div>                    
                </div>
                <div class="q-py-md"/>


                <!-- BTN -->
                <div class="q-pa-md">
                <div style="width:192px;">
                    <div v-if="!$store.getters.deviceMobile">                
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                            @mouseover="fp_btn_2_hover = true" @mouseleave="fp_btn_2_hover = false"
                            @click="$router.push({ name: 'Metabrain', hash: '#main'})"
                        >
                            <img v-if="!fp_btn_2_hover" src="../assets/style/btn_lg.png" width="192">
                            <img v-else src="../assets/style/btn_press_lg.png" width="192">
                            <div v-if="!fp_btn_2_hover" class="my-text text-caption text-weight-bold text-dark" style="position:absolute;top: 22px;">get m-brains</div>
                            <div v-else class="my-text text-caption text-weight-bold text-dark" style="width:192px;position:absolute;top:18px;left:-1px;">get m-brains</div>
                        </q-btn>
                    </div>
                    <div v-else>
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                            @click="$router.push({ name: 'Metabrain', hash: '#main'})"
                        >
                            <img src="../assets/style/btn_lg.png" width="192">
                            <div class="my-text text-caption text-weight-bold text-dark" style="position:absolute;top: 22px;">get m-brains</div>
                        </q-btn>                    
                    </div>          
                </div>                    
                </div>
               <!-- BTN -->
                <div class="q-pa-md">
                <div style="width:192px;">
                    <div v-if="!$store.getters.deviceMobile">
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_1_hover"
                            @mouseover="fp_btn_1_hover = true" @mouseleave="fp_btn_1_hover = false"
                            @click="$router.push({ name: 'Metagear', hash: '#main'})"
                        >
                            <img v-if="!fp_btn_1_hover" src="../assets/style/btn_lg.png" width="192">
                            <img v-else src="../assets/style/btn_press_lg.png" width="192">
                            <div v-if="!fp_btn_1_hover" class="my-text text-caption text-weight-bold text-dark" style="position:absolute;top: 22px;">get m-gears</div>
                            <div v-else class="my-text text-caption text-weight-bold text-dark" style="width:192px;position:absolute;top:18px;left:-1px;">get m-gears</div>
                        </q-btn>
                    </div>
                    <div v-else>
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_1_hover"
                            @click="$router.push({ name: 'Metagear', hash: '#main'})"
                        >
                            <img src="../assets/style/btn_lg.png" width="192">
                            <div class="my-text text-caption text-weight-bold text-dark" style="position:absolute;top: 22px;">get m-gears</div>
                        </q-btn>                    
                    </div>
                </div>
                </div>
            </div>

            <!-- CONTENT RIGHT - DEFAULT 
                style="border: 1px solid yellow;"
            -->
            <div 
                class="gt-md col flex justify-center"
                style="min-width:350px;max-width:475px;"
            >
                <!-- AVE -->
                <div class="col q-pa-xl" align="right">
                    <div>
                        <img 
                            src="../assets/ave.gif"
                            style="margin-left:40px;width:12rem;border:4px solid #34204f;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div 
                    class="col q-py-xl" align="left"
                    style="margin-left:50px;width:100%; width:300px;max-width:300px;max-height:240px;cursor:pointer;margin-top:48px;padding:10px;border-top:4px solid #00f2a1;border-bottom:4px solid #f9579a;border-radius:0px;background-image: linear-gradient(to top, rgba(249,87,154,0.1), rgba(0,20,20,1)) !important;"
                    @click="$router.push({ name: 'About', hash: '#intro' })"
                >                    
                    <div v-for="msg in ave_msg" :key="msg" class="q-pa-xs my-text text-subtitle0 text-secondary text-weight-bolder">
                        <div v-if="msg.length > 1">{{msg}}</div>
                    </div>
                </div>
            </div>

            <!-- CONTENT RIGHT - MOBILE MD
                style="border: 1px solid yellow;"
            -->
            <div 
                class="gt-xs gt-sm lt-lg col flex justify-center"
                style="min-width:275px;max-width:375px;"
            >
                <!-- AVE -->
                <div class="col q-pa-xl" align="left">
                    <div>
                        <img 
                            src="../assets/ave.gif"
                            style="width:10rem;border:3px solid #34204f;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div 
                    class="col q-py-xl flex justify-center" align="left"
                    style="max-width:275px;height:200px;cursor:pointer;margin-top:48px;padding:10px;border-top:3px solid #00f2a1;border-bottom:3px solid #f9579a;border-radius:0px;background-image: linear-gradient(to top, rgba(249,87,154,0.1), rgba(0,20,20,1)) !important;"
                    @click="$router.push({ name: 'About', hash: '#intro' })"
                >
                    <div v-for="msg in ave_msg" :key="msg" class="my-text text-body2 text-secondary text-weight-bolder">
                        <div v-if="msg.length > 2">{{msg}}</div>
                    </div>
                </div>
            </div>
            <!-- CONTENT RIGHT - MOBILE SM
                style="border: 1px solid yellow;"
            -->
            
            <div style="width:100%;">
            <div 
                class="lt-md q-py-xl flex justify-center"
                style="max-width:375px;"
            >
                <!-- AVE -->
                <div class="row q-pa-md">
                    <div
                        style="width:300px;"
                    >
                        <img 
                            src="../assets/ave.gif"
                            style="width:8rem;border:3px solid #34204f;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div 
                    class="row q-py-md flex justify-center"
                    style="width:300px;height:150px;padding:10px;cursor:pointer;border-top:3px solid #00f2a1;border-bottom:3px solid #f9579a;border-radius:0px;background-image: linear-gradient(to top, rgba(249,87,154,0.1), rgba(0,20,20,1)) !important;"
                    @click="$router.push({ name: 'About', hash: '#intro' })"
                >
                    <div class="row" align="center" v-for="msg in ave_msg" :key="msg">
                        <div v-if="msg.length > 1" class="my-text justify-center text-caption text-secondary text-weight-bold">{{msg}}</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
        <!-- separate elements begin (pushing down) -->
        <!-- separate elements end -->     
        <div class="gt-md" style="height:260px;width:100%;"/>   
        <div class="md" style="height:200px;width:100%;"/>   
        <div class="lt-md" style="height:100px;width:100%;"/>   

        <!-- CONTENT: ABOUT   -->
        <div 
            class="row bg-dark items-start justify-center" style="width: 100%;"
        >
           <!-- 
            About MetaBrains DEFAULT
           -->
            <!-- roof elements begin -->
            <div class="gt-md" style="height:100px;width:100%;"/>
            <div class="md" style="height:75px;width:100%;"/>
            <div class="lt-md" style="height:50px;width:100%;"/>
            <!-- roof elements end -->
            <div class="gt-xs flex justify-center">

                <!-- BTN
                        @click="$router.push({ name: 'About', hash: '#meta-brains' })"
                 -->
                <div class="gt-xs q-pa-md">
                <div style="width:384px;">
                    <div v-if="!$store.getters.deviceMobile">
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_big_1_hover"
                            @mouseover="fp_btn_big_1_hover = true" @mouseleave="fp_btn_big_1_hover = false"
                            @click="$router.push({ name: 'About', hash: '#meta-brains' })"
                        >
                            <img v-if="!fp_btn_big_1_hover" src="../assets/style/fp_card_1.png" width="384">
                            <img v-else src="../assets/style/fp_card_1_press.png" width="384">
                            <div v-if="!fp_btn_big_1_hover" class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top:78px;">Learn About<br/>M-Brains</div>
                            <div v-else class="my-title text-h5 text-weight-bold text-white" style="width:384px;position:absolute;top:68px;left:-3px;">Learn About<br/>M-Brains</div>
                        </q-btn>
                    </div>
                    <div v-else>
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_big_1_hover"
                            @click="$router.push({ name: 'About', hash: '#meta-brains' })"
                        >
                            <img src="../assets/style/fp_card_1.png" width="384">
                            <div class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top:78px;">Learn About<br/>M-Brains</div>
                        </q-btn>                    
                    </div>
                </div>
                </div>

                <!-- 
                About MetaGears DEFAULT
                -->
                <!-- BTN -->
                <div class="gt-xs q-pa-md">
                <div style="width:384px;">
                    <div v-if="!$store.getters.deviceMobile">
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_big_2_hover"
                            @mouseover="fp_btn_big_2_hover = true" @mouseleave="fp_btn_big_2_hover = false"
                            @click="$router.push({ name: 'About', hash: '#meta-gears' })"

                        >
                            <img v-if="!fp_btn_big_2_hover" src="../assets/style/fp_card_1.png" width="384">
                            <img v-else src="../assets/style/fp_card_1_press.png" width="384">
                            <div v-if="!fp_btn_big_2_hover" class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top: 78px;">Learn About<br/>M-Gears</div>
                            <div v-else class="my-title text-h5 text-weight-bold text-white" style="width:384px;position:absolute;top:68px;left:-3px;">Learn About<br/>M-Gears</div>
                        </q-btn>
                    </div>
                    <div v-else>
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_big_2_hover"
                            @click="$router.push({ name: 'About', hash: '#meta-gears' })"

                        >
                            <img src="../assets/style/fp_card_1.png" width="384">
                            <div class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top: 78px;">Learn About<br/>M-Gears</div>
                        </q-btn>                    
                    </div>
                </div>
                </div>
                <!-- 
                About MetaStadia DEFAULT
                Scroll Clamp
                -->
                <!-- BTN -->
                <div class="gt-xs q-pa-md">
                <div style="width:384px;">
                    <div v-if="!$store.getters.deviceMobile">
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_big_3_hover"
                            @mouseover="fp_btn_big_3_hover = true" @mouseleave="fp_btn_big_3_hover = false"
                            @click="$router.push({ name: 'About', hash: '#meta-games' })" 
                        >
                            <img v-if="!fp_btn_big_3_hover" src="../assets/style/fp_card_1.png" width="384">
                            <img v-else src="../assets/style/fp_card_1_press.png" width="384">
                            <div v-if="!fp_btn_big_3_hover" class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top: 78px;">Learn About<br/>M-Games</div>
                            <div v-else class="my-title text-h5 text-weight-bold text-white" style="width:384px;position:absolute;top:68px;left:-3px;">Learn About<br/>M-Games</div>
                        </q-btn>
                    </div>
                    <div v-else>
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_big_3_hover"
                            @click="$router.push({ name: 'About', hash: '#meta-games' })" 
                        >
                            <img src="../assets/style/fp_card_1.png" width="384">
                            <div class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top: 78px;">Learn About<br/>M-Games</div>
                        </q-btn>                    
                    </div>
                </div>
                </div>
            </div>

            <!-- 
            About MetaBrains MOBILE
            -->
            <!-- BTN 
                    @click="$router.push({ name: 'About', hash: '#meta-brains' })"
            -->
            <div class="lt-sm q-pa-md">
            <div style="width:320px;">
                <div v-if="!$store.getters.deviceMobile">
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_1_hover"
                        @mouseover="fp_btn_big_1_hover = true" @mouseleave="fp_btn_big_1_hover = false"
                        @click="$router.push({ name: 'About', hash: '#meta-brains' })"
                    >
                        <img v-if="!fp_btn_big_1_hover" src="../assets/style/fp_card_1.png" width="320">
                        <img v-else src="../assets/style/fp_card_1_press.png" width="320">
                        <div v-if="!fp_btn_big_1_hover" class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 62px;">Learn About<br/>M-Brains</div>
                        <div v-else class="my-title text-h6 text-weight-bold text-white" style="width:320px;position:absolute;top:53px;left:-4px;">Learn About<br/>M-Brains</div>
                    </q-btn>
                </div>
                <div v-else>
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_1_hover"
                        @click="$router.push({ name: 'About', hash: '#meta-brains' })"
                    >
                        <img src="../assets/style/fp_card_1.png" width="320">
                        <div class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 62px;">Learn About<br/>M-Brains</div>
                    </q-btn>                
                </div>
            </div>
            </div>

            <!-- 
            About MetaGears MOBILE
            -->
            <!-- BTN -->
            <div class="lt-sm q-pa-md">
            <div style="width:320px;">
                <div v-if="!$store.getters.deviceMobile">
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_2_hover"
                        @mouseover="fp_btn_big_2_hover = true" @mouseleave="fp_btn_big_2_hover = false"
                        @click="$router.push({ name: 'About', hash: '#meta-gears' })"

                    >
                        <img v-if="!fp_btn_big_2_hover" src="../assets/style/fp_card_1.png" width="320">
                        <img v-else src="../assets/style/fp_card_1_press.png" width="320">
                        <div v-if="!fp_btn_big_2_hover" class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 62px;">Learn About<br/>M-Gears</div>
                        <div v-else class="my-title text-h6 text-weight-bold text-white" style="width:320px;position:absolute;top:53px;left:-4px;">Learn About<br/>M-Gears</div>
                    </q-btn>
                </div>
                <div v-else>
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_2_hover"
                        @click="$router.push({ name: 'About', hash: '#meta-gears' })"

                    >
                        <img src="../assets/style/fp_card_1.png" width="320">
                        <div class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 62px;">Learn About<br/>M-Gears</div>
                    </q-btn>                
                </div>
            </div>
            </div>

            
            <!-- 
            About MetaStadia MOBILE
            -->
            
            <!-- BTN -->
            <div class="lt-sm q-pa-md">
            <div style="width:320px;">
                <div v-if="!$store.getters.deviceMobile">            
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_3_hover"
                        @mouseover="fp_btn_big_3_hover = true" @mouseleave="fp_btn_big_3_hover = false"
                        @click="$router.push({ name: 'About', hash: '#meta-games' })" 
                    >
                        <img v-if="!fp_btn_big_3_hover" src="../assets/style/fp_card_1.png" width="320">
                        <img v-else src="../assets/style/fp_card_1_press.png" width="320">
                        <div v-if="!fp_btn_big_3_hover" class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 62px;">Learn About<br/>M-Games</div>
                        <div v-else class="my-title text-h6 text-weight-bold text-white" style="width:320px;position:absolute;top:53px;left:-4px;">Learn About<br/>M-Games</div>
                    </q-btn>
                </div>
                <div v-else>
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_3_hover"
                        @click="$router.push({ name: 'About', hash: '#meta-games' })" 
                    >
                        <img src="../assets/style/fp_card_1.png" width="320">
                        <div class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 62px;">Learn About<br/>M-Games</div>
                    </q-btn>                
                </div>
            </div>
        </div>
        <!-- bottom elements begin -->
        <div class="gt-md" style="height:100px;width:100%;"/>
        <div class="md" style="height:75px;width:100%;"/>
        <div class="lt-md" style="height:50px;width:100%;"/>
        <!-- bottom elements end -->
    </div>
    <div class="q-py-xl"/>
      
    <Roadmap/>
</q-page>  

</template>

<script>
const intro = [
	{
		"section": 
		[
			"Hi there, I'm Ave!","I'm a First Generation AGI.."
			// "I will guide you in your journey through Cyberspace!"
		]
	},
	{
		"section": 
		[
			"I will guide you in your journey through Cyberspace!","",""
		]
	},    
    // {
	// 	"section": 
	// 	[
	// 		"What year are we in?",
    //         "Good question.. currently its the year 2031!"
	// 	]
	// },
    // {
	// 	"section": 
	// 	[
	// 		"95% of the population are neurollogically synced with a hardware interface,",""
	// 	]
	// },
    // {
	// 	"section": 
	// 	[
    //         "this interface connects us to the main system in Cyberspace,",
    //         "also reffered to as the Metaverse..","",""
	// 	]
	// },
    // {
	// 	"section": 
	// 	[
	// 		"Physically most of us reside on earth,","", "though I've heard a new economy on Mars is being build as we speak",""
	// 	]
	// },
	// {
	// 	"section": 
	// 	[
	// 		"How did we end up here you ask?","",
	// 		"Simply put, technology progressed a bit faster than time itself..","",""
	// 	]
	// },
	{
		"section": 
		[
			"To get started, read the about sections to learn more about MetaBrainz IO",""
		]
	},
    {
		"section": 
		[
			"Tap here to proceed...","","","",""
		]
	}
]

import { reactive, toRefs, ref } from 'vue'
import Roadmap from '@/components/Roadmap.vue';

export default {
name: 'Home',
    components: {
    // Content,
        Roadmap
    },

    setup(){

        const content = reactive({
            ave_msg: [],
            slide_home: 0
        });

        // Intro section
        var sec_index = 0;
        // var sec_length = 0;

        // Intro sentence
        var sen_index = 0;
        // var sen_length = 0;

        function speakSentence(sentence) { 
            setTimeout(function() {
                content.ave_msg.push(sentence)
                sen_index++;
                if (sen_index < Object.keys(intro[sec_index]["section"]).length+1) {
                    return false;
                }else{
                    // Clear
                    sen_index = 0
                    if(sec_index < Object.keys(intro).length)
                        sec_index++;
                    content.ave_msg = []
                    return true;
                }
            }, 2800)
        }

        function speakSection() { 
            setTimeout(function() {
                try{
                    speakSentence(intro[sec_index]["section"][sen_index]);
                }catch{
                    sen_index = 0
                    sec_index=0;
                    content.ave_msg = []
                }
                speakSection();
            }, 3000)
        }
        speakSection();

        const fp_btn_1_hover = ref(false);
        const fp_btn_2_hover = ref(false);
        const fp_btn_big_1_hover = ref(false);
        const fp_btn_big_2_hover = ref(false);
        const fp_btn_big_3_hover = ref(false);

        return{
            fp_btn_1_hover, 
            fp_btn_2_hover, 
            fp_btn_big_1_hover,
            fp_btn_big_2_hover,
            fp_btn_big_3_hover,
            ... toRefs(content),
            msg_intro_subtitle:"Brain Meets Meta",
            msg_intro_text_1:"We are developing Digital Brains and Gears",
            msg_intro_text_2:"Activate your M-Brain -- Integrate M-Gears to Enhance it's COMPUTING POWER and INTELLIGENCE -- Utilize your M-Brain in 'Play 2 Earn' Games!",
            msg_intro_text_3:"",
        }
    }
}
</script>
<style lang="scss">
.items-card{
    width:100%;
}

.learn-more-card{
    color:#00f2a1;
    &:hover{
        background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;
        color:#01000b;
        cursor:pointer;
    }
}

.bigbtn {
    background-image: url(../assets/style/btn_lg.svg);
    // background-repeat: repeat;
    // background-position: center;
    // cursor: pointer;
    // text-align: center;
    // font-family: 'Orbitron';
    width: 100;

    &:hover{
        background-image: url(../assets/style/btn_press_lg.png);
    }
}

.btn-helper{
    .q-focus-helper {
        visibility: hidden;
    }
}
</style>

