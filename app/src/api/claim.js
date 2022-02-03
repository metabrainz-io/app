import store from '@/store'
import { validate } from '@/api/session'
import { metaConnect, metaSign } from '@/api/metamask'
import { 
    claimRequest, claimAuthenticate,
} from "./api";


export async function claim_request(commit, tid, proof){
    
    let session = null;

    try{
        const connection = await metaConnect(commit);
        if(connection){

            // Get account
            const eth_addr = store.getters.currAccount;

            // TODO: Compare curr account with last logged in account

            // NOTE: In contrast to connect.js, if no valid session abort claim.
            session = await validate();
            if(!session)
                return null;
            else
                commit('createUserSession', session)

            console.warn("Info: Existing session found, continuing!")

            const requestOptions = {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer "+store.getters.session.access
                },
                body: JSON.stringify({"account": eth_addr, "proof":proof})
            };

            // Request claim
            const rclaim =  await claimRequest(requestOptions, tid);
            const signed_claim_id = rclaim['sign_id'];
            const account = rclaim['addr'];

            if(account != store.getters.currAccount){
                console.log("Something went horribly wrong!")
            }
            commit('setupClaim', signed_claim_id);
            const questions = rclaim['questions'];
            return questions 


        }
    }catch(e){
        console.log(e)
        commit('destroyBrowserSession')
        commit('setAccountLast', store.getters.currAccount)
        commit('destroyUserSession')
        return null;
    }
}

export async function claim(commit, tid, proof){
    
    let signed_claim_id = store.getters.signature_claim;
    let account = store.getters.currAccount;
    
    // Sign using metamask
    const signatureResult =  await metaSign(signed_claim_id, account)
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "account":account.toLowerCase(), "signature":signatureResult, "proof":proof }),
    };
    
    // Authenticate and retrieve session
    let session = null;
    const res =  await claimAuthenticate(requestOptions, tid)
    
    if(res["message"] == "success"){
        session = {
            "access": res['token']['access'],
            "refresh": res['token']['refresh'],
        }
    }else{
        throw new Error(res["message"]);
    }
    return session;
}