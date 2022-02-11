<template>
  <div class="main-bg-png">
    <q-layout view="hHh lpR lff">
      <q-header class="my-header bg-transparent text-white">

        <!--
          <div id="status-label" class="text-body2 text-weight-light">Alpha</div>
          -->
          <div v-if="account" class="status-label-online text-caption">
            <div class="status-msg text-white" style="position: absolute;right:40px;top: 8px;">{{account}}&nbsp;&nbsp;&nbsp;</div>
            <q-spinner-rings size="2.5em" color="green" />
          </div>
          <div v-else class="status-label-offline text-caption">
            <div class="status-msg text-red" style="position: absolute;right:40px;top: 8px;">not&nbsp;connected&nbsp;&nbsp;&nbsp;</div>
            <q-spinner-rings size="2.5em" color="red" />
          </div>


      <!-- 
      -->


          <!-- MOBILE RES -->
          <div class="lt-sm">
          
            <q-toolbar>
              <q-btn dens flat round icon="menu" text-color="secondary" size="1.5em" @click="toggleLeftDrawer"/>
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
              style="border-right: 3px solid #00f2a1;"
              v-model="drawerOpen" 
              :show-if-above="false"
              side="left"
            >
              <q-scroll-area class="fit">
                <q-list>

                  <div class="q-py-xs"></div>
                  <!-- Close btn -->
                  <div 
                    class="float-right text-secondary"
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
                      v-ripple
                      @click="menulink = menuItem.label"
                      :active="menulink === menuItem.label"
                      active-class="drawer-link-active"
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
                      v-ripple
                      @click="menulink = menuItem.label"
                      :active="menulink === menuItem.label"
                      active-class="drawer-link-active"
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
                <q-route-tab to="/metagear" label="M-Gears" />
                <q-route-tab to="/metabrain" label="M-Brains" />
                <q-btn-dropdown auto-close stretch flat label="About">
                  <q-list class="my-text no-border-radius" style="border: 2px solid #00f2a1;background-color:#01000b;color:white;text-align:left;">
                    <q-item clickable to="/about#meta-brainz-io">
                      <q-item-section style="color:white;">metabrainz io</q-item-section>
                    </q-item>
                    <q-item clickable to="/about#roadmap">
                      <q-item-section style="color:white;">roadmap</q-item-section>
                    </q-item>
                    <q-item clickable to="/about#team">
                      <q-item-section style="color:white;">team</q-item-section>
                    </q-item>
                    <q-item clickable to="/about#notes">
                      <q-item-section style="color:white;">notes</q-item-section>
                    </q-item>
                    <q-item clickable to="/about#contact">
                      <q-item-section style="color:white;">contact</q-item-section>
                    </q-item>                                                            
                  </q-list>
                </q-btn-dropdown>

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
    route: '/about#intro',
    label: 'About',
    separator: true,
    mainitem: true
  },
  {
    route: '/about#meta-brainz-io',
    label: 'metabrainz io',
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
    route: '/about#notes',
    label: 'notes',
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
    });
    const drawerOpen = ref(false);
    const testresult = ref(null);

    const tokenId       = ref(null)
    const tokenAmount   = ref(null)
    const hodlerAddress = ref(null)
    const amountTokens  = ref(null)
    const menulink      = ref(null)
    const tokenUri      = ref(null)
    
    fetchItems();
    store.dispatch('connect_refresh_action');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      store.dispatch('set_device_action', true);
    }else{
      store.dispatch('set_device_action', false);
    }

    return {
      menuList,
      drawerOpen,
      ... toRefs(state),
      btn_close_char: "<",

      toggleLeftDrawer: ()=>{
          drawerOpen.value = !drawerOpen.value;
      },

      connect:() =>{
        if(store.getters.deviceMobile)
          alert("Mobile SignIn not yet supported. Please use the desktop version and make sure Metamask is installed.")
        else
          store.dispatch("connect_action", state);
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
      curpage: () =>{
        console.log(window.location.pathname);
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
  
  // background-color: #010011;
  // background-image: url("assets/bg/0.png");
  background-color: #010011;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23100e2f' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
  // -webkit-background-size: cover; 
  // -o-background-size: cover;
  // -moz-background-size: cover;
  // background-size: cover;
  // background-repeat: no-repeat, repeat;
  // background-position: center;
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
  background-color: #01000b;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url("assets/bg/0.png");
  // -webkit-background-size: cover; 
  // -o-background-size: cover;
  // -moz-background-size: cover;
  // background-repeat: repeat;
  // background-position: center;
  // background-size: cover;
}

.drawer-link-active{
  color:#00f2a1;
  background: #100e2f;
}

.my-title{
  font-family: 'Orbitron';
}
.my-text{
  font-family: 'Orbitron';
}
#my-footer{
  font-family: 'Orbitron';
  background-color: #01000b;
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