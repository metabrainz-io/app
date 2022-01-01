import store from './store'
import Web3 from 'web3'
import MetaMaskOnboarding from '@metamask/onboarding'


function metaConnect(commit){
    if(store.getters.metaInstalled){
        try {
            return window.ethereum.request({method: 'eth_requestAccounts'})
            .then((accounts)=>{
                commit('setAddress', accounts[0])
                commit('setConnected', true)
                commit('setAuth', true)
                return true
            });
        }catch(error){
            console.log("Err: Something went wrong when retrieving crypto address!")
            console.error(error);
        }
    }
    else{
        // Meta is not installed, direct to meta download page
        console.log("Err: Metamask not installed, proceed to download/install first!")
        const forwarderOrigin = 'http://cluster.provider-0.prod.ams1.akash.pub:30848'
        const onboarding = new MetaMaskOnboarding({forwarderOrigin});
        onboarding.startOnboarding();
        commit('setConnected', false)
        return null
    }
}

function metaSign(signed_id, account){
    const web3 = new Web3(window.ethereum);
    if(signed_id != null){
        let signed_login = signed_id.toString();
        try{
            return web3.currentProvider.send(
                "personal_sign",
                [
                    signed_login,
                    account, // account used to sign.
                ]
            )
            .then(function(signature){
                const signatureResult = signature.result;
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ "account":account.toLowerCase(), "signature":signatureResult }),
                };
                return requestOptions
    
            });
        }catch(error){
            console.log(error);
        }
    }else{
        console.log("Err: No 'signed_id' found, please try again");
    }
    return null
}

function validRequest(commit, status){
    if(status < 200 || status > 201){
        if(status == 401){
            // Clear all auth data, user needs to login again
            commit('destroyUserSession')
            return false
        }else if(status == 400){
            // Do not destroy the session, this is simply a bad request
            return false
        }
    }
    return true
}

function loginRequest(account){
    return fetch(`http://cluster.provider-0.prod.ams1.akash.pub:30848/api/account/login/`+account, { method: "GET" })
    .then((response) => {
        return response.json()
    });
}

function loginAuth(requestobject){
    return fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/account/login/', requestobject)
    .then((response) => {
        return response.json();
    });
}

function logoutAuth(requestobject){
    return fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/account/logout/', requestobject)
    .then((response) => {
        return response.json();
    });
}

function refreshAuth(commit){
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({"refresh": store.getters.session.refresh })
    };
    
    return fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/account/token/refresh/', requestOptions)
        .then((response)=>{
            if(validRequest(commit, response.status))
                return response.json()
            else
                throw new Error("User unauthorized: "+response.status.toString())
        });
}

function claimRequest(account){
    let url = `http://cluster.provider-0.prod.ams1.akash.pub:30848/api/assets/claim_request/`+account;
    console.log("claim request: "+url)
    return fetch(`http://cluster.provider-0.prod.ams1.akash.pub:30848/api/assets/claim_request/`+account, { method: "GET" })
    .then((response) => {
        return response.json()
    });
}

function claimAsset(requestobject, tid){
    return fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/assets/claim_asset/'+tid, requestobject)
    .then((response) => {
        if(response.status != 200){
            throw new Error(response.status)
        }
        return response.json();
    });
}

// function prepSession(commit){

//     try{
//         let sess = store.getters.session
//         if(sess == null || sess == undefined)
//             return false
//     }catch(error){
//         console.log("Err: There seems to be no session!")
//         console.log(error)
//         // Create an empty session object if one did not yet exist
//         commit('createUserSession', {"access": "","refresh": ""})
//         return false
//     }
//     return true
// }

function user(commit){
    const requestOptions = {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer "+store.getters.session.access
        }
    };

    try{
        return fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/account/profile', requestOptions)
            .then((response) => {
                if(validRequest(commit, response.status))
                    return response.json()
                else
                    window.location.reload()
            });
    }catch(error){
        console.log(error)
    }
}

export async function login(commit){
    
    // Before proceeding check if there already was a valid session
    let auth_data = null 
    try{
        auth_data = await refreshAuth(commit);

        if(auth_data !== null){
            // Session found! Refresh by overwrite existing session data
            console.log("Cached session looks A Okay!")
            let session = {"access": auth_data['access'], "refresh": auth_data['refresh']}
            return session
        }
        // No auth data found, just continue..
    }catch(error){
        console.log("Err: Could not refresh session!")
        console.log(error)
        // Just continue..
    }

    // No active session found, try to connect
    // First validate if meta is installed, without Metamask proceeding not possible
    let installed = Boolean(window.ethereum && window.ethereum.isMetaMask);
    commit('setInstalled', installed)

    try{
        const connection = await metaConnect(commit);

        if(connection){
            // Get account
            const eth_addr = store.getters.metaAccount

            // Request login and retrieve sign msg
            const rlogin =  await loginRequest(eth_addr)
            let signed_id = rlogin['sign_id']
            let account = rlogin['addr']

            // Sign using metamask
            const sign_data =  await metaSign(signed_id, account)
            let requestobject = sign_data

            // Authenticate and retrieve session
            const auth_data =  await loginAuth(requestobject)
            let session = null
            
            try{
                session = {
                    "access": auth_data['token']['access'],
                    "refresh": auth_data['token']['refresh'],
                }
            }catch(error){
                console.log(error)
            }
            return session
        }
        // Woops, no connection to Metamask could be made

    }catch(error){
        console.log("Err: Something went wrong!")
        console.log(error)

        // Clear all auth data, user needs to login again
        commit('destroyUserSession')
    }
    return null
}

