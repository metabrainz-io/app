<template>
    <q-page class="q-pa-lg">

        <!-- CONTENT: LANDING 
            style="border: 1px solid red;"
        -->
        <div class="row justify-evenly">
        <div
            align="center"
            class="row"
            style="width: 75%;"
        >
            <!-- 
            CONTENT LEFT - DEFAULT
                style="border: 1px solid yellow;"
            -->
            <div class="gt-xs col">
                <!-- TITLE 
                    style="border: 1px solid green;"
                -->
                <div align="center" class="row justify-center">
                    <div class="gt-md my-title text-h1 text-weight-bold text-white">
                        {{msg_intro_t}}
                    </div>
                    <div class="gt-sm lt-lg my-title text-h2 text-weight-bold text-white">
                        {{msg_intro_t}}
                    </div>
                </div>

                <div class="gt-sm q-py-md"/>
                
                <!-- SUBTITLE 
                    style="border: 1px solid green;"
                -->
                <div align="center" class="row justify-center">
                    <div class="gt-md my-text text-h3 text-secondary">
                        {{msg_intro_0}}
                    </div>
                    <div class="gt-sm lt-lg my-text text-h4 text-secondary">
                        {{msg_intro_0}}
                    </div>
                </div>

                <div class="gt-sm q-py-md"/>

                <!-- TITLE BODY 
                    style="border: 1px solid green;"
                -->
                <div
                    align="center" class="row"
                >
                    <div class="gt-md my-text text-h5 text-white">
                        {{msg_intro_1}}<br><br>
                        {{msg_intro_2}}
                    </div>
                    <div class="gt-sm lt-lg my-text text-h6 text-white">
                        {{msg_intro_1}}<br><br>
                        {{msg_intro_2}}
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
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_1_hover"
                            @mouseover="fp_btn_1_hover = true" @mouseleave="fp_btn_1_hover = false"
                            @click="$router.push({ name: 'Metagear'})"
                        >
                            <img v-if="!fp_btn_1_hover" src="../assets/style/btn_lg.svg" width="256">
                            <img v-else src="../assets/style/btn_lg_press.svg" width="256">
                            <div v-if="!fp_btn_1_hover" class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-gears</div>
                            <div v-else class="my-text text-subtitle1 text-weight-bold text-dark" style="width:256px;position:absolute;top:20px;left:-1px;">get m-gears</div>
                        </q-btn>
                    </div>
                    </div>
                    <!-- BTN -->
                    <div class="q-pa-md">
                    <div style="width:256px;">
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                            @mouseover="fp_btn_2_hover = true" @mouseleave="fp_btn_2_hover = false"
                            @click="$router.push({ name: 'Metabrain'})"
                        >
                            <img v-if="!fp_btn_2_hover" src="../assets/style/btn_lg.svg" width="256">
                            <img v-else src="../assets/style/btn_lg_press.svg" width="256">
                            <div v-if="!fp_btn_2_hover" class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">activate m-brain</div>
                            <div v-else class="my-text text-subtitle1 text-weight-bold text-dark" style="width:256px;position:absolute;top:20px;left:-1px;">activate m-brain</div>
                        </q-btn>
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
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_1_hover"
                            @mouseover="fp_btn_1_hover = true" @mouseleave="fp_btn_1_hover = false"
                            @click="$router.push({ name: 'Metagear'})"
                        >
                            <img v-if="!fp_btn_1_hover" src="../assets/style/btn_lg.svg" width="256">
                            <img v-else src="../assets/style/btn_lg_press.svg" width="256">
                            <div v-if="!fp_btn_1_hover" class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">get m-gears</div>
                            <div v-else class="my-text text-subtitle1 text-weight-bold text-dark" style="width:256px;position:absolute;top:20px;left:-1px;">get m-gears</div>
                        </q-btn>
                    </div>
                    </div>
                    <!-- BTN -->
                    <div class="q-pa-md">
                    <div style="width:256px;">
                        <q-btn 
                            class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                            @mouseover="fp_btn_2_hover = true" @mouseleave="fp_btn_2_hover = false"
                            @click="$router.push({ name: 'Metabrain'})"
                        >
                            <img v-if="!fp_btn_2_hover" src="../assets/style/btn_lg.svg" width="256">
                            <img v-else src="../assets/style/btn_lg_press.svg" width="256">
                            <div v-if="!fp_btn_2_hover" class="my-text text-subtitle1 text-weight-bold text-dark" style="position:absolute;top:25px;">activate m-brain</div>
                            <div v-else class="my-text text-subtitle1 text-weight-bold text-dark" style="width:256px;position:absolute;top:20px;left:-1px;">activate m-brain</div>
                        </q-btn>
                    </div>                    
                    </div>
                </div>
            </div>
            <!-- 
            CONTENT LEFT - MOBILE
            -->
            <div class="lt-md flex justify-center">
                <div class="gt-xs lt-md row my-title text-h3 text-weight-bold text-white">
                    {{msg_intro_t}}
                </div>
                <div class="lt-sm row my-title text-h4 text-weight-bold text-white">
                    {{msg_intro_t}}
                </div>
                <div class="q-py-xl"/>
                <div class="text-h6 my-text text-secondary" style="width:100%;">
                    {{msg_intro_0}}
                </div>
                <div class="q-py-lg"/>
                <div class="my-text text-subtitle2 text-white">
                    {{msg_intro_1}}<br><br>
                    {{msg_intro_2}}
                    <div class="q-py-md"/>
                </div>
                <div class="q-py-md"/>


               <!-- BTN -->
                <div class="q-pa-md">
                <div style="width:192px;">
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_1_hover"
                        @mouseover="fp_btn_1_hover = true" @mouseleave="fp_btn_1_hover = false"
                        @click="$router.push({ name: 'Metagear'})"
                    >
                        <img v-if="!fp_btn_1_hover" src="../assets/style/btn_lg.svg" width="192">
                        <img v-else src="../assets/style/btn_lg_press.svg" width="192">
                        <div v-if="!fp_btn_1_hover" class="my-text text-caption text-weight-bold text-dark" style="position:absolute;top: 22px;">get m-gears</div>
                        <div v-else class="my-text text-caption text-weight-bold text-dark" style="width:192px;position:absolute;top:18px;left:-1px;">get m-gears</div>
                    </q-btn>
                </div>
                </div>
                <!-- BTN -->
                <div class="q-pa-md">
                <div style="width:192px;">
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_2_hover"
                        @mouseover="fp_btn_2_hover = true" @mouseleave="fp_btn_2_hover = false"
                        @click="$router.push({ name: 'Metabrain'})"
                    >
                        <img v-if="!fp_btn_2_hover" src="../assets/style/btn_lg.svg" width="192">
                        <img v-else src="../assets/style/btn_lg_press.svg" width="192">
                        <div v-if="!fp_btn_2_hover" class="my-text text-caption text-weight-bold text-dark" style="position:absolute;top: 22px;">activate m-brain</div>
                        <div v-else class="my-text text-caption text-weight-bold text-dark" style="width:192px;position:absolute;top:18px;left:-1px;">activate m-brain</div>
                    </q-btn>
                </div>                    
                </div>

                
            </div>

            <!-- CONTENT RIGHT - DEFAULT 
                style="border: 1px solid yellow;"
            -->
            <div 
                class="gt-md col flex justify-center"
                style="min-width:350px;max-width:450px;"
            >
                <!-- AVE -->
                <div class="col q-pa-xl" align="right">
                    <div>
                        <img 
                            src="../assets/ave.gif"
                            style="width:12.5rem;border:5px solid #100e2f;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div 
                    class="col q-py-xl" align="left"
                    style="width:100%; max-width:250px;cursor:pointer;"
                    @click="$router.push({ name: 'About', hash: '#intro' })"
                >
                    <div v-for="msg in ave_msg" :key="msg" class="q-pa-xs my-text text-subtitle1 text-secondary text-weight-bolder">
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
                            style="width:10rem;border:5px solid #100e2f;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div 
                    class="col q-py-xl flex justify-center" align="left"
                    style="max-width:250px;height:300px;cursor:pointer;"
                    @click="$router.push({ name: 'About', hash: '#intro' })"
                >
                    <div v-for="msg in ave_msg" :key="msg" class="my-text text-body2 text-secondary text-weight-bolder">
                        <div v-if="msg.length > 1">{{msg}}</div>
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
                            style="width:8rem;border:4px solid #100e2f;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div 
                    class="row q-py-md flex justify-center"
                    style="width:300px;height:150px;padding:10px;cursor:pointer;border-top:1px solid #00f2a1;border-radius:5px;background-image: linear-gradient(to top, rgba(0,20,20,0), rgba(0,20,20,1)) !important;"
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
        <div class="q-py-md"/>


        <!-- CONTENT: ABOUT   -->
        <div 
            class="row items-start justify-center" style="width: 100%;"
        >
           <!-- 
            About MetaBrains DEFAULT
           -->
            <div class="gt-xs flex justify-center">

                <!-- BTN -->
                <div class="gt-xs q-pa-md">
                <div style="width:384px;">
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_1_hover"
                        @mouseover="fp_btn_big_1_hover = true" @mouseleave="fp_btn_big_1_hover = false"
                        @click="$router.push({ name: 'About', hash: '#meta-brains' })"
                    >
                        <img v-if="!fp_btn_big_1_hover" src="../assets/style/fp_card_1.png" width="384">
                        <img v-else src="../assets/style/fp_card_1_press.png" width="384">
                        <div v-if="!fp_btn_big_1_hover" class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top: 75px;">Learn About MetaBrains</div>
                        <div v-else class="my-title text-h5 text-weight-bold text-white" style="width:384px;position:absolute;top:62px;left:-6px;">Learn About MetaBrains</div>
                    </q-btn>
                </div>
                </div>

                <!-- 
                About MetaGears DEFAULT
                -->
                <!-- BTN -->
                <div class="gt-xs q-pa-md">
                <div style="width:384px;">
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_2_hover"
                        @mouseover="fp_btn_big_2_hover = true" @mouseleave="fp_btn_big_2_hover = false"
                        @click="$router.push({ name: 'About', hash: '#meta-gears' })"

                    >
                        <img v-if="!fp_btn_big_2_hover" src="../assets/style/fp_card_1.png" width="384">
                        <img v-else src="../assets/style/fp_card_1_press.png" width="384">
                        <div v-if="!fp_btn_big_2_hover" class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top: 75px;">Learn About MetaGears</div>
                        <div v-else class="my-title text-h5 text-weight-bold text-white" style="width:384px;position:absolute;top:62px;left:-6px;">Learn About MetaGears</div>
                    </q-btn>
                </div>
                </div>
                <!-- 
                About MetaStadia DEFAULT
                Scroll Clamp
                -->
                <!-- BTN -->
                <div class="gt-xs q-pa-md">
                <div style="width:384px;">
                    <q-btn 
                        class="btn-helper" dense flat unelevated :value="fp_btn_big_3_hover"
                        @mouseover="fp_btn_big_3_hover = true" @mouseleave="fp_btn_big_3_hover = false"
                        @click="$router.push({ name: 'About', hash: '#meta-games' })" 
                    >
                        <img v-if="!fp_btn_big_3_hover" src="../assets/style/fp_card_1.png" width="384">
                        <img v-else src="../assets/style/fp_card_1_press.png" width="384">
                        <div v-if="!fp_btn_big_3_hover" class="my-title text-h5 text-weight-bold text-secondary" style="width:384px;position:absolute;top: 75px;">Learn About MetaStadia</div>
                        <div v-else class="my-title text-h5 text-weight-bold text-white" style="width:384px;position:absolute;top:62px;left:-6px;">Learn About MetaStadia</div>
                    </q-btn>
                </div>
                </div>
            </div>

            <!-- 
            About MetaBrains MOBILE
            -->
            <!-- BTN -->
            <div class="lt-sm q-pa-md">
            <div style="width:320px;">
                <q-btn 
                    class="btn-helper" dense flat unelevated :value="fp_btn_big_1_hover"
                    @mouseover="fp_btn_big_1_hover = true" @mouseleave="fp_btn_big_1_hover = false"
                    @click="$router.push({ name: 'About', hash: '#meta-brains' })"
                >
                    <img v-if="!fp_btn_big_1_hover" src="../assets/style/fp_card_1.png" width="320">
                    <img v-else src="../assets/style/fp_card_1_press.png" width="320">
                    <div v-if="!fp_btn_big_1_hover" class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 65px;">Learn About MetaBrains</div>
                    <div v-else class="my-title text-h6 text-weight-bold text-white" style="width:320px;position:absolute;top:53px;left:-6px;">Learn About MetaBrains</div>
                </q-btn>
            </div>
            </div>

            <!-- 
            About MetaGears MOBILE
            -->
            <!-- BTN -->
            <div class="lt-sm q-pa-md">
            <div style="width:320px;">
                <q-btn 
                    class="btn-helper" dense flat unelevated :value="fp_btn_big_2_hover"
                    @mouseover="fp_btn_big_2_hover = true" @mouseleave="fp_btn_big_2_hover = false"
                    @click="$router.push({ name: 'About', hash: '#meta-gears' })"

                >
                    <img v-if="!fp_btn_big_2_hover" src="../assets/style/fp_card_1.png" width="320">
                    <img v-else src="../assets/style/fp_card_1_press.png" width="320">
                    <div v-if="!fp_btn_big_2_hover" class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 65px;">Learn About MetaGears</div>
                    <div v-else class="my-title text-h6 text-weight-bold text-white" style="width:320px;position:absolute;top:53px;left:-6px;">Learn About MetaGears</div>
                </q-btn>
            </div>
            </div>

            
            <!-- 
            About MetaStadia MOBILE
            -->
            
            <!-- BTN -->
            <div class="lt-sm q-pa-md">
            <div style="width:320px;">
                <q-btn 
                    class="btn-helper" dense flat unelevated :value="fp_btn_big_3_hover"
                    @mouseover="fp_btn_big_3_hover = true" @mouseleave="fp_btn_big_3_hover = false"
                    @click="$router.push({ name: 'About', hash: '#meta-games' })" 
                >
                    <img v-if="!fp_btn_big_3_hover" src="../assets/style/fp_card_1.png" width="320">
                    <img v-else src="../assets/style/fp_card_1_press.png" width="320">
                    <div v-if="!fp_btn_big_3_hover" class="my-title text-h6 text-weight-bold text-secondary" style="width:320px;position:absolute;top: 65px;">Learn About MetaStadia</div>
                    <div v-else class="my-title text-h6 text-weight-bold text-white" style="width:320px;position:absolute;top:53px;left:-6px;">Learn About MetaStadia</div>
                </q-btn>
            </div>
            </div>

        </div>
        <div class="q-pa-xl"/>

    </q-page>        
</template>

<script>
const intro = [
	{
		"section": 
		[
			"Hi there, I'm Ave..",
			"I will guide you in your journey through Cyberspace!",
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
			"Please read the about sections to learn more about MetaBrainz IO.", "Tap here to proceed...","","","","",""
		]
	}
]

import { reactive, toRefs, ref } from 'vue'

export default {
name: 'Home',
    components: {
    // Content,
    },

    setup(){

        const content = reactive({
            ave_msg: [],
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
            msg_intro_t:"MetaBrainz IO",
            msg_intro_0:"Brain Meets Meta",
            msg_intro_1:"We are developing Digital Brains and Gears ' NFT's ' which provides access to RAW on/off-chain COMPUTING POWER and ALGORITHMS during Games.",
            msg_intro_2:"Release your META powers and amp up your game!",
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

