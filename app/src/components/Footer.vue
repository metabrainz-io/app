<template>

    <!-- roof elements begin (pushing down) -->
    <div class="gt-md" style="height:192px;"/>
    <div class="lt-lg" style="height:192px;"/>
    <!-- roof elements end -->

    <div id="message"></div>
    <q-separator color="dark" style="height:0px;"/>
    <div class="footer-banner q-pa-xl row my-text text-white justify-center" style="border:12px solid #01000b;">
        <q-card flat dense class="q-pa-none flex justify-center bg-transparent row text-white">
            <!-- force height -->
            <div class="q-py-lg" style="width:100%;"/>


            <q-card-section horizontal class="gt-xs col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p class="q-pa-md text-h4 text-secondary text-weight-bolder">
                    We just LAUNCHED!!!&nbsp;&nbsp;🚀
                </p>
            </q-card-section>
            
            <q-card-section horizontal class="lt-sm justify-center col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p align="center" class="q-pa-md text-h5 text-secondary text-weight-bolder">
                    We just LAUNCHED!!!<br/>🚀🚀🚀
                </p>
            </q-card-section>

            <q-card-section horizontal class="gt-xs col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="">
                    <p class="q-pa-md text-h5 text-white text-weight-bolder">
                        Be one of the first to join our Discord!<br/><br/>
                        Let's build a community together!
                    </p>
                </div>
                <q-space/>
                <div class="btn-discord row items-center">
                    <q-btn 
                        class="gt-md no-border-radius"
                        style="width:225px;height:75px;background-color: #4c4886;"
                        flat dense
                    >
                    <!-- 
                        style="width:225px;height:75px;background-color: #009362;"
                        @click="openURL('https://discord.gg/uXJDA3CC')"
                    -->
                        <div class="text-h5 text-weight-bold">
                            Discord
                        </div>
                    </q-btn>
                    <q-btn 
                        class="gt-xs lt-lg no-border-radius"
                        style="width:175px;height:65px;background-color: #4c4886;"
                        flat dense
                    >
                    <!-- 
                        @click="openURL('https://discord.gg/uXJDA3CC')"
                        style="width:175px;height:65px;background-color: #009362;"
                    -->
                        <div class="text-h6 text-weight-bold">
                            Discord
                        </div>
                    </q-btn>
                </div>
            </q-card-section>

            <q-card-section horizontal class="lt-sm justify-center col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p align="center" class="text-h6 text-white text-weight-bolder">
                    Be one of the first to join our Discord!<br/><br/>Let's build a community together!
                </p>
            </q-card-section>

            <q-card-section horizontal class="lt-sm justify-center lt-sm col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="btn-discord row items-center">
                    <q-btn 
                        class="no-border-radius"
                        style="width:150px;height:50px;background-color: #4c4886;"
                        flat dense
                    >
                    <!-- 
                        @click="openURL('https://discord.gg/uXJDA3CC')"
                        style="width:150px;height:50px;background-color: #009362;"
                    -->                    
                        <div class="text-subtitle1 text-weight-bold">
                            Discord
                        </div>
                    </q-btn>
                </div>
            </q-card-section>
        </q-card>
    </div>

    <div id="contact"></div>
    <div
        class="q-pa-xl row my-text text-white justify-center"
        style="background-color:#01000b;"
    >
        <div id="meta-brainz-io"></div>
        <!-- force height -->
        <div class="gt-xs q-py-xl" style="width:100%;"/>
        <div class="lt-sm q-py-lg"/>

        <q-card flat dense class="q-pa-none bg-transparent row text-white">

            <!-- content-left -->
            <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div align="center" class="col">
                    <div 
                        class="gt-sm text-h3 text-weight-bolder text-white"
                        style="cursor:pointer;"
                        @click="$router.push({name: 'Home', hash: '#main'})"
                    >
                        METABRAINZ IO
                    </div>
                    <div 
                        class="gt-xs lt-md text-h4 text-weight-bolder text-white"
                        style="cursor:pointer;"
                        @click="$router.push({name: 'Home', hash: '#main'})"
                    >
                        METABRAINZ IO
                    </div>
                    <div 
                        class="lt-sm text-h5 text-weight-bolder text-secondary"
                        style="cursor:pointer;"
                        @click="$router.push({name: 'Home', hash: '#home'})"
                    >
                        METABRAINZ IO
                    </div>
                    <div class="row q-py-md flex justify-center my-title col text-h5 text-white">
                        <q-item style="width:60px;" clickable tag="a" target="_blank" href="https://twitter.com/metabrainz_io">
                            <q-item-section>
                            <q-item-label>
                                <q-icon color="white" name="fab fa-twitter"/>
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
                </div>
            </q-card-section>

            <!-- content-right -->
            <q-card-section horizontal class="flex justify-center col-lg-6 col-md-6 col-sm-12 col-xs-12">

                <div class="col justify-center">

                    <div class="row justify-center">
                        <div 
                            class="my-title text-subtitle1"
                            style="color:#4c4886;border: 2px solid #4c4886;width:225px;height:50px;text-align:center;margin:20px;"
                        >
                            <q-item><!-- clickable @click="$router.push({name: 'Home', hash: '#roadmap'})">-->
                            <q-item-section>
                                <q-item-label>
                                LitePaper
                                &nbsp;&nbsp;
                                <q-icon name="article"/>
                                </q-item-label>
                            </q-item-section>
                            </q-item>
                        </div>            
                        
                        <div 
                            class="my-title text-subtitle1"
                            style="color:#4c4886;border: 2px solid #4c4886;width:225px;height:50px;text-align:center;margin:20px;"
                        >
                            <q-item>
                            <q-item-section>
                                <q-item-label>
                                Investors&nbsp;&nbsp;
                                <q-icon name="fab fa-linkedin"/>
                                </q-item-label>
                            </q-item-section>
                            </q-item>
                        </div>

                        <div 
                            class="my-title text-subtitle1"
                            style="color:#4c4886;border: 2px solid #4c4886;width:225px;height:50px;text-align:center;margin:20px;"
                        >
                            <q-item>
                            <q-item-section>
                                <q-item-label>
                                    Build with us &nbsp;&nbsp;
                                <q-icon name="fab fa-discord"/>
                                </q-item-label>
                            </q-item-section>
                            </q-item>                
                        </div>

                        <div 
                            class="my-title text-subtitle1"
                            style="color:#4c4886;border: 2px solid #4c4886;width:225px;height:50px;text-align:center;margin:20px;"
                        >
                            <q-item>
                            <q-item-section>
                                <q-item-label>
                                Terms of Service&nbsp;&nbsp;
                                <q-icon name="article"/>
                                </q-item-label>
                            </q-item-section>
                            </q-item>                
                        </div>
                    </div>
                </div>
            </q-card-section>
            <!-- force height -->
            <div class="q-py-xl" style="width:100%;"/>
        </q-card>
    </div>

   

