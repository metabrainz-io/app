<template>
    <section>
        <!-- ITEMS CARD -->
        <div class="q-pa-xl row justify-center q-gutter-md">
            <div class="flex justify-center" v-if="items_claimable.length > 0">
                <ItemCard
                    v-for="token in items_claimable"
                    :key="token.tid"
                    :token="token"
                    v-on:popup-token-view="popup_claim_token($event)"
                />
                <!--
                <q-card-section v-if="tokens_loading">
                    <q-circular-progress
                        indeterminate
                        size="50px"
                        :thickness="0.6"
                        color="purple-13"
                        center-color="grey-8"
                        class="q-ma-md"
                    />
                </q-card-section>
                -->
            </div>
            <div v-else>
                <q-card-section>
                    <div align="center" class="my-text text-white text-h5">
                        <q-spinner-gears 
                            color="secondary" size="1.25em"
                        />
                        In progress..
                    </div>
                    <div class="q-py-md"/>
                <div align="center" class="my-text text-white text-subtitle2">
                
                    Follow us on twitter to stay updated!
                    &nbsp;&nbsp;
                    <a tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
                        <q-icon color="white" size="1.5em" name="fab fa-twitter"/>
                    </a>
                </div>
                </q-card-section>
            </div>
        </div>

        <!-- ITEMS MAIN POPUP -->
        <q-dialog v-model="token_claim" transition-show="scale" transition-hide="scale">
            <q-card flat class="my-text bg-grey-10 no-border-radius" style="width:384px;border: 2px solid black">
                <div class="">
                    <q-card-section>
                        <template v-slot:avatar>
                            <q-icon name="open_in_new" color="primary" />
                        </template>
                        <div align="center" class="text-h6 text-white">{{token.name}}</div>
                        <q-btn
                            flat
                            color="white"
                            icon="close"
                            class="absolute"
                            style="top: 6px; right: 6px; transform: translateY(25%);"
                            v-close-popup
                        />
                    </q-card-section>

                    <q-card-section class="bg-black">
                        <div 
                            class="row justify-center"
                        >
                            <q-img :src="token.img_src" width="256px" height="256px"/>
                        </div>
                        <q-btn
                            icon="bolt"
                            class="absolute text-secondary"
                            style="bottom: 0; left: 16px; transform: translateY(25%);background-color:#424242;"
                            @click="stats_view = true"
                        />
                    </q-card-section>

                    <q-card-section >
                        <div class="row">
                            <div class="col-auto text-white text-subtitle1 text-weight-bolder q-pt-md">
                                Description
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-auto text-secondary text-caption text-weight-bold q-pt-md row wrap items-center">
                                <div v-if="token.descr.length>claim_descr_maxlen">
                                    {{token.descr.substring(0,claim_descr_maxlen)}}..
                                </div>
                                <div v-else>
                                    {{token.descr.substring(0,claim_descr_maxlen)}}
                                </div>
                            </div>
                        </div>
                    </q-card-section>

                    <q-separator />

                    <div class="my-title text-white text-subtitle1">
                        <q-item clickable @click="view_token(token)">
                            <q-item-section>
                            <q-item-label>
                                <q-img style="left: 2px;" src="@/assets/style/logo_opensea_trans_white.png" color="white" width="24px"/>
                                &nbsp;&nbsp;
                                Opensea&nbsp;&nbsp;
                            </q-item-label>
                            </q-item-section>
                        </q-item>
                        </div>
                        <div class="my-title text-grey-8 text-subtitle1">
                        <!--<q-item clickable @click="validate_claim_toggle(token)">-->
                        <q-item>
                            <q-item-section>
                                <q-item-label>
                                    <q-icon name="diamond" size="1.75em"/>&nbsp;&nbsp;
                                    Claim&nbsp;&nbsp;&nbsp;&nbsp; [Comming very soon]
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </div>
                
                    <q-card-section v-if="show_validation_list" class="text-white">
                        <q-card-section class="bg-grey-10 text-h6 text-white text-cyan text-weight-bold" align="center" v-if="token.claimable">
                            <div v-if="token.claimable_amount > 0"> 
                                {{token.claimable_amount}} left to claim
                            </div>
                            <div v-else> 
                                {{token.claimable_amount}} left to claim
                            </div>
                        </q-card-section>
                        <div class="q-py-sm"/>
                        <q-item-section>
                            <q-item-label>
                                <div v-if="metaInstalled">
                                    <q-avatar 
                                        size="1.5rem" color="teal-14" text-color="white" icon="done" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Metamask installed
                                </div>
                                <div v-else>
                                    <q-avatar 
                                        size="1.5rem" color="red-14" text-color="white" icon="close" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Metamask is not installed
                                </div>
                                <div class="q-py-sm"></div>
                                <div v-if="isAuthenticated">
                                    <q-avatar 
                                        size="1.5rem" color="teal-14" text-color="white" icon="done" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Connected to MetaBrainz.io
                                </div>
                                <div v-else>
                                    <q-avatar 
                                        size="1.5rem" color="red-14" text-color="white" icon="close" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Not connected to MetaBrainz.io
                                </div>
                                <div class="q-py-sm"></div>
                                <div v-if="token.claimable_amount > 0">
                                    <q-avatar 
                                        size="1.5rem" color="teal-14" text-color="white" icon="done" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Token claim active
                                </div>
                                <div v-else>
                                    <q-avatar 
                                        size="1.5rem" color="red-14" text-color="white" icon="close" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Token claim ended
                                </div>
                                <div class="q-py-sm"></div>
                                <div v-if="!token_claim_success">
                                    <q-avatar 
                                        size="1.5rem" color="teal-14" text-color="white" icon="done" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Token unclaimed by user
                                </div>
                                <div v-else>
                                    <q-avatar 
                                        size="1.5rem" color="red-14" text-color="white" icon="close" 
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Token already claimed by user
                                </div>
                            </q-item-label>
                        </q-item-section>
                        <q-card-actions align="center">
                            <q-btn
                                v-if="permitted_claim"
                                name="open_in_new" 
                                color="teal"
                                label="claim now"
                                @click="claim_token_request()"
                                v-close-popup
                            >
                            </q-btn>
                            <q-btn
                                v-else
                                name="open_in_new" 
                                color="grey"
                                label="claim now"
                                v-close-popup
                                disable
                            >
                            </q-btn>
                            <div class="q-py-lg"/>
                    </q-card-actions>
                </q-card-section>
                </div>
            </q-card>
        </q-dialog>

         <!-- ITEMS STATS POPUP -->
        <q-dialog v-model="stats_view">
            <q-card 
                flat class="bg-grey-10 text-white"
                style="width:384px;"
            >
                <q-card-section class="q-pt-none bg-black">
                    <div class="q-py-sm"/>
                    <div v-for="atr in token.attributes" :key="atr">
                        <div class="my-title text-caption text-white">
                            <q-item>
                                <q-item-section>
                                    <q-item-label>
                                        {{atr.trait_type.replace("_", " ")}} &nbsp;&nbsp;
                                    </q-item-label>
                                    <div class="q-py-xs"/>
                                    <q-linear-progress class="bg-grey-10" size="15px" :value="atr.value * 0.01" color="secondary">
                                    </q-linear-progress>
                                </q-item-section>
                            </q-item>
                        </div>
                        <div class="q-py-xs"/>
                    </div>

                </q-card-section>
            </q-card>
        </q-dialog>

        <!-- ITEMS CHALLENGE POPUP -->
        <q-dialog 
            v-model="token_claim_challenge" 
            transition-show="slide-down"
            transition-hide="slide-down"
            persistent 
        >

            <q-card class="my-text bg-grey-10 text-cyan">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6 text-white">Challenge</div>
                    <q-space />
                    <q-btn icon="close" color="cyan" flat round dense @click="abortRequest()" />
                </q-card-section>

                <q-card-section>
                    <q-card-actions align="center">
                        <div class="q-pa-md" style="border: 1px solid cyan; border-radius: 4px;">
                            <q-list>
                                <div class="fit row flex justify-start">
                                    <div class="q-px-sm col flex justify-center" style="max-width:100px;">
                                        <img src="../assets/ave.gif"/>
                                    </div>
                                    <div class="q-px-sm col text-subtitle1 text-cyan text-weight-bold">
                                        <strong>{{token_claim_questions[token_claim_questions_index_cur][0]}}</strong>
                                    </div>
                                </div>

                                <div class="q-py-sm"/>
                                <q-separator color="cyan"/>
                                <div class="q-py-sm"/>
                                <q-item 
                                    v-for="item in token_claim_questions[token_claim_questions_index_cur][1]" 
                                    :key="item"
                                    tag="label" v-ripple
                                    class="item-answer"
                                >
                                    <q-item-section clickable v-model="answer" @click="proceed(item)">
                                        <q-item-label class="flex justify-center">{{item}}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                            <div class="q-py-sm"/>
                            <q-separator color="cyan"/>
                            <div class="q-py-sm"/>
                            <div class="fit row justify-evenly">
                                <div v-if="token_claim_questions_index_cur+1 != token_claim_questions_index_max" 
                                    class="text-h6 text-grey-5"
                                >
                                    {{token_claim_questions_index_cur+1}} / {{token_claim_questions_index_max}}
                                </div>
                                <div v-else class="text-h6 text-cyan text-weight-bolder">
                                    <strong>{{token_claim_questions_index_cur+1}} / {{token_claim_questions_index_max}}</strong>
                                </div>
                                <!--
                                <q-btn v-if="!token_claim_submit" disable color="grey" @click="proceed(answer)">Submit</q-btn>
                                <q-btn v-else color="green" @click="proceed(answer)">Submit</q-btn>
                                -->
                            </div>
                        </div>


                    </q-card-actions>
                </q-card-section>
            </q-card>
        </q-dialog>

        <q-dialog v-model="token_claim_abort_dialog" persistent>
            <q-card class="bg-grey-10 text-h6 text-white text-weight-regular">
                <q-card-section>
                    Are you sure you want to abort claim process?
                </q-card-section>
                <q-card-section>
                    <div class="fit row justify-evenly">
                        <q-btn class="" color="red-14" @click="abortClaim(true)">Yes</q-btn>
                        <q-btn class="" color="teal" @click="abortClaim(false)">No</q-btn>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </section>
