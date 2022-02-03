import store from '@/store'
import { validate } from '@/api/session'
import { metaConnect, metaSign } from '@/api/metamask'
import { 
    connectRequest, //disconnectRequest,
    connectAuthenticate
} from "./api";


export async function connect(commit){
    let session = null;

    try{
        const connection = await metaConnect(commit);
        if(connection){

            // Get account
            const eth_addr = store.getters.currAccount;

            // TODO: Compare curr account with last logged in account

            // Check if session exists
            session = await validate();
            if(session){
                console.warn("Warning: Already existing session found!")
                return session;
            }

            console.warn("Warning: No existing session found, continuing!")

            // Request login and retrieve sign msg
            var connection_request = null;
            try{
                connection_request = await connectRequest(eth_addr)
                if(connection_request == null)
                    throw new Error("Server is either busy or offline, try again later.");
            }catch(e){
                console.log(e);
            }

            let signed_id = connection_request['sign_id']
            let account = connection_request['addr']

            // Sign using metamask
            const signatureResult =  await metaSign(signed_id, account)
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "account":account.toLowerCase(), "signature":signatureResult }),
            };
            
            // Authenticate and retrieve session
            const auth_data =  await connectAuthenticate(requestOptions)
            if(auth_data["message"] == "success"){
                session = {
                    "access": auth_data['token']['access'],
                    "refresh": auth_data['token']['refresh'],
                }
                const userdata = auth_data["userdata"];
                commit("setUserdata", userdata);
                commit('createUserSession', session);
            }else{
                throw new Error(auth_data["message"]);
            }
            return session;
        }
    }catch(e){
        console.log(e)
        commit('destroyBrowserSession')
        commit('setAccountLast', store.getters.currAccount)
        commit('destroyUserSession')
        return null;
    }
}

export async function disconnect(commit){

    // const requestOptions = {
    //     method: "POST",
    //     headers: { 
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": "Bearer "+store.getters.session.access
    //     },
    //     body: JSON.stringify({"refresh_token": store.getters.session.refresh})
    // };

    try{
        // let resp = await disconnectRequest(requestOptions);
        // console.log(resp["message"])
        commit('destroyBrowserSession')
        commit('setAccountLast', store.getters.currAccount)
        commit('destroyUserSession')
    }catch(e){
        console.log(e);
        return false;
    }
    return true;
}