</template>

<script>
import { openURL } from 'quasar'
export default{
    name: 'Footer',
    setup(){
        return{
            openURL
            // open_url: (url)=>{
            //     openURL(url);
            // },
        }
    }
}
</script>



<style lang="scss">
.footer-banner{
    background-color: #06051c;
    // background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(1, 0, 11, 1)), linear-gradient(to top, rgba(0, 0, 0, 0), rgba(1, 0, 17, 0.9)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%2300f2a1' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
    // background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(1, 0, 11, 0.9)), linear-gradient(to right, rgba(0, 0, 0, 0), rgba(16, 14, 47, 0.9)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='38' height='38' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L39 1h-38v38z' fill='rgba(16, 14, 47,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L1 39h38v-38z' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L0 40h40v-40z' fill='rgba(16, 14, 47,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L40 0h-40v40z' fill='rgba(0, 1, 11,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")
    // background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(1, 0, 11, 0.9)), linear-gradient(to right, rgba(0, 0, 0, 0), rgba(16, 14, 47, 0.9)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='38' height='38' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L39 1h-38v38z' fill='rgba(107, 42, 83,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L1 39h38v-38z' fill='rgba(0, 1, 11, 1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L0 40h40v-40z' fill='rgba(107, 42, 83,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L40 0h-40v40z' fill='rgba(0, 1, 11, 1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")
    // background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(1, 0, 11, 1)), linear-gradient(to right, rgba(0, 0, 0, 0), rgba(16, 14, 47, 1)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='38' height='38' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 1, 11,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L39 1h-38v38z' fill='rgba(7, 135, 108,1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L1 39h38v-38z' fill='rgba(0, 1, 11, 1)'/%3E%3Cpath d='M40 0v10h60v60L0 40L0 40h40v-40z' fill='rgba(7, 135, 108,1)'/%3E%3Cpath d='M0 40h-10v-60h60L40 0L40 0h-40v40z' fill='rgba(0, 1, 11, 1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")
    background-image:linear-gradient(163deg, #6b2a53 0%, rgba(126, 45, 93, 0.8) 11.6%, rgba(147, 48, 102, 0.6) 23.2%, rgba(169, 49, 109, 0.4) 34.8%, rgba(217, 46, 116, 0) 58%)
}

.btn-discord {
    color:#01000b;
    &:hover{
        // color:white;
        color:#01000b;
    }
}
</style>