</template>


<script>
import { reactive, toRefs, ref } from 'vue';
import { useStore } from 'vuex';
import ItemCard from './items/ItemCard.vue';
// import { updateItems } from "@/api/api";
import { assets } from "@/api/api";
import { openURL } from 'quasar'
export default{
    name: 'ClaimableItems',
    components:{
        ItemCard,
    },
    setup(){

        const store = useStore();
        const state = reactive({
            loading: assets.loading,
            items_claimable: assets.items_claimable,
            token: null,
            token_view: false,
            stats_view: false,
            token_claim: false,
            token_claim_loading: false,
            token_claim_challenge: false,
            token_claim_questions: [],
            token_claim_answers: [],
            token_claim_questions_index_cur: 0, // Always start with the 0th question
            token_claim_questions_index_max: 0,
            token_claim_abort_dialog: false,
            show_validation_list: false,

            // Persist untill logout
            token_claim_success: false,
            token_claim_submit: false,
            permitted_claim: false,
            isAuthenticated: false,
            metaInstalled: false,
            tokens_loading: true,
            userdata: []
        });

        // setInterval(()=>{
        //     updateItems(state);
        // }, 50000)
        // updateItems(state);

        function abort_claim(){
            state.token_claim_abort_dialog = false;
            state.token_claim_challenge = false;
            state.token_claim_questions_index_cur = 0;
            state.token_claim_questions_index_max = 0;
            state.token_claim_questions = [];
            state.token_claim_answers = [];
        }
        function finalize_claim(){
            store.dispatch("claim_action", state);
        }

        // Initial values
        const claim_descr_maxlen = 64;
        const answer = ref("")

        // State values
        state.userdata = store.getters.userdata;

        return{
            ... toRefs(state),
            view_token: (token)=>{
                let url = token.links[0]["url"];
                console.log("Opening url: "+url)
                openURL(url);
            },
            popup_claim_token: (token)=> {
                // Clear old vals
                state.token_claim_success = false;

                state.token = token;
                state.token_claim = true
                state.isAuthenticated = store.getters.isAuthenticated;
                state.metaInstalled = store.getters.metaInstalled;
                state.userdata = store.getters.userdata;

                try{
                    state.userdata['claims'].forEach((claimed)=>{
                        console.log("to claim: "+token.tid+", has claimed: "+claimed.tid)
                        if(token.tid == claimed.tid){
                            state.token_claim_success = true; //Seems the token is already claimed
                            console.warn("Already existing claim found!");
                            return;
                        }
                    });
                }catch(e){
                    state.token_claim_success = false;
                }

                if(state.isAuthenticated && !state.token_claim_success && state.token.claimable_amount > 0){
                    state.permitted_claim = true;
                }
            },
            claim_token_request: ()=>{
                // Clear any previous settings
                state.token_claim_abort_dialog = false;

                // Start claim process
                store.dispatch("claim_request_action", state);
            },
            validate_claim_toggle: (token)=>{
                state.show_validation_list = !state.show_validation_list;
                if(state.show_validation_list){
                    alert("⚠️ Your about to claim: "+token.name)
                }
            },
            connect:() =>{
                store.dispatch("connect_action", state);
            },
            abortRequest: ()=>{
                state.token_claim_abort_dialog = true;
            },
            abortClaim: (quit)=>{
                if(quit){
                    state.token_claim_submit = false;
                    abort_claim()
                }else{
                    state.token_claim_abort_dialog = false;
                }
            },
            proceed:(answer)=>{
                console.log(answer)
                state.token_claim_submit = false;
                const cur = state.token_claim_questions_index_cur;
                const max = state.token_claim_questions_index_max-1;
                state.token_claim_answers.push(answer);
                if(cur < max){
                    state.token_claim_questions_index_cur++;
                    if(cur+1 == max)
                        state.token_claim_submit = true;
                }else{
                    finalize_claim();
                    abort_claim();
                    // TODO: Show processing bar somewhere
                }
            },
            claim_descr_maxlen,
            answer,
            abort_claim,
            finalize_claim
        }
    }
}
</script>

<style lang="scss" >
.items-card{
    width:100%;
    max-width:175px;
}
.link-view_token:hover{
    cursor: pointer;
}

.item-answer{

    &:hover{
        color: white;
        font-size: 1.1rem;
    }

    &:active{
        background-color: green;
        color: white;
        font-weight: bold;
        font-size: 1.3rem;
    }
}
</style>
