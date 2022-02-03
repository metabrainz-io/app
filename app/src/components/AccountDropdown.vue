<template>
    <q-btn-dropdown
        class="glossy no-border no-border-radius"
        color="cyan-10"
        label="Account"
    >
        <div class="my-text row bg-grey-10 q-pa-md text-white" style="border: 2px solid black; border-radius: 0px;">
        <div class="column">
            <div class="text-h6 text-cyan-14 q-mb-md">Info</div>
            <div class="text-subtitle1 text-cyan-14">Active claims</div>
            <div v-if="userdata.claims">
                <div v-if="userdata.claims.length > 0">
                    <div class="q-pa-sm text-caption" v-for="item in userdata.claims" :key="item">
                        Id:&nbsp;{{item.tid}},&nbsp;&nbsp;Name:&nbsp;{{item.name}}
                    </div>
                </div>
                <div v-else>
                    <div class="q-pa-sm text-caption">
                        No items claimed yet
                    </div>
                </div>
            </div>

            <div class="text-subtitle1 text-cyan-14">My Gears</div>
            <div v-if="userdata.items">
                <div class="q-pa-sm text-caption" v-for="item in userdata.items" :key="item">
                {{item}}
                </div>
            </div>
            <div v-else>
                <div class="q-pa-sm text-caption">
                    No gears minted yet
                </div>
            </div>
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
        
            <q-avatar 
            v-if="!isConnected" size="72px"
            color="grey-14" text-color="white" icon="fas fa-user">
            </q-avatar>
            <q-avatar v-else size="72px" >
            <q-img src="@/assets/user/user_img_1.png"/>
            </q-avatar>
            <div 
            v-if="!isConnected"
            class="text-caption q-mt-md q-mb-xs">...
            </div>
            <div 
            v-else
            class="text-caption q-mt-md q-mb-xs">{{account.substring(0,4)}}...{{account.substring(account.length-4,account.length)}}
            </div>
            <div class="q-py-xs"/>
            <div 
                v-if="!isConnected"
                class="my-btn"
                color="cyan-10"
                @click="connect()"
            >
                <div class="q-pa-xs">
                    Sign In
                </div>
            </div>

            <div 
                v-else
                class="my-btn"
                color="cyan-10"
                @click="disconnect()"
            >
                <div class="q-pa-xs">
                    Sign Out
                </div>
            </div>
        </div>
        </div>
    </q-btn-dropdown>
    &nbsp;&nbsp;&nbsp;
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'
export default{
    name: 'LayoutDefault',
    setup(){
        const store = useStore();
        const state = reactive({
          isConnected: store.getters.isAuthenticated,
        });
        return{
            isConnected: computed(()=>{
                return store.getters.isAuthenticated;
            }),
            connect:() =>{
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                alert("Mobile signin not yet supported. Please use the desktop version and make sure Metamask is installed.")
                }else{
                store.dispatch("connect_action", state);
                }
            },
            disconnect:() =>{
                store.dispatch("disconnect_action", state);
            },
            account: computed(()=>{
                return store.getters.currAccount;
            }),
            userdata: computed(()=>{
                return store.getters.userdata;
            }),
        }
    }
}
</script>