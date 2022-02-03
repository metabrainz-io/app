import { createStore, storeKey } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'


/*
 * Metamask
 */
const browserState = {
    metaInstalled: false,
    metaConnected: false,
}

/*
* Connection data
*/
const connectionState = {
    isAuthenticated: false,
    lastAccount: "",
    currAccount: "",
    signature_connect: null,
    signature_claim: null,
    claim_proof: [],
    previousRoute: {
        "route": "",
        "page": "",
    },
    session: {
        "access": "",
        "refresh": "",
    },
    userdata:[]
}

/*
 * App state
 */
const state = {
    browser: browserState,
    connections: connectionState,
    auth: false
}

/*
 * Create store
 */
const store = createStore({
    state,
    getters,
    actions,
    mutations,
    plugins: [createPersistedState()],
})

/*
 * Store settings
 */
if(module.hot){
    module.hot.accept([
        './getters',
        './actions',
        './mutations',
    ], () =>{
        storeKey.hotUpdate({
            getters: require('./getters'),
            actions: require('./actions'),
            mutations: require('./mutations'),
        })
    })
}

export default store