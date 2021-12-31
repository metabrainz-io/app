<template>
    <section>
        <div class="text-h5 text-accent">MI Vaxx, MI Caps, MI Tabs</div>
        <!-- EARLY BIRD ITEMS CARD -->
        <div class="q-pa-md row items-start q-gutter-md">
            <ItemCard
                v-for="token in items_claimable"
                :key="token.tid"
                :token="token"
                v-on:popup-token-claim="popup_claim_token($event)"
            />
            <q-card-section v-if="loading">
                <q-circular-progress
                    indeterminate
                    size="50px"
                    :thickness="0.6"
                    color="accent"
                    center-color="grey-8"
                    class="q-ma-md"
                />
            </q-card-section>
        </div>



        <div class="text-h5 text-accent">Claimable Cybermeds</div>
        <!-- CLAIMABLE ITEMS CARD -->
        <div class="q-pa-lg row items-start q-gutter-md">
            <ItemCard
                v-for="token in items_claimable"
                :key="token.tid"
                :token="token"
                v-on:popup-token-claim="popup_claim_token($event)"
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



        <!-- CLAIMABLE ITEMS POPUP -->
        <q-dialog v-model="token_claim">
            <q-card>
                <!-- item name -->
                <q-card-section>
                    <template v-slot:avatar>
                        <q-icon name="redeem" color="primary" />
                    </template>
                    <div class="text-h6">{{token.name}}</div>
                </q-card-section>
                <!-- item descr -->
                <q-card-section class="q-pt-none">
                    {{token.descr}} 
                </q-card-section>
                <q-card-section class="q-pt-none">
                Claim this item!
                </q-card-section>
                <!-- btn, action confirm -->
                <q-card-actions align="right">
                    <q-btn 
                        flat 
                        label="Claim now" 
                        color="primary"
                        v-close-popup
                        @click="claim_token(token)"/>
                </q-card-actions>
            </q-card>
        </q-dialog>

        <!-- ITEMS CARD -->
        <div class="text-h5 text-accent">All Cybermeds</div>
        <div class="q-pa-md row items-start q-gutter-md">
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
        <!-- ITEMS POPUP -->
        <q-dialog v-model="token_view">
            <q-card>
                <!-- item name -->
                <q-card-section>
                    <template v-slot:avatar>
                        <q-icon name="open_in_new" color="primary" />
                    </template>
                    <div class="text-h6">{{token.name}}</div>
                </q-card-section>
                <!-- item descr -->
                <q-card-section class="q-pt-none">
                    {{token.descr}}
                </q-card-section>
                <q-card-section class="q-pt-none">
                    View on opensea!
                </q-card-section>
                <!-- btn, action confirm -->
                <q-card-actions align="right">
                    <q-icon 
                        name="open_in_new" 
                        color="primary"
                        style="font-size: 2rem;"
                        v-close-popup
                        @click="view_token(token)"
                        />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </section>
</template>


<script>
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

import ItemCard from "./items/ItemCard.vue"
import { fetchItems, updateItems } from "../api.js";

// import items from "../data/items.js"

export default{
    name: 'ContentItems',
    components:{
        ItemCard
    },
    setup(){
        const store = useStore();
        const state = reactive({
            items: [],
            items_claimable: [],

            token: null,
            token_view: false,
            token_claim: false,

            loading: true
        });
        // Fetch items: initial (on page load)
        fetchItems(state);
        // state.items = items;
        // state.items_claimable = items;


        // Fetch items: continous polling if items did not yet load (due to server)
        // setInterval(()=>{
        //     if(state.loading == true)
        //         fetchItems(state);
        // }, 10000)
        // Fetch changes: polling updates (only fetch if not loaded)
        setInterval(()=>{
            // TODO:
            // Poll server n (2/3) minutes to find if something has changed
            // console.log("Polling server for any changes")
        
            updateItems(state);
            // state.items_claimable = items;
        }, 25000)

        return{
            ... toRefs(state),
            // FIXME: Use qdrawer menu for this, use popup for confirmations
            popup_claim_token: (token)=> {
                state.token = token;
                state.token_claim = true
            },
            // FIXME: Use qdrawer menu for this, use popup for confirmations
            popup_view_token: (token)=> {
                state.token = token;
                state.token_view = true
            },
            claim_token: (token)=>{
                // NOTE: needs permission to login
                // is user authenticated?
                if(!store.getters.isAuthenticated){
                    // TODO: proceed to login
                    console.log("Err: User not authenticated");
                    alert("Could not claim token! Either the token is not claimable or your unauthorized.")
                    
                    store.dispatch('refresh_session_action');
                    store.dispatch('force_destroy_session_action');
                    
                    return;
                }

                // TODO: process claim (using the users c_addr)
                store.dispatch('claim_action', token)
                .then((res)=>{
                    if(res){
                        // popup message:
                        // -    Congratulations!! Your claim has been received!
                        // -    The token will be available as soon as the date ends
                        console.log("Claimed token: "+token.name)
                        alert("Congratulations!! 🎉🎉🎉\nClaim '"+token.name+"' has been processed ✅\nIt will be linked to your address when the airdrop happens 🔗\nUntill then, stay healthy!!💊")
                    }else{
                        console.log("Err: Could not claim token, sometin wongy wong!")
                        alert("Could not claim token! Either the token is not claimable or your unauthorized.")
                    }
                })

            },
            view_token: (token)=>{
                console.log("View token: "+token.name)
            },
        }
    }
}
</script>

<style>
.items-card{
    width:100%;
    max-width:175px;
}
</style>
