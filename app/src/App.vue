<template>
  <div class="main-bg-png">
    <q-layout view="hHh lpR lff">
      <q-header class="my-header bg-transparent text-white">

        <!--
          <div id="status-label" class="text-body2 text-weight-light">Alpha</div>
          -->
          <div v-if="account" class="status-label-online text-caption">
            <div class="status-msg">{{account}}&nbsp;&nbsp;&nbsp;</div>
            <q-spinner-rings color="green" />
          </div>
          <div v-else class="status-label-offline text-caption">
            <div class="status-msg text-red">not connected&nbsp;&nbsp;&nbsp;</div>
            <q-spinner-rings color="red" />
          </div>

          <!-- MOBILE RES -->
          <div class="lt-sm">
          
            <q-toolbar>
              <q-btn dens flat round icon="menu" @click="toggleLeftDrawer"/>
              <q-space />
              <AccountDropdown/>
              &nbsp;&nbsp;&nbsp;
              <div
                @click="$router.push('/')" 
                style="cursor: pointer; font-size: 1.5rem"
              >
                <img src="./assets/style/CyberBrain_sync_transparent_96x96.gif" style="width: 4rem;">
              </div>
            </q-toolbar>

            <q-drawer
              class="my-drawer"
              v-model="drawerOpen" 
              :show-if-above="false"
              side="left"
            >
              <q-scroll-area class="fit">
                <q-list>

                  <div class="q-py-xs"></div>
                  <!-- Close btn -->
                  <div 
                    class="float-right"
                    style="cursor: pointer; font-size: 1.5rem;"
                    @click="toggleLeftDrawer"
                  >
                    {{btn_close_char}}&nbsp;&nbsp;
                  </div>

                  <!-- spacing after close btn -->
                  <div class="q-py-md"></div>

                  <!-- menu items -->
                  <template v-for="(menuItem, index) in menuList" :key="index">
                    <q-item 
                      v-if="menuItem.mainitem"
                      @click="menulink = menuItem.label"
                      :active="menulink === menuItem.label"
                      clickable
                    >
                      <!-- menu items -->
                      <q-item-section 
                        class="text-subtitle1 text-weight-bold"
                        @click="$router.push(menuItem.route)">
                        {{ menuItem.label }}
                      </q-item-section>
                    </q-item>
                    <q-item 
                      v-else
                      @click="menulink = menuItem.label"
                      :active="menulink === menuItem.label"
                      clickable
                    >
                      <!-- menu items -->
                      <q-item-section 
                        class="text-caption"
                        @click="$router.push(menuItem.route)">
                        >&nbsp;&nbsp;&nbsp;&nbsp;{{ menuItem.label }}
                      </q-item-section>
                    </q-item>
                    <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
                  </template>

                </q-list>
              </q-scroll-area>
            </q-drawer>
          </div>
          
          <!-- DEFAULT RES -->
          <div class="gt-xs">
            <q-toolbar>
              <q-tabs shrink stretch>
                <div
                  class="gt-xs text-h5 text-white" 
                  @click="$router.push('/')" 
                  style="cursor: pointer; font-size: 1.5rem"
                >
                </div>
                <div
                  @click="$router.push('/')" 
                  style="cursor: pointer; font-size: 1.5rem"
                >
                  <img src="./assets/style/CyberBrain_sync_transparent_96x96.gif" style="width: 4rem;">
                </div>
              </q-tabs>
              <q-space />
              <q-tabs>
                <q-route-tab to="/metagear" label="MetaGears" />
                <q-route-tab to="/metabrain" label="MetaBrains" />
                <q-route-tab to="/about" label="About" />
                <div class="q-px-sm"></div>

                <AccountDropdown/>
                      <!--
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
                          <div class="q-pa-sm text-caption" v-for="item in userdata.claims" :key="item">
                            Id:&nbsp;{{item.tid}},&nbsp;&nbsp;Name:&nbsp;{{item.name}}
                          </div>
                        </div>
                        <div v-else>
                          <div class="q-pa-sm text-caption">
                            No items claimed yet
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
                        <img src="@/assets/member.gif">
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

                      >>>>>>>>>>>>>>>>>>>>>
                      <q-btn
                        v-if="!isConnected"
                        class="connect-btn"
                        label="Sign In"
                        color="cyan-10"
                        style="width:125px;"
                        @click="connect()">
                      </q-btn>
                      <q-btn
                        v-else
                        class="connect-btn"
                        label="Sign Out"
                        color="cyan-10"
                        style="width:125px;"
                        @click="disconnect()">
                      </q-btn>
                      >>>>>>>>>>>>>>>>>>>>>>
                    </div>
                  </div>
                </q-btn-dropdown>
                &nbsp;&nbsp;&nbsp;

                <q-btn
                  class="connect-btn"
                  label="test"
                  color="red-10"
                  @click="test()">
                </q-btn>
                  -->

              </q-tabs>
            </q-toolbar>
          </div>
      </q-header>
      <div class="q-py-sm"/>

      <!--
      <div class="q-pa-xl text-white bg-dark" style="width: 750px; height: 500px;">
        <div class="q-py-lg text-white text-h4">
          MetaGears TEST
        </div>
        <q-form
          class="q-gutter-md"
        >
          <q-input
            filled
            type="number"
            v-model="tokenId"
            class="bg-white"
            label="tokenid"
          />

          <q-input
            filled
            type="number"
            v-model="tokenAmount"
            class="bg-white"
            label="token amount"
          />
          
          <q-input
            filled
            v-model="hodlerAddress"
            class="bg-white"
            label="address"
          />

          <q-input
            filled
            v-model="tokenUri"
            class="bg-white"
            label="token uri"
          />
        </q-form>
        <div class="q-py-sm"/>
        <q-btn color="primary"  label="mint" @click="testmint()"></q-btn>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <q-btn color="primary"  label="check" @click="checkbalance()"></q-btn>
        <div class="q-py-sm"/>

        <div class="q-py-sm"/>
        <q-btn color="primary"  label="reserved" @click="checkTokenReserved()"></q-btn>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="q-py-sm"/>
        <q-btn color="primary"  label="token" @click="checkToken()"></q-btn>
        &nbsp;&nbsp;&nbsp;&nbsp;


        <div v-if="testresult">
          {{testresult.status}}<br/>
          {{testresult.message}}<br/>
          {{testresult.address}}<br/>
        </div>

        <div v-if="amountTokens">
          {{amountTokens}}<br/>
        </div>
      </div>
      -->
      

      <!-- header spacing -->
      <div class="q-py-xl"/>
      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer reveal id="my-footer">
        <q-toolbar>
          <q-toolbar-title>
            <q-tabs>
            <div 
              class="text-white text-body2">
              © 2022 &nbsp;&nbsp;Metabrainz.io, 
              &nbsp;&nbsp;All rights reserved
            </div>
            <q-space/>
            <div>
              <q-item clickable tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
              <q-item-section>
              <q-icon name="fab fa-twitter" />
              </q-item-section>
              </q-item>
            </div>
            <div>
              <q-item clickable tag="a" target="_blank" href="https://github.com/metabrainz-io">
              <q-item-section>
              <q-icon name="fab fa-github" />
              </q-item-section>
              </q-item>
            </div>
            </q-tabs>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <!--
      <q-btn class="q-py-xl" label="Notification" color="primary" @click="notify(0)" />
      <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="hasNotification" seamless position="top">
          <q-card class="bg-red-10" style="width: 350px; height:100px;">
            <q-linear-progress :value="0.6" color="red-10" />

            <q-card-section class="row items-center no-wrap">
              <div>
                <div class="text-h6 text-white text-weight-bolder">Note</div>
                <div class="text-white">{{msgNotification}}</div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
      -->

    </q-layout>
  </div>