export async function logout(commit){

    // TODO:
    // Is user logged in?
    // Are there:
    //  - access/refresh token
    //  - address data etc
    // if not user probably already logged out
    const requestOptions = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer "+store.getters.session.access
        },
        body: JSON.stringify({"refresh_token": store.getters.session.refresh})
    };

    try{
        await logoutAuth(requestOptions);
        commit('destroyUserSession')
    }catch(error){
        console.log("Err: Something went wrong!")
        console.log(error)
        return false
    }

    return true
}

export async function refresh(commit){

    // Prepair sess if none exist
    // console.log("prep sess")
    // prepSession(commit)
    
    let auth_data = null 
    try{
        // console.log("Refresh auth")
        auth_data = await refreshAuth(commit);

        if(auth_data !== null){
            // Overwrite existing session data
            let session = {"access": auth_data['access'], "refresh": auth_data['refresh']}
            commit('createUserSession', session)
            return true
        }else{
            // Clear all auth data, user needs to login again
            console.log("Err: Something went wrong, could not retrieve session data!")
            commit('destroyUserSession')
        }
    }catch(error){
        console.log("Err: Could not refresh session!")
        console.log(error)
        window.location.reload()
    }
    return false
}

export async function getUser(commit){

    // NOTE:
    // =============================
    // proof activity to API by refreshing session after call
    //
    // TODO:
    // =============================
    // Apply this to other API calls also,
    // Also, if session could not be refresh destroy all user related-
    // sess/auth data and force login
    let session = null
    let auth_data = null 
    try{
        auth_data = await refreshAuth(commit);
    }catch(error){
        console.log(error)
        window.location.reload()
    }

    if(auth_data !== null){
        session = {
            "access": auth_data['access'],
            "refresh": auth_data['refresh'],
        }
        // Overwrite existing session data
        commit('createUserSession', session)
    }

    let usr_data = null
    try{
        usr_data = await user(commit);
    }catch(error){
        console.log("Err: Something went wrong!")
        console.log(error)
    }
    return usr_data
}


// NOTE: Initial add, no updates
export function fetchItems(state){
    console.log("Fetching all items..")
    fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/assets/all_assets')
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((item)=>{
            
            // Only claimable items here
            if(item.claimable)
                state.items_claimable.push(item)
            // All items
            state.items.push(item)
        })
        state.loading = false;
    })
}

export function updateItems(state){
    console.log("Check for updates..")
    fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/assets/all_assets')
    .then((res)=>res.json())
    .then((data)=>{

        // Add / update
        data.forEach((item)=>{

            // Add new items
            const check_new_item = state.items.find(el => el.tid == item.tid)
            if(check_new_item == undefined){
                console.log("non existing item id: "+item.tid);
                // Only claimable items here
                if(item.claimable)
                state.items_claimable.push(item)
                // All items
                state.items.push(item)
            }
            state.items.forEach((item_local)=>{
                if(item.tid == item_local.tid){
                    if(item.quantity != item_local.quantity){
                        state.items[state.items.indexOf(item_local)] = item;
                    }
                }
            })

            state.items_claimable.forEach((item_claimable_local)=>{
                if(item.tid == item_claimable_local.tid){
                    if(item.quantity != item_claimable_local.quantity){
                        state.items_claimable[state.items_claimable.indexOf(item_claimable_local)] = item;
                    }
                }
            })
        })
    })
}

// export function claimItem(token){
//     console.log("Try claiming token: "+token.tid.toString())
//     fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/assets/all_assets')
//     // fetch('http://cluster.provider-0.prod.ams1.akash.pub:30848/api/assets/claim/'+token.tid)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     return true;
// }

export async function claimToken(commit, token){
    
    // Before proceeding check if there already was a valid session
    let auth_data = null 
    try{
        auth_data = await refreshAuth(commit);

        if(auth_data !== null){
            // Session found! Refresh by overwrite existing session data
            console.log("Cached session looks A Okay!")
            let session = {"access": auth_data['access'], "refresh": auth_data['refresh']}
            commit('createUserSession', session)
        }else{
            throw new Error("User session expired, reconnect first")
        }
        // No auth data found, just continue..
    }catch(error){
        console.log(error)
        return false
    }

    // No active session found, try to connect
    // First validate if meta is installed, without Metamask proceeding not possible
    // let installed = Boolean(window.ethereum && window.ethereum.isMetaMask);
    // commit('setInstalled', installed)

    try{

        // Get account
        const eth_addr = store.getters.metaAccount

        let signed_id = null
        let account = null
        let message = null

        console.log("Start..")
        const rlogin =  await claimRequest(eth_addr)
        signed_id = rlogin['sign_id']
        account = rlogin['addr']
        message = rlogin['message']

        if(signed_id.length <= 0 || account.length <= 0){
            if(message.length > 0)
                message = "User unauthorized"
            throw new Error(message)
        }

        // Sign using metamask
        const sign_data =  await metaSign(signed_id, account)
        let requestobject = sign_data

        // Process claim, and retrieve new session
        const auth_data =  await claimAsset(requestobject, token.tid)
        let session = null
        
        try{
            session = {
                "access": auth_data['token']['access'],
                "refresh": auth_data['token']['refresh'],
            }
        }catch(error){
            console.log(error)
        }
        commit('createUserSession', session)
        return true

    }catch(error){
        if(error == 400)
            console.log("Err: Bad request!")
        else
            console.log("Err: Something went wrong!")
    }
    return false
}