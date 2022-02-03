<template>
    <div class="q-pa-sm">
    <q-card 
        class="items-card transparent text-white no-border-radius">
            <q-card-section>
                <q-img
                    :src="token.img_src"
                    spinner-color="primary"
                />
            </q-card-section>

            
            <q-card-section align="center">
                <div>
                    <div class="text-weight-bold">{{token.name}}</div>
                    <div v-if="token.descr.length>descr_maxlen">
                        {{token.descr.substring(0,descr_maxlen)}}..
                    </div>
                    <div v-else>
                        {{token.descr.substring(0,descr_maxlen)}}
                    </div>
                    <q-space class="q-py-sm"></q-space>
                    <div 
                        class="my-btn"
                        @click="$emit('popup-token-view', token)"
                    >
                        <div class="q-pa-xs">
                            View
                        </div>
                    </div>
                    <!--
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
export default{
    name: 'ItemCard',
    props: ['token'],
    setup(){
        const descr_maxlen = 24;
        return{
            descr_maxlen
        }
    }
}
</script>

<style lang="scss">

</style>