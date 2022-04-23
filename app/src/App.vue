<template>
  <div id="main" class="">

    
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
          background: {
              color: {
                  value: '#100e2f'
              }
          },
          fpsLimit: 90,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: 'repulse'
                  },
                  onHover: {
                      enable: true,
                      mode: 'grab'
                  },
                  resize: true
              },
              modes: {
                  repulse: {
                      distance: 400,
                  },
                  bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40
                  },
                  push: {
                      quantity: 4
                  },
                  grab: {
                      distance: 250,
                      duration: 0.4
                  }
              }
          },
          particles: {
              color: {
                  value: '#6b2a53'
              },
              links: {
                  color: '#07876c',
                  distance: 125,
                  enable: true,
                  opacity: 0.75,
                  width: 1
              },
              collisions: {
                  enable: true
              },
              move: {
                  direction: 'top',
                  enable: true,
                  outMode: 'out',
                  random: true,
                  speed: 1.5,
                  straight: false
              },
              number: {
                  density: {
                      enable: true,
                      area: 800
                  },
                  value: 80
              },
              opacity: {
                  value: 0.5
              },
              shape: {
                  type: 'circle'
              },
              size: {
                  random: true,
                  value: 5
              }
          },
          detectRetina: true
      }"
    /> -->

    <q-layout view="hHh Lpr lff">
    <!--<q-layout view="hHh lpR lff">-->
      <q-header class="my-header bg-transparent text-white">

        <!--
          <div id="status-label" class="text-body2 text-weight-light">Alpha</div>
          -->
      <!-- 
              @click="$router.push({hash:'#contact'})"
          <div v-if="account" class="status-label-online text-caption">
            <div class="status-msg text-white" style="position: absolute;right:40px;top: 8px;">{{account}}&nbsp;&nbsp;&nbsp;</div>
            <q-spinner-rings size="2.5em" color="green" />
          </div>
          <div v-else class="status-label-offline text-caption">
            <div class="status-msg text-red" style="position: absolute;right:40px;top: 8px;">not&nbsp;connected&nbsp;&nbsp;&nbsp;</div>
            <q-spinner-rings size="2.5em" color="red" />
          </div>
      -->

          
          <div v-if="!isMobile" class="my-menu" style="width:70px; height: auto;position:absolute;top:100px;right:25px;">
              <div class="row q-py-md flex justify-center my-title col text-h5 text-white">
                <q-item class=""
                  style="" clickable
                  @click="showSideMenu()"
                >
                    <q-item-section>
                    <q-item-label>
                        <q-spinner-dots class="" size="1.2em" color="negative"/>
                        <!--<q-icon color="secondary" name="expand_more"/>-->
                    </q-item-label>
                    </q-item-section>
                </q-item>

                <div v-if="sideMenuShow" style="background-image: linear-gradient(to bottom, rgba(16,14,47,0.75),rgba(16,14,47,0.75))">
                  <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
                      <q-item-section>
                      <q-item-label>
                          <q-icon color="secondary" name="fab fa-twitter"/>
                      </q-item-label>
                      </q-item-section>
                  </q-item>
                  <q-item style="width:60px;cursor:default;">
                      <q-item-section>
                      <q-item-label>
                          <q-icon style="color:#4c4886;" name="fab fa-discord"/>
                      </q-item-label>
                      </q-item-section>
                  </q-item>
                  <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://opensea.io/metabrainz">
                      <q-item-section>
                      <q-item-label>
                          <q-img src="@/assets/style/logo_opensea_trans_secondary.png" color="secondary" width="24px"/>
                      </q-item-label>
                      </q-item-section>
                  </q-item>
                  <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://github.com/metabrainz-io">
                      <q-item-section>
                      <q-item-label>
                      <q-icon color="secondary" name="fab fa-github"/>
                      </q-item-label>
                      </q-item-section>
                  </q-item>
                  
                    <q-item class="status-label-online">
                      <q-item-section>
                        <q-item-label>
                          <q-icon color="secondary" name="construction"/>
                        </q-item-label>
                      </q-item-section>

                      <div class="status-msg status-msg-popup text-h6 text-secondary text-weight-bolder"
                            style="
                              width:150px;
                              position:absolute;
                              right:0px;
                              top: 50px;
                              padding: 10px;
                              border-top:3px solid #00f2a1;
                              border-bottom:3px solid #00f2a1;
                              background-color: #01000b;
                              background-image: linear-gradient(to top, rgba(0,20,20,0), rgba(0,20,20,1)) !important;
                            "
                      >
                        <q-item-section>
                          <q-item-label>
                            <q-icon color="secondary" name="construction" size="1.5em"/>
                          </q-item-label>
                        </q-item-section>
                        <strong>We're in BETA!<br/>Any Questions? Found Typos or Bugs?<br/>Pls let us know on Discord!</strong>
                      </div>
                    </q-item>
                </div>
            </div>
          </div>

          <div v-else class="my-menu" style="width:70px; height: auto;position:absolute;top:75px;right:8px;">
              <div class="row q-py-md flex justify-center my-title col text-h5 text-white">
                <q-item class=""
                  style="" clickable
                  @click="showSideMenu()"
                >
                    <q-item-section>
                    <q-item-label>
                        <q-spinner-dots flat dense class="" size="1em" color="negative"/>
                        <!--<q-icon color="secondary" name="expand_more"/>-->
                    </q-item-label>
                    </q-item-section>
                </q-item>

                <div v-if="sideMenuShow" style="background-image: linear-gradient(to bottom, rgba(16,14,47,0.75),rgba(16,14,47,0.75))">
                  <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
                      <q-item-section>
                      <q-item-label>
                          <q-icon color="secondary" name="fab fa-twitter"/>
                      </q-item-label>
                      </q-item-section>
                  </q-item>
                  <q-item style="width:60px;">
                      <q-item-section>
                      <q-item-label>
                          <q-icon style="color:#4c4886;" name="fab fa-discord"/>
                      </q-item-label>
                      </q-item-section>
                  </q-item>
                  <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://opensea.io/metabrainz">
                      <q-item-section>
                      <q-item-label>
                          <q-img src="@/assets/style/logo_opensea_trans_secondary.png" color="secondary" width="24px"/>
                      </q-item-label>
                      </q-item-section>
                  </q-item>
                  <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://github.com/metabrainz-io">
                      <q-item-section>
                      <q-item-label>
                      <q-icon color="secondary" name="fab fa-github"/>
                      </q-item-label>
                      </q-item-section>
                  </q-item>
                  
                    <q-item class="status-label-online">
                      <q-item-section>
                        <q-item-label>
                          <q-icon color="secondary" name="construction"/>
                        </q-item-label>
                      </q-item-section>

                      <div class="status-msg status-msg-popup text-caption text-secondary text-weight-bolder"
                            style="
                              width:175px;
                              position:absolute;
                              right:0px;
                              top: 50px;
                              padding: 10px;
                              border-top:3px solid #00f2a1;
                              border-bottom:3px solid #00f2a1;
                              background-color: #01000b;
                              background-image: linear-gradient(to top, rgba(0,20,20,0), rgba(0,20,20,1)) !important;
                            "
                      >       
                        <q-item-section>
                          <q-item-label>
                            <q-icon color="secondary" name="construction" size="1.5em"/>
                          </q-item-label>
                        </q-item-section>               
                        <strong>We're in BETA!<br/>Any Questions? Found Typos or Bugs?<br/>Pls let us know on Discord!</strong>

                      </div>
                    </q-item>
                </div>
            </div>
          </div> 

          <!-- 
            @click="openURL('https://discord.com/invite/uXJDA3CC')"
          -->


          <!-- MOBILE RES -->
          <div class="lt-sm">
          
            <q-toolbar>
              <q-btn dense flat unelevated icon="menu" text-color="negative" size="1.5em" @click="toggleLeftDrawer"/>
              <q-space />
              <!--<AccountDropdown/>-->
              &nbsp;&nbsp;&nbsp;
              <div
                @click="$router.push({ name: 'Home', hash:'#main'})" 
                style="cursor: pointer; font-size: 1.5rem"
              >
                <img src="./assets/style/metabrain_sync_trans.gif" style="width: 4rem;">
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
                    class="q-px-sm float-right text-negative"
                    style="cursor: pointer;"
                    @click="toggleLeftDrawer"
                  >
                    <q-btn dense flat unelevated icon="arrow_left" text-color="negative" size="1.5em"/>
                    <!--{{btn_close_char}}&nbsp;&nbsp;-->
                  </div>

                  <!-- spacing after close btn -->
                  <div class="q-py-md"></div>

                  <!-- menu items 
                      :active="menulink === menuItem.label"
                      active-class="drawer-link-active"
                  -->
                  <template v-for="(menuItem, index) in menuList" :key="index">
                    <q-item 
                      v-if="menuItem.mainitem"
                      v-ripple
                      @click="menulink = menuItem.label"
                      clickable
                    >
                      <!-- menu items 
                      @click="menulink = menuItem.label"
                      :active="menulink === menuItem.label"
                      -->
                      <q-item-section 
                        class="text-subtitle1 text-weight-bold"
                        @click="$router.push(menuItem.route)">
                        {{ menuItem.label }}
                      </q-item-section>
                    </q-item>
                    <q-item 
                      v-else
                      v-ripple
                      active-class="drawer-link-active"
                      clickable
                    >
                      <!-- menu items -->
                      <q-item-section 
                        class="text-caption"
                        @click="$router.push(menuItem.route)">
                        &nbsp;&nbsp;&nbsp;/&nbsp;{{ menuItem.label }}
                      </q-item-section>
                    </q-item>
                    <q-separator class="bg-dark" :key="'sep' + index"  v-if="menuItem.separator" />
                  </template>
                </q-list>
                <q-separator class="bg-dark" />
                <div style="height:0px;"/>
                <div class="row q-py-md flex justify-center my-title col text-h5 text-white">
                    <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
                        <q-item-section>
                        <q-item-label>
                            <q-icon color="white" name="fab fa-twitter"/>
                        </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item style="width:60px;cursor:default;">
                        <q-item-section>
                        <q-item-label>
                            <q-icon style="color:#4c4886" name="fab fa-discord"/>
                        </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://opensea.io/metabrainz">
                        <q-item-section>
                        <q-item-label>
                            <q-img src="@/assets/style/logo_opensea_trans_white.png" color="secondary" width="24px"/>
                        </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://github.com/metabrainz-io">
                        <q-item-section>
                        <q-item-label>
                        <q-icon color="white" name="fab fa-github"/>
                        </q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
                <div style="height:50px;"/>
              </q-scroll-area>
            </q-drawer>
          </div>
          
          <!-- DEFAULT RES -->
          <div class="gt-xs">
            <q-toolbar class="" style="background-image:linear-gradient(#100e2f 70%, rgba(16, 14, 47, 0.5);">
              <q-tabs shrink stretch>
                <div
                  class="gt-xs text-h5 text-white" 
                  @click="$router.push('/')" 
                  style="cursor: pointer; font-size: 1.5rem"
                >
                </div>
                <div
                  @click="$router.push({ name: 'Home', hash:'#main'})" 
                  style="cursor: pointer; font-size: 1.5rem"
                >
                  <img src="./assets/style/metabrain_sync_trans.gif" style="width: 4rem;">
                </div>
              </q-tabs>
              <q-space />
              <q-tabs>
                <q-route-tab to="/#main" class="text-subtitle0 text-weight-bolder" style="max-width:100px;">/Home</q-route-tab>
                <q-route-tab to="/metabrain#main" class="q-px-md text-subtitle0 text-weight-bolder">/Get&nbsp;&nbsp;&nbsp;M-Brains</q-route-tab>
                <q-route-tab to="/metagear#main" class="q-px-md text-subtitle0 text-weight-bolder">/Get&nbsp;&nbsp;&nbsp;M-Gears</q-route-tab>
                
                <q-btn-dropdown auto-close stretch flat label="/About" class="q-px-lg text-subtitle0 text-weight-bolder">
                  <q-list class="my-text no-border-radius" style="border: 2px solid #00f2a1;background-color:#01000b;color:white;text-align:left;">
                    <q-item clickable to="/about#intro">
                      <q-item-section style="color:white;">&nbsp;&nbsp;&nbsp;/&nbsp;storyline</q-item-section>
                    </q-item>
                    <q-item clickable to="/about#meta-brains">
                      <q-item-section style="color:white;">&nbsp;&nbsp;&nbsp;/&nbsp;m-brains</q-item-section>
                    </q-item>
                    <q-item clickable to="/about#meta-gears">
                      <q-item-section style="color:white;">&nbsp;&nbsp;&nbsp;/&nbsp;m-gears</q-item-section>
                    </q-item>
                   <q-item clickable to="/about#meta-games">
                      <q-item-section style="color:white;">&nbsp;&nbsp;&nbsp;/&nbsp;m-games</q-item-section>
                    </q-item>
                   <q-item clickable to="/about#faq">
                      <q-item-section style="color:white;">&nbsp;&nbsp;&nbsp;/&nbsp;faq - docs</q-item-section>
                    </q-item>                                      
                    <q-item clickable to="/about#team">
                      <q-item-section style="color:white;">&nbsp;&nbsp;&nbsp;/&nbsp;team</q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>

                <div class="q-px-sm"></div>


                <!--
                <AccountDropdown/>
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

      <Footer/>

      <q-dialog v-model="supportPopup">        
        <q-card class="support-msg-popup no-border-radius bg-accent">
          <q-card-section style="right:0px;" class="row items-center q-pb-none">
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup color="secondary"/>
          </q-card-section>

          <q-card-section>
              <div class="gt-xs">
                  <p class="my-text text-subtitle1 text-weight-bold text-secondary">
                    Are you a Developer, Designer or Creator? Wanna jump aboard?
                  </p>
                  <p class="my-text text-caption text-white">
                    Connect with us at Discord!&nbsp;💻
                  </p>
                  <p class="my-text text-subtitle1 text-weight-bold text-secondary">
                    Want to help us grow our network?
                  </p>
                  <p class="my-text text-caption text-white">
                    Follow and share our Twitter page!&nbsp;📈&nbsp;🚀
                  </p>
                  <p class="my-text text-subtitle1 text-weight-bold text-secondary">
                    Prefer to help with funds and boost our development?
                  </p>
                  <p class="my-text text-caption text-white">
                    Use one of the crypto adresses below and drop any amount you'd like..
                  </p>
              </div>
              <div class="lt-sm">
                  <p class="my-text text-subtitle0 text-weight-bold text-secondary">
                    Are you a Developer, Designer or Creator? Wanna jump aboard?
                  </p>
                  <p class="my-text text-caption text-white">
                    Connect with us at Discord!&nbsp;💻
                  </p>
                  <p class="my-text text-subtitle0 text-weight-bold text-secondary">
                    Want to help us grow our network?
                  </p>
                  <p class="my-text text-caption text-white">
                    Follow and share our twitter page!&nbsp;📈&nbsp;🚀
                  </p>                  
                  <p class="my-text text-subtitle0 text-weight-bold text-secondary">
                    Prefer to help with funds and boost our development?
                  </p>
                  <p class="my-text text-caption text-white">
                    Use one of the crypto adresses below and drop any amount you'd like..
                    <img class="lt-sm" src="@/assets/images/rupee.png" style="height:14px;padding-top:1px;">
                  </p>
              </div>

              <q-separator color="dark"/>
              <div class="q-py-sm"/>
              <div class="row justify-center">
                  <!-- default res -->
                  <div class="gt-xs q-pa-lg">
                      <img class="gt-xs" src="@/assets/images/rupee.png" style="height:50px;left:50px;">
                  </div>
                  <div class="gt-xs text-white" style="font-size:12px;" @mouseleave="showing = null">
                      <div>
                          <div 
                              v-for="account in addresses" :key="account"
                              class="q-py-xs"
                          >
                              <div style="cursor:pointer;" @click="showing = true, copyAddress(account.sym, account.addr)">
                                  <div v-if="account.sym == 'XLM'">
                                    <strong><span class="text-secondary">{{account.sym}}:</span></strong>&nbsp;&nbsp;{{account.addr.substring(0,27)}}<br/>{{account.addr.substring(27,56)}}
                                    &nbsp;&nbsp;<q-icon align="right" name="content_copy"/>
                                  </div>
                                  <div v-else>
                                    <strong><span class="text-secondary">{{account.sym}}:</span></strong>&nbsp;&nbsp;{{account.addr}}
                                    &nbsp;&nbsp;<q-icon align="right" name="content_copy"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>    
                  
                  <!-- mobile res -->
                  <!--
                  <div class="lt-sm q-pa-sm">
                      <img  src="@/assets/images/rocket.png" style="height:50px;left:50px;">
                  </div>
                  -->
                  <div class="lt-sm text-white" style="font-size:10px;" @mouseleave="showing = null">
                      <div>
                          <div 
                              v-for="account in addresses" :key="account"
                              class="q-py-sm"
                          >
                              <div style="cursor:pointer;" @click="showing = true, copyAddress(account.sym, account.addr)">
                                  <div v-if="account.sym == 'XLM'">
                                    <strong><span class="text-secondary">{{account.sym}}:</span></strong><br/>{{account.addr.substring(0,27)}}<br/>{{account.addr.substring(27,56)}}
                                    &nbsp;&nbsp;<q-icon align="right" name="content_copy"/>
                                  </div>
                                  <div v-else>
                                    <strong><span class="text-secondary">{{account.sym}}:</span></strong><br/>{{account.addr}}
                                    &nbsp;&nbsp;<q-icon align="right" name="content_copy"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>    
                  <div>
                      <q-tooltip v-if="copiedSymbol.length > 3" v-model="showing">Copied {{copiedSymbol.substring(0,3)}} ..</q-tooltip>
                      <q-tooltip v-else v-model="showing">Copied {{copiedSymbol}}</q-tooltip>
                  </div>
              </div>
          </q-card-section>
        </q-card>
      </q-dialog>
  
      <q-footer reveal id="my-footer">
        <q-toolbar class="justify-center bg-dark">
          <div 
              class="gt-xs my-text text-white text-body2">
              © {{year}} &nbsp;&nbsp;Metabrainz.io, 
              &nbsp;&nbsp;All rights reserved
          </div>
          <div 
              class="lt-sm my-text text-white text-caption">
              © {{year}} Metabrainz.io, All rights reserved
          </div>
          <q-space/>
          <q-item clickable style="width:60px;" @click="popupSupport()">
              <q-item-section>
                  <q-item-label>
                      <q-img src="@/assets/style/heart.png" color="secondary" width="24px"/>
                  </q-item-label>
              </q-item-section>
          </q-item>
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
    route: '/#main',
    label: '/ Home',
    separator: true,
    mainitem: true
  },
  {
    route: '/metabrain#main',
    label: '/ Get M-Brains',
    separator: false,
    mainitem: true
  },
  {
    route: '/metagear#main',
    label: '/ Get M-Gears',
    separator: false,
    mainitem: true
  },
  {
    route: '/about#intro',
    label: '/ About',
    separator: true,
    mainitem: true
  },
  {
    route: '/about#intro',
    label: 'storyline',
    separator: false,
    mainitem: false
  },  
  {
    route: '/about#meta-brains',
    label: 'm-brains',
    separator: false,
    mainitem: false,
  },
  {
    route: '/about#meta-gears',
    label: 'm-gears',
    separator: false,
    mainitem: false,
  },  
  {
    route: '/about#meta-games',
    label: 'm-games',
    separator: false,
    mainitem: false,
  },
  {
    route: '/about#faq',
    label: 'faq - docs',
    separator: false,
    mainitem: false,
  },  
  {
    route: '/about#team',
    label: 'team',
    separator: false,
    mainitem: false,
  } 
]


