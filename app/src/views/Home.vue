<template>
    <q-page class="q-pa-lg">

        <!-- CONTENT: LANDING 
            style="border: 1px solid red;"
        -->
        <div 
            class="row full-width justify-evenly"
        >
            <!-- 
            CONTENT LEFT - DEFAULT
                style="border: 1px solid yellow;"
            -->
            <div 
                class="gt-xs col"
            >
                <!-- TITLE 
                    style="border: 1px solid green;"
                -->
                <div
                    align="center" class="row justify-center"
                >
                    <div class="gt-md my-title text-h1 text-weight-bold text-white">
                        {{msg_intro_t}}
                    </div>

                    <div class="lt-lg my-title text-h2 text-weight-bold text-white">
                        {{msg_intro_t}}
                    </div>
                </div>

                <div class="q-py-md"></div>
                
                <!-- SUBTITLE 
                    style="border: 1px solid green;"
                -->
                <div
                    align="center" class="row justify-center"
                >
                    <div class="gt-md text-h3 text-cyan-12">
                        {{msg_intro_0}}
                    </div>
                    <div class="lt-lg text-h4 text-cyan-12">
                        {{msg_intro_0}}
                    </div>
                </div>

                <div class="q-py-md"></div>

                <!-- TITLE BODY 
                    style="border: 1px solid green;"
                -->
                <div
                    align="center" class="row"
                >
                    <div class="gt-md text-h5 text-white">
                        {{msg_intro_1}}
                    </div>
                    <div class="lt-lg text-h6 text-white">
                        {{msg_intro_1}}
                    </div>
                </div>

                <div class="q-py-md"></div>

                <!-- ACTIONS 
                    style="border: 1px solid green;"
                -->
                <div
                    class="gt-xs row"
                    align="center"
                >
                    <div class="col">
                        <q-btn 
                            class="q-pa-md text-dark"
                            label="Get Your MetaGears"
                            to='/metagear'
                            style="width:100%; max-width:275px;background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;">
                        </q-btn>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="col">
                    <q-btn
                        class="q-pa-md text-dark"
                        label="Activate Your MetaBrain"
                        to='/metabrain'
                        style="width:100%; max-width:275px;background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;">
                    </q-btn>
                    </div>
                </div>

                <!-- ACTIONS 
                    style="border: 1px solid green;"
                -->
                <div
                    class="lt-sm row"
                    align="center"
                >
                    <div class="col">
                        <q-btn 
                            class="q-pa-md text-dark"
                            label="Get some MetaGears"
                            to='/metagear'
                            style="width:100%; max-width:275px;background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;">
                        </q-btn>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="col">
                    <q-btn
                        class="q-pa-md text-dark"
                        label="Activate Your MetaBrain"
                        to='/metabrain'
                        style="width:100%; max-width:275px;background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;">
                    </q-btn>
                    </div>
                </div>
            </div>
            <!-- 
            CONTENT LEFT - MOBILE
            -->
            <div class="lt-sm flex justify-left">
                <div class="my-title text-h3 text-weight-bold text-white">
                    {{msg_intro_t}}
                </div>
                <div class="q-py-lg"/>
                <div class="text-h5 text-cyan-12">
                    {{msg_intro_0}}
                </div>
                <div class="q-py-md"></div>
                <div class="text-subtitle2 text-white">
                    {{msg_intro_1}}
                    <div class="q-py-md"/>
                </div>
                <div class="q-py-md"/>
                <div class="col">
                    <q-btn 
                        class="col q-pa-md text-dark"
                        label="Get Your MetaGears"
                        to='/metagear'
                        style="background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;">
                    </q-btn>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div class="col">
                <q-btn
                    class="q-pa-md text-dark"
                    label="Activate you MetaBrain"
                    to='/metabrain'
                    style="background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;">
                </q-btn>
                </div>
            </div>

            <!-- CONTENT RIGHT - DEFAULT 
                style="border: 1px solid yellow;"
            -->
            <div 
                class="gt-md col flex justify-center"
            >
                <!-- AVE -->
                <div class="col q-pa-xl" align="right">
                    <div>
                        <img 
                            src="../assets/ave.gif"
                            style="width:15rem;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div class="col q-py-xl" align="left"
                    style="width:100%; max-width:275px;"
                >
                    <div v-for="msg in ave_msg" :key="msg" class="my-text text-subtitle1 text-cyan-13">
                        {{msg}}
                    </div>
                </div>
            </div>

            <!-- CONTENT RIGHT - MOBILE MD
            -->
            <div 
                style="border: 1px solid yellow;"
                class="gt-xs lt-lg col flex"
            >
                <!-- AVE -->
                <div class="col q-pa-xl" align="left">
                    <div>
                        <img 
                            src="../assets/aveanimated.gif"
                            style="width:10rem;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div class="col q-py-xl" align="left"
                    style="width:100%; max-width:175px;"
                >
                    <div v-for="msg in ave_msg" :key="msg" class="my-text text-body2 text-cyan-13">
                        {{msg}}
                    </div>
                </div>
            </div>
            <!-- CONTENT RIGHT - MOBILE SM
                style="border: 1px solid yellow;"
            -->
            <div 
                class="lt-sm col flex justify-center"
            >
                <!-- AVE -->
                <div class="col q-pa-xl" align="left">
                    <div>
                        <img 
                            src="../assets/aveanimated.gif"
                            style="width:8rem;"
                        />
                    </div>
                </div>
                <!-- AVE SPEAKS -->
                <div class="col q-py-xl" align="left"
                    style="width:100%; max-width:175px;"
                >
                    <div v-for="msg in ave_msg" :key="msg" class="my-text text-body2 text-cyan-13">
                        {{msg}}
                    </div>
                </div>
            </div>

        </div>
        <div class="q-py-md"/>

        <!-- CONTENT: ABOUT   -->
        <div 
            class="row items-start"
        >
           <!-- 
            About MetaBrains DEFAULT
           -->
            <div 
                class="gt-xs col flex justify-center"
                @click="$router.push({ name: 'About', hash: '#meta-brains' })"
            >
                <div class="q-pa-md">
                    <q-card 
                        class="transparent"
                    >
                        <q-card-section class="learn-more-card q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-py-lg"></div>
                            <div class="my-title text-h4">Learn about MetaBrains!</div>
                            <div class="q-py-lg"></div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            <!-- 
            About MetaBrains MOBILE
            -->
            <div 
                class="lt-sm flex justify-center"
                @click="$router.push({ name: 'About', hash: '#meta-brains' })"
            >
                <div class="q-pa-md">
                    <q-card 
                        class="transparent"
                    >
                        <q-card-section class="learn-more-card q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-py-lg"></div>
                            <div class="my-title text-h4">Learn about MetaBrains!</div>
                            <div class="q-py-lg"></div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <!-- 
            About MetaGears DEFAULT
            -->
            <div 
                class="gt-xs col flex justify-center"
                @click="$router.push({ name: 'About', hash: '#meta-gears' })"
            >
                <div class="q-pa-md">
                    <q-card 
                        class="transparent"
                    >
                        <q-card-section class="learn-more-card q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-py-lg"></div>
                            <div class="my-title text-h4">Learn about MetaGears!</div>
                            <div class="q-py-lg"></div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            <!-- 
            About MetaGears MOBILE
            -->
            <div 
                class="lt-sm flex justify-center"
                @click="$router.push({ name: 'About', hash: '#meta-gears' })"
            >
                <div class="q-pa-md">
                    <q-card 
                        class="transparent"
                    >
                        <q-card-section class="learn-more-card q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-py-lg"></div>
                            <div class="my-title text-h4">Learn about MetaGears!</div>
                            <div class="q-py-lg"></div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <!-- 
            About MetaGames DEFAULT
            Scroll Clamp
            -->
            <div 
                class="gt-xs col flex justify-center"
                @click="$router.push({ name: 'About', hash: '#scroll-clamp' })" 
            >
                <div class="q-pa-md">
                    <q-card 
                        class="transparent"
                    >
                        <q-card-section class="learn-more-card q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-py-lg"></div>
                            <div class="my-title text-h4">Learn about MetaGames!</div>
                            <div class="q-py-lg"></div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            <!-- 
            About MetaGames MOBILE
            -->
            <div 
                class="lt-sm flex justify-center"
                @click="$router.push({ name: 'About', hash: '#meta-games' })"
            >
                <div class="q-pa-md">
                    <q-card 
                        class="transparent"
                    >
                        <q-card-section class="learn-more-card q-px-lg col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-py-lg"></div>
                            <div class="my-title text-h4">Learn about MetaGames!</div>
                            <div class="q-py-lg"></div>
                        </q-card-section>
                    </q-card>
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
			"I'm glad you found us!",
		]
	},
    {
		"section": 
		[
			"Good question. Today's date is exactly 1 januari 2031!",
		]
	},
    {
		"section": 
		[
			"95% of us are currently merged with Cyberspace, also reffered to as the Metaverse..",
            ""
		]
	},
    {
		"section": 
		[
			"Physically most of us reside on earth, though I've heard a new economy on Mars is being build as we speak",
            ""
		]
	},
	{
		"section": 
		[
			"How did we get here you ask?",
			"Simply put, technology progressed a bit faster than time itself..",
            ""
		]
	},
	{
		"section": 
		[
			"It looks like your mind isn't connected to a MetaBrain interface yet..",
		]
	},
	{
		"section": 
		[
			"Please read the about sections to learn more about how to activate to your personal MetaBrain.",
            ""
		]
	},
    {
		"section": 
		[
			"Don't wait.. you don't want to be left behind now do you?",
            "..."
		]
	}
]

import { reactive, toRefs } from 'vue'

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
            }, 1000)
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
            }, 2500)
        }
        speakSection();

        return{
            ... toRefs(content),
            msg_intro_t:"MetaBrainz",
            msg_intro_0:"Where Brain Meets Meta",
            msg_intro_1:"MetaBrainz presents a collection of NFT's (MetaBrains) that provides access to off-chain computing resources that are utilized in MetaGames. The unique stats of each MetaBrain determines how and which algorithms are used to solve a game.",
        }
    }
}
</script>
<style lang="scss">
.items-card{
    width:100%;
}

.learn-more-card{
    color:cyan;
    &:hover{
        background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;
        color:#030444;
        cursor:pointer;
    }
}
</style>

