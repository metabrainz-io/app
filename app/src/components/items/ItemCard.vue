<template>
    <div class="q-pa-sm">
    <q-card 
        class="items-card text-white no-border-radius"
        style="background-color: #070716;border: 3px solid #100e2f;">
            <q-card-section>
                <q-img
                    style="border:3px solid #100e2f;"
                    :src="token.img_src"
                    spinner-color="primary"
                />
            </q-card-section>

            
            <q-card-section align="center">
                <div>
                    <div class="text-white text-weight-bold">{{token.name}}</div>
                    <div class="text-grey-6" v-if="token.descr.length>descr_maxlen">
                        {{token.descr.substring(0,descr_maxlen)}}..
                    </div>
                    <div v-else>
                        {{token.descr.substring(0,descr_maxlen)}}
                    </div>
                    <q-space class="q-py-sm"></q-space>

                    <!-- BTN -->
                    <div class="q-pa-md">
                    <div style="width:128px;margin-left:-10px;">
                        <q-btn 
                            class="btn-helper" dense flat unelevated push :ripple="false" :value="mg_page_btn_1_hover"
                            @mouseover="mg_page_btn_1_hover = true" @mouseleave="mg_page_btn_1_hover = false"
                            @click="$emit('popup-token-view', token)"
                        >
                            <img v-if="!mg_page_btn_1_hover" src="@/assets/style/main_btn.png" width="128">
                            <img v-else src="@/assets/style/main_btn_press.png" width="128">
                            <div v-if="!mg_page_btn_1_hover" class="my-text text-caption text-weight-bold text-secondary" style="position:absolute;top:16px;">View</div>
                            <div v-else class="my-text text-caption text-weight-bold text-white" style="width:128px;position:absolute;top:14px;left:0.1rem;">View</div>
                        </q-btn>
                    </div>
                    </div>

                    <!--
                    <div 
                        class="my-btn"
                        @click="$emit('popup-token-view', token)"
                    >
                        <div class="q-pa-xs">
                            View
                        </div>
                    </div>
                    <q-btn 
                        class="text-dark"
                        label="view"
                        @click="$emit('popup-token-view', token)"
                        style="background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;" 
                    />
                    -->

                </div>
            </q-card-section>
    </q-card>
    </div>
</template>

<script>
import { ref } from 'vue'
export default{
    name: 'ItemCard',
    props: ['token'],
    setup(){
        const descr_maxlen = 24;
        const mg_page_btn_1_hover = ref(false)
        return{
            mg_page_btn_1_hover,
            descr_maxlen
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