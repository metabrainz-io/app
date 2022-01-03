<template>
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
                    <!--<div>{{token.descr}}</div>-->
                    <q-space class="q-py-sm"></q-space>
                    <q-btn 
                        class="text-dark"
                        label="View"
                        @click="$emit('popup-token-view', token)"
                        style="background-image: linear-gradient(to right, #89f7fe 0%, #66a6ff 100%) !important;"
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