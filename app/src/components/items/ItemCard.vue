<template>
 
    <q-card 
        class="items-card transparent text-white no-border-radius">
            <q-card-section>
                <!--
                    :src="token.img_src"
                    src="../../assets/SpaceVaxx_transparent_full.gif"
                    src="../../assets/CyberBrain_sync_transparent_lg.gif"
                    templatevaxx_lg.gif
                <q-img
                    spinner-color="accent"
                />
                <q-img v-if="token.tid==0"
                    src="../../assets/medz/templatevaxx_lg.gif"
                    style="width: 7.5rem;"
                    spinner-color="accent"
                />
                -->
                <q-img v-if="token.tid==0"
                    src="../../assets/medz/CyberVaxx_lg.gif"
                    spinner-color="accent"
                />
                <q-img v-if="token.tid==1"
                    src="../../assets/medz/MetaVaxx_lg.gif"
                    spinner-color="accent"
                />
                <q-img v-if="token.tid==2"
                    src="../../assets/medz/SpaceVaxx_lg.gif"
                    spinner-color="accent"
                />
                <q-img v-if="token.tid==3"
                    src="../../assets/medz/QuantumVaxx_lg.gif"
                    spinner-color="accent"
                />
                <q-img v-if="token.tid==4"
                    src="../../assets/medz/FusionVaxx_lg.gif"
                    spinner-color="accent"
                />
            </q-card-section>
            
            <q-card-section>
                <div v-if="token.claimable">
                    <div class="text-weight-bold">{{token.name}}</div>
                    <div>Available: {{token.quantity}}</div>
                    <div>{{token.descr}}</div>
                    <q-space class="q-py-sm"></q-space>
                    <!-- btn claimable items -->
                    <q-btn 
                        color="accent"
                        label="Claim"
                        @click="$emit('popup-token-claim', token)"
                    />
                </div>
                <div v-else>
                    <div class="text-weight-bold">{{token.name}}</div>
                    <div>{{token.descr}}</div>
                    <q-space class="q-py-sm"></q-space>
                    <!-- btn regular items -->
                    <q-btn 
                        color="accent"
                        label="View"
                        @click="$emit('popup-token-view', token)"
                    />
                </div>
            </q-card-section>

    </q-card>
    
</template>

<script>

export default{
    name: 'ItemCard',
    props: ['token'],
    setup(){
        return{
        }
    }
}

</script>