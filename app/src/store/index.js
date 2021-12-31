import { createStore, storeKey } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'


// The user
const UserState = {
    account: null,
    profile: null,
}

// User sign in data
const loginState = {
    isAuthenticated: false,
    metaInstalled: false,
    metaConnected: false,
    metaAccount: "",
    signature: null,
    previousRoute: {
      "route": "",
      "page": "",
    },
    session: {
      "access": "",
      "refresh": "",
    }
}

// Metamask plugin related
const browserState = {
    metaInstalled: false,
    metaConnected: false,
    metaAccount: "",
}
  
// Default state
const state = {
    user: UserState,
    login: loginState,
    browser: browserState,
    auth: false
}

// Store settings
const store = createStore({
    state,
    getters,
    actions,
    mutations,
    plugins: [createPersistedState()],
})

// Store settings
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