<template>
    <q-card 
        class="items-card transparent text-white no-border-radius">
            <q-card-section>
                <q-img
                    :src="token.img_src"
                    spinner-color="accent"
                />
            </q-card-section>
            
            <q-card-section>
                <div>
                    <div class="text-weight-bold">{{token.name}}</div>
                    <div>{{token.descr}}</div>
                    <q-space class="q-py-sm"></q-space>
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