const addresses = [
    {"sym": "BTC", "addr": "bc1qxwa0lfc209he4juyeezd4ap7p8prwp5xctqe39"},
    {"sym": "ETH | BNB | MATIC", "addr": "0x9e91CCcD306880b74b0F1Da633BEDB324273e667"},
    {"sym": "XLM", "addr": "GAK7C4VTLP2LAHQNXSYP6UKIEZ4TGWBD5BKYVHOGBCJES44QH4BQWR5W"}
]

// import AccountDropdown from '@/components/AccountDropdown.vue' not used

import { reactive, ref, toRefs, computed } from 'vue'
import { useStore  } from 'vuex'
// import { NFTUri } from '@/token/token'
// import { 
//   connectWallet, myabi, mintNFT, showTokenAmount, NFTReserved
// } from '@/contract/util/interact'
// import { fetchItems } from "@/api/api";
import Footer from '@/components/Footer.vue'
import { copyToClipboard } from 'quasar'
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  components: {
    // AccountDropdown,
    Footer
  },
  setup () {
    const store = useStore();
    const state = reactive({
      isConnected: store.getters.isAuthenticated,
      isMobile: store.getters.deviceMobile,
    });

    const drawerOpen = ref(false);
    const sideMenuShow = ref(false);
    const testresult = ref(null);
    const tokenId       = ref(null)
    const tokenAmount   = ref(null)
    const hodlerAddress = ref(null)
    const amountTokens  = ref(null)
    const menulink      = ref(null)
    const tokenUri      = ref(null)
    const supportPopup = ref(false)
    const copiedSymbol = ref("")
    var dt = new Date();
    var audio = new Audio(require('@/assets/media/oot_get_heart.mp3'))

    // fetchItems();
    // store.dispatch('connect_refresh_action');

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
      showSideMenu:()=>{
        sideMenuShow.value = !sideMenuShow.value;
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
        // console.log(myabi);
        // connectWallet().then((out)=>{
        //   console.log(out);
        //   testresult.value = out;
        // })
        
      },
      testmint: () =>{
        // mintNFT(tokenId.value, tokenAmount.value, hodlerAddress.value).then((out)=>{
        //   testresult.value = out;
        // })
      },
      checkbalance: () =>{
        // showTokenAmount(tokenId.value).then((out)=>{
        //   amountTokens.value = out;
        // })
      },
      checkTokenReserved: () =>{
        // NFTReserved(tokenId.value).then((out)=>{
        //   testresult.value = out;
        // })
      },
      checkToken: () =>{
        // getToken().then((out)=>{
        //   console.log(out);
        // })
        // NFTUri(tokenUri.value)
      },
      curpage: () =>{
        console.log(window.location.pathname);
      },
      popupSupport: ()=>{
          audio.play()
          supportPopup.value = true;
      },
      copyAddress: (sym, addr)=>{
          copyToClipboard(addr)
          .then(() => {
              copiedSymbol.value = sym;
              console.log("success!")
          })
          .catch(() => {
              console.log("fail!")
          })
      },
      particlesInit: ()=>{
        return false;
      },
      particlesLoaded: ()=>{
        return false;
      },
      openURL(url){
        openURL(url);
      },
      year: computed(()=>{
        return dt.getFullYear()
      }),
      showing: ref(false),
      supportPopup,
      copiedSymbol,
      addresses,
      tokenUri,
      testresult,
      tokenId,
      tokenAmount,
      hodlerAddress,
      amountTokens,
      menulink,
      sideMenuShow
    }
  }
}
</script>

