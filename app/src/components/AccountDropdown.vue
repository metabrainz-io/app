<template>

    <q-btn-dropdown
        class="gt-xs no-border no-border-radius text-black"
        color="secondary"
        label="Account"
    >
        <div class="my-text row bg-dark q-pa-md text-white" style="border: 2px solid #00f2a1; border-radius: 0px;">
            
            <div class="column" style="width:200px;">
                <div v-if="isConnected">
                    <div class="text-h5 text-white q-mb-md">Info</div>
                    <div class="text-subtitle1 text-secondary">Active claims</div>
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
                    <div v-else>
                        <div class="q-pa-sm text-caption">
                            No items claimed yet
                        </div>
                    </div>

                    <div class="text-subtitle1 text-secondary">My Gears</div>
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
                <div v-else>
                    <div class="text-h5 text-white q-mb-md">Not connected</div>
                    <div class="text-subtitle1 text-secondary">Active claims</div>
                    <div>
                        <div>
                           <div class="q-pa-sm text-caption">
                                -
                            </div>
                        </div>
                    </div>

                    <div class="text-subtitle1 text-secondary">My Gears</div>
                    <div>
                        <div>
                           <div class="q-pa-sm text-caption">
                                -
                            </div>
                        </div>
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
            <!--
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
            -->
            <!-- BTN -->
            <div v-if="!isConnected">
            <div style="width:112px;margin-left:-10px;">
                <q-btn 
                    class="btn-helper" dense flat unelevated push :ripple="false" :value="connect_btn_hover"
                    @mouseover="connect_btn_hover = true" @mouseleave="connect_btn_hover = false"
                    @click="connect()"
                >
                    <img v-if="!connect_btn_hover" src="@/assets/style/main_btn.png" width="112">
                    <img v-else src="@/assets/style/main_btn_press.png" width="112">
                    <div v-if="!connect_btn_hover" class="my-text text-caption text-weight-bold text-secondary" style="position:absolute;top:14px;">Sign In</div>
                    <div v-else class="my-text text-caption text-weight-bold text-white" style="width:112px;position:absolute;top:12px;left:0.1rem;">Sign In</div>
                </q-btn>
            </div>
            </div>
            <!--
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
            -->
            <!-- BTN -->
            <div v-else>
            <div style="width:112px;margin-left:-10px;">
                <q-btn 
                    class="btn-helper" dense flat unelevated push :ripple="false" :value="connect_btn_hover"
                    @mouseover="connect_btn_hover = true" @mouseleave="connect_btn_hover = false"
                    @click="disconnect()"
                >
                    <img v-if="!connect_btn_hover" src="@/assets/style/main_btn.png" width="112">
                    <img v-else src="@/assets/style/main_btn_press.png" width="112">
                    <div v-if="!connect_btn_hover" class="my-text text-caption text-weight-bold text-secondary" style="position:absolute;top:14px;">Sign Out</div>
                    <div v-else class="my-text text-caption text-weight-bold text-white" style="width:112px;position:absolute;top:12px;left:0.1rem;">Sign Out</div>
                </q-btn>
            </div>
            </div>
        </div>
        </div>
    </q-btn-dropdown>
    &nbsp;&nbsp;&nbsp;
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
export default{
    name: 'LayoutDefault',
    setup(){
        const store = useStore();
        const state = reactive({
          isConnected: store.getters.isAuthenticated,
        });
        const connect_btn_hover = ref(false)
        return{
            connect_btn_hover,
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

<style lang="scss">
.btn-helper{
    .q-focus-helper {
        visibility: hidden;
    }
}
</style>