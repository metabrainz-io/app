import store from '@/store'
import Web3 from 'web3'
import MetaMaskOnboarding from '@metamask/onboarding'

/*
 * Check if connected
 */
export function isConnected(){
    const web3 = new Web3(window.ethereum);
    try{
        return web3.eth.getAccounts()
        .then(function(accounts){
            if (accounts.length >= 1){
                return true;
            }
    
            console.warn("No accounts connected!");
            return false;
        });
    }catch(e){
        console.log(e);
    }

    console.warn("Something went wrong!");
    return false;
}

/*
 * Connect to Metamask
 */
export function metaConnect(commit){

    // First validate if meta is installed, without Metamask proceeding not possible
    let installed = Boolean(window.ethereum && window.ethereum.isMetaMask);
    commit('setInstalled', installed)

    if(store.getters.metaInstalled){

        try {
            return window.ethereum.request({method: 'eth_requestAccounts'})
            .then((accounts)=>{
                commit('setAccountCurrent', accounts[0]);
                commit('setConnected', true);
                commit('setAuth', true);
                return true;
            });
        }catch(e){
            console.log("Error:Could not get user account!");
            console.error(e);
            return false;
        }
    }
    else{
        // Meta is not installed, direct to meta download page
        const forwarderOrigin = process.env.VUE_APP_API_ENDPOINT
        const onboarding = new MetaMaskOnboarding({forwarderOrigin});
        onboarding.startOnboarding();
        throw new Error("Metamask is not installed, proceed to download page!");
    }
}

/*
 * Sign message using Metamask
 */
export function metaSign(signed_id, account){
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
                return signature.result;  
            });
        }catch(e){
            console.log(e);
        }
    }else{
        console.log("Error: No 'signed_id' found, please try again");
    }
    return null;
}