<style lang="scss">

// Prevent white spacing on side, top/bottom (on mobile)
html,body{
    overflow-x: hidden;
    background-color:#01000b;
}

.main-bg{
  background-color: #010011;
  -webkit-background-size: cover; 
  -o-background-size: cover;
  -moz-background-size: cover;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
}

// .main-bg-png{
  
//   // background-color: #010011;
//   // background-image: url("assets/bg/0.png");
//   background-color: #010011;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23100e2f' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
//   // background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='38' height='38' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L39 1h-38v38z' fill='rgba(16, 14, 47,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L1 39h38v-38z' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L0 40h40v-40z' fill='rgba(16, 14, 47,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L40 0h-40v40z' fill='rgba(0, 1, 11,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")

//   // -webkit-background-size: cover; 
//   // -o-background-size: cover;
//   // -moz-background-size: cover;
//   // background-size: cover;
//   // background-repeat: no-repeat, repeat;
//   // background-position: center;
// }

.mid-bg-png{
  // height:100%;
  // width:100%;
  background-color: #06051c;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(1, 0, 11, 1)), linear-gradient(to right, rgba(0, 0, 0, 0), rgba(1, 0, 17, 0.9)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%2300f2a1' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
  // background-image: url(./assets/bg/pattern.svg);  
  // background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='53' height='53' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L39 1h-38v38z' fill='rgba(16, 14, 47,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L1 39h38v-38z' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L0 40h40v-40z' fill='rgba(16, 14, 47,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L40 0h-40v40z' fill='rgba(0, 1, 11,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")
  // background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='38' height='38' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L39 1h-38v38z' fill='rgba(16, 14, 47,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L1 39h38v-38z' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L0 40h40v-40z' fill='rgba(16, 14, 47,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L40 0h-40v40z' fill='rgba(0, 1, 11,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")
}

.end-bg-png{
  border-bottom: 4px solid #100e2f;
  height:100%;
  width:100%;
  background-color: #06051c;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(1, 0, 11, 1)), linear-gradient(to right, rgba(0, 0, 0, 0), rgba(1, 0, 17, 0.9)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%2300f2a1' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");  
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

  width:60px;
  height:50px;

  .status-msg{
    display: none;
  }

  &:hover{
    // position: fixed;
    // margin-top: 70px;
    // right: 13px;
    // padding: 10px;

    .status-msg{
      display: block;
      float: left;
      font-size: 0.6rem;
    }
  }
}

// .status-msg-popup{
//     width:135px;
//     position:absolute;
//     right:0px;
//     top: 50px;
//     padding: 10px;
//     border-top:3px solid #00f2a1;
//     border-bottom:3px solid #00f2a1;
//     background-color: #01000b;
//     background-image: linear-gradient(to top, rgba(0,20,20,0), rgba(0,20,20,1)) !important;
// }

.my-drawer{
  background-color: #100e2f;
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

.my-text-dimmed-bg{
  padding: 5px;
  border-radius: 5px;
  background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)); 
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
.support-msg-popup{
    border:3px solid #00f2a1;
}
</style>