<template>
    <q-page class="q-pa-lg">

        <!-- CONTENT: INTRO -->
        <div 
            class="row items-start"
        >
            <!-- 
            Welcome DEFAULT
            -->
            <div class="gt-xs col flex justify-left">
                <div class="my-title text-h2 text-white">
                    {{msg_intro_t}}
                </div>
                <div class="q-py-lg"/>
                <div class="text-h4 text-cyan-12">
                    {{msg_intro_0}}
                </div>
                <div class="q-py-md"></div>
                <div class="text-subtitle1 text-white">
                    {{msg_intro_1}}
                    <div class="q-py-md"/>
                    {{msg_intro_2}}                  
                </div>
            </div>
            <!-- 
            Welcome MOBILE
            -->
            <div class="lt-sm flex justify-left">
                <div class="my-title text-h3 text-white">
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
                    {{msg_intro_2}}                  
                </div>
                <div class="q-py-md"/>
            </div>

            <!-- Get metagear -->
            <div 
                class="col flex justify-center"
            >
                <div class="q-pa-md">
                <q-card 
                    class="transparent text-white"
                >
                    <q-card-section 
                        style="background-color:#01031a;"
                        align="center">
                        <div>
                            <img 
                                src="../assets/MGCaps_256.gif"
                                style="width:3.75rem;"
                            />
                            &nbsp;&nbsp;
                            <img 
                                src="../assets/MGVaxx_256.gif"
                                style="width:3.75rem;"
                            />
                            &nbsp;&nbsp;
                            <img 
                                src="../assets/MGCaps_256.gif"
                                style="width:3.75rem;"
                            />
                            
                            <q-space></q-space>
                        </div>
                    </q-card-section>
                    <q-card-section 
                        style="background-color:#01031a;"
                        align="center"
                    >
                            <q-btn 
                                class="text-dark"
                                label="Get MetaGears"
                                to='/metagear'
                                style="background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;">
                              </q-btn>
                    </q-card-section>
                </q-card>
                </div>
            </div>
        </div>
        <div class="q-py-xl"/>

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
            -->
            <div 
                class="gt-xs col flex justify-center"
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
    </q-page>
</template>

<script>
export default {
name: 'Home',
    components: {
    // Content,
    },
    setup(){
        return{
            msg_intro_t:"Welcome to MetaBrainz.io",
            msg_intro_0:"Where Brainz are merged into the Metaverse",
            msg_intro_1:"Here at MetaBrainz.io you can mint your own MetaBrain NFT for free to access MetaGames and compete for prices. MetaGames can be played when a MetaBrain has been activated.",
            msg_intro_2:"To initiate the activation process of your MetaBrain, integrate one of the available MetaGears. MetaGears will enhance your MetaBrain's intelligence, speed, power and much more. These stats are reflected by real computing resources that will be available based on your unique MetaBrain stats."
            
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