</template>

<script>
const menuList = [
  {
    route: '/',
    label: 'Home',
    separator: true,
    mainitem: true
  },
  {
    route: '/metabrain',
    label: 'MetaBrain',
    separator: false,
    mainitem: true
  },
  {
    route: '/metagear',
    label: 'MetaGear',
    separator: false,
    mainitem: true
  },
  {
    route: '/about',
    label: 'About',
    separator: true,
    mainitem: true
  },
  {
    route: '/about#meta-brainz-io',
    label: 'info',
    separator: false,
    mainitem: false,
  },
  {
    route: '/about#docs',
    label: 'docs',
    separator: false,
    mainitem: false,
  },
  {
    route: '/about#roadmap',
    label: 'roadmap',
    separator: false,
    mainitem: false,
  },
  {
    route: '/about#team',
    label: 'team',
    separator: false,
    mainitem: false,
  },
  {
    route: '/about#contact',
    label: 'contact',
    separator: false,
    mainitem: false,
  },
]

import { reactive, ref, toRefs, computed } from 'vue'
import { useStore  } from 'vuex'
import { NFTUri } from '@/token/token'
import { 
  connectWallet, myabi, mintNFT, showTokenAmount, NFTReserved
} from '@/contract/util/interact'
import AccountDropdown from '@/components/AccountDropdown.vue'
import { fetchItems } from "@/api/api";

