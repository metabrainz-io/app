<template>
    <section>
        <div class="text-h5 text-accent">MI Vaxx, MI Caps, MI Tabs</div>
        <!-- ITEMS CARD -->
        <div class="text-h5 text-accent">All Integratables</div>
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
                        class="link-view_token"
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
import ItemCard from "./items/ItemCard.vue"
import { fetchItems, updateItems } from "../api.js";
import { openURL } from 'quasar'

export default{
    name: 'ContentItems',
    components:{
        ItemCard
    },
    setup(){
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
            popup_view_token: (token)=> {
                state.token = token;
                state.token_view = true
            },
            view_token: (token)=>{
                let name = token.name;
                let url = token.links[0]["url"];
                console.log("Viewing token: "+name)
                openURL(url);
            }
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
