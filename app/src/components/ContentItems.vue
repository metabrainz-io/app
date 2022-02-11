<template>
    <section>
        <!-- ITEMS CARD -->
        <div class="q-pa-xl row justify-center q-gutter-md">
            <div class="flex justify-center" v-if="items.length > 0">
                <ItemCard
                    v-for="token in items"
                    :key="token.tid"
                    :token="token"
                    v-on:popup-token-view="popup_view_token($event)"
                />
                <q-card-section v-if="loading">
                    <q-circular-progress
                        indeterminate
                        size="50px"
                        :thickness="0.6"
                        color="purple-13"
                        center-color="grey-8"
                        class="q-ma-md"
                    />
                </q-card-section>
            </div>
            <div v-else>
                <q-card-section>
                    <div align="center" class="my-text text-white text-subtitle2">
                        Oops, No data retrieved from the server!<br/>
                        <div class="q-py-xs"/>
                        View our collection on opensea!
                        &nbsp;&nbsp;
                        <a tag="a" target="_blank" href="https://opensea.io/MetaBrainz">
                            <q-img src="@/assets/style/logo_opensea_trans_white.png" color="white" width="24px"/>
                        </a>
                    </div>
                </q-card-section>
            </div>
        </div>

        <!-- ITEMS MAIN POPUP -->
        <q-dialog v-model="token_view" transition-show="scale" transition-hide="scale">
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
                                <div v-if="token.descr.length>mint_descr_maxlen">
                                    {{token.descr.substring(0,mint_descr_maxlen)}}..
                                </div>
                                <div v-else>
                                    {{token.descr.substring(0,mint_descr_maxlen)}}
                                </div>
                            </div>
                        </div>
                    </q-card-section>

                    <q-separator />
                </div>

                <div class="q-py-xs"/>

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
                <q-separator />
                <div class="my-title text-grey-8 text-subtitle1">
                  <!--<q-item clickable @click="validate_mint_toggle(token)">-->
                  <q-item>
                    <q-item-section>
                        <q-item-label>
                            <q-icon name="diamond" size="1.75em"/>&nbsp;&nbsp;
                            Mint&nbsp;&nbsp;&nbsp;&nbsp; [Comming very soon]
                        </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>

                <q-card-section v-if="show_validation_list" class="text-white">
                    <q-card-section class="bg-grey-10 text-h6 text-white text-cyan text-weight-bold" align="center" v-if="token.claimable">
                        <div v-if="token.quantity_mintable > 0">
                            {{token.quantity_mintable}} left to mint
                        </div>
                        <div v-else> 
                            nothing left to mint
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
                            <div v-if="token.quantity_mintable <= 0">
                                <q-avatar 
                                    size="1.5rem" color="red-14" text-color="white" icon="close" 
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;No tokens left to mint
                            </div>
                        </q-item-label>
                    </q-item-section>

                    <q-card-actions align="center" class="row">
                        <q-form class="q-gutter-md">
                            <q-input
                                filled
                                type="number"
                                v-model="tokenAmount"
                                class="bg-white"
                                label="Amount"
                        />
                        </q-form>
                        <div class="q-py-xl"/>
                        <q-btn
                            v-if="permitted_mint"
                            name="open_in_new"
                            color="teal"
                            label="Mint now"
                            v-close-popup
                            @click="mint_token(token)"
                        >
                        </q-btn>
                        <q-btn
                            v-else
                            name="open_in_new" 
                            color="grey"
                            label="Mint now"
                            v-close-popup
                            disable
                        >
                        </q-btn>
                        <div class="q-py-lg"/>
                    </q-card-actions>
                </q-card-section>
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

    </section>
</template>


<script>
import { reactive, toRefs, ref } from 'vue'
import { useStore } from 'vuex';
import ItemCard from "./items/ItemCard.vue"
import { assets } from "@/api/api";
import { openURL } from 'quasar'
import { mintNFT } from '@/contract/util/interact'

export default{
    name: 'ContentItems',
    components:{
        ItemCard
    },
    setup(){
        const store = useStore();
        const state = reactive({
            loading: assets.loading,
            items: assets.items,

            token: null,
            token_view: false,
            stats_view: false,
            token_claim: false,
            show_validation_list: false,

            // Persist untill logout
            token_mint_success: false,
            token_mint_submit: false,
            permitted_mint: true,
            isAuthenticated: false,
            metaInstalled: false,
            tokens_loading: true,
            userdata: []
        });
        const tokenAmount   = ref(null)

        

        // Fetch items: initial (on page load)
        
        // state.items = items;
        // state.items_claimable = items;


        // Fetch items: continous polling if items did not yet load (due to server)
        // setInterval(()=>{
        //     if(state.loading == true)
        //         fetchItems(state);
        // }, 10000)
        // Fetch changes: polling updates (only fetch if not loaded)

        // setInterval(()=>{
        //     // TODO:
        //     // Poll server n (2/3) minutes to find if something has changed
        //     // console.log("Polling server for any changes")
        
        //     updateItems(state);
        //     // state.items_claimable = items;
        // }, 25000)

        // Initial values
        const mint_descr_maxlen = 64;

        // State values
        state.userdata = store.getters.userdata;

        return{
            ... toRefs(state),
            // FIXME: Use qdrawer menu for this, use popup for confirmations
            popup_view_token: (token)=> {

                // Clear old vals
                state.token_mint_success = false;

                state.token = token;
                state.token_mint = true
                state.isAuthenticated = store.getters.isAuthenticated;
                state.metaInstalled = store.getters.metaInstalled;
                state.userdata = store.getters.userdata;

                state.token = token;
                state.token_view = true
            },
            view_token: (token)=>{
                let url = token.links[0]["url"];
                console.log("Opening url: "+url)
                openURL(url);
            },
            validate_mint_toggle: (token)=>{
                state.show_validation_list = !state.show_validation_list;
                if(state.show_validation_list){
                    alert("⚠️ Your about to mint: "+token.name)
                }
            },
            mint_token: (token) =>{
                console.log(token.tid);
                console.log(tokenAmount);

                state.userdata = store.getters.userdata;
                mintNFT(0, 1).then((out)=>{
                    // alert(out);
                    console.log(out);
                })
            },
            tokenAmount,
            mint_descr_maxlen
        }
    }
}
</script>

<style>
.items-card{
    width:100%;
    max-width:175px;
}
.link-view_token:hover{
    cursor: pointer;
}
</style>