export default {
  name: 'LayoutDefault',
  components: {
    AccountDropdown
  },
  setup () {
    const store = useStore();
    const state = reactive({
      isConnected: store.getters.isAuthenticated,
      // hasNotification: store.getters.hasNotification,
      // msgNotification: store.getters.msgNotification,
      // popupOnce: true
    });
    const drawerOpen = ref(false);
    state.hasNotification = false;
    state.msgNotification = "";
    const testresult = ref(null);

    const tokenId       = ref(null)
    const tokenAmount   = ref(null)
    const hodlerAddress = ref(null)
    const amountTokens  = ref(null)
    const menulink      = ref(null)
    const tokenUri      = ref(null)
    
    fetchItems();
    // fetchItems(state);

    // function notify(popUpTime) {
    //   console.warn("New notification")
    //   setTimeout(function() {
    //     if(!state.hasNotification){
    //       state.popupOnce = true;
    //       state.hasNotification = true;
    //       state.msgNotification = "Woot Woot Woot";
    //     }else{
    //       state.hasNotification = false;
    //       state.msgNotification = "";
    //     }
    //     if(state.popupOnce){
    //       state.popupOnce = false;
    //       notify(5000);
    //     }else{
    //       console.warn("Halt notification")
    //       return;
    //     }
    //   }, popUpTime)
    // }

    store.dispatch('connect_refresh_action');

    return {
      // notify,
      menuList,
      drawerOpen,
      ... toRefs(state),
      btn_close_char: "<",

      toggleLeftDrawer: ()=>{
          drawerOpen.value = !drawerOpen.value;
      },

      connect:() =>{
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          alert("Mobile signin not yet supported. Please use the desktop version and make sure Metamask is installed.")
        }else{
          store.dispatch("connect_action", state);
          state.hasNotification = true;
          state.msgNotification = "Could not sign in user!";
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
      mobileData: ref(false),
      bluetooth: ref(false),

      test:() =>{
        store.dispatch("someaction");
        console.log(myabi);
        connectWallet().then((out)=>{
          console.log(out);
          testresult.value = out;
        })
        
      },
      testmint: () =>{
        mintNFT(tokenId.value, tokenAmount.value, hodlerAddress.value).then((out)=>{
          testresult.value = out;
        })
      },
      checkbalance: () =>{
        showTokenAmount(tokenId.value).then((out)=>{
          amountTokens.value = out;
        })
      },
      checkTokenReserved: () =>{
        NFTReserved(tokenId.value).then((out)=>{
          testresult.value = out;
        })
      },
      checkToken: () =>{
        // getToken().then((out)=>{
        //   console.log(out);
        // })
        NFTUri(tokenUri.value)
      },
      tokenUri,
      testresult,
      tokenId,
      tokenAmount,
      hodlerAddress,
      amountTokens,
      menulink
    }
  }
}
</script>

<style lang="scss">
.main-bg{
  background-color: #010011;
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
}

.main-bg-png{
  
  background-color: #010011;
  background-image: url("assets/bg/0.png");
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-position: center;
}

.main-bg-animated{
  
  background-color: #010011;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat, repeat;
  background-position: center;
}

.my-header{
    font-family: 'Orbitron';
}

.status-label-online{

  position: fixed;
  margin-top: 70px;
  right: 13px;
  padding: 10px;


  .status-msg{
    display: none;
  }

  &:hover{
    position: fixed;
    margin-top: 70px;
    right: 13px;
    padding: 10px;

    .status-msg{
      display: block;
      float: left;
      margin-top: 7px;
      font-size: 0.6rem;
    }
  }
}

.status-label-offline{

  position: fixed;
  margin-top: 70px;
  right: 13px;
  padding: 10px;

  .status-msg{
    display: none;
  }

  &:hover{
    position: fixed;
    margin-top: 70px;
    right: 13px;
    padding: 10px;

    .status-msg{
      display: block;
      float: left;
      margin-top: 7px;
      font-size: 0.6rem;
    }
  }
}


.my-drawer{
  background-color: #010011;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url("assets/bg/0.png");
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
}
.my-title{
  font-family: 'Orbitron';
}
.my-text{
  font-family: 'Orbitron';
}
#my-footer{
  font-family: 'Orbitron';
  background-color: #01031a;
}
.my-btn {
    background-image: url(assets/style/btn_test_default.png);
    background-repeat: repeat;
    background-position: center;
    cursor: pointer;
    text-align: center;
    font-family: 'Orbitron';
    width: 96px;
    height: 32px;

    &:hover{
        background-image: url(assets/style/btn_test_click.png);
    }
}
</style>