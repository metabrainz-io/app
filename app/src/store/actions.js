import { connect, disconnect } from '@/api/connect'
import { claim_request, claim } from '@/api/claim'
import { validate } from '../api/session';

export const connect_action = ({commit}, state) => {
    try {
        return connect(commit)
            .then((session) => {
                if(session !== null){
                    state.isConnected = true;
                    console.warn("Connected.");
                }else{
                    state.isConnected = false;
                    throw new Error("Could not sign in user!")
                }
            });
    }catch(e){
        console.log(e)
        // state.hasNotification = true;
        // state.msgNotification = "Could not sign in user!";
    }
}

export const disconnect_action = ({commit}, state) =>{
    try{
        return disconnect(commit)
        .then(() =>{
            state.isConnected = false;
            console.info("Successfully disconnected!");
        });
    }catch(e){
        console.log(e)
    }
}

export const connect_refresh_action = ({commit}) => {
    try {
        return validate()
            .then((session) => {
                if(session){
                    commit('refreshUserSession', session);
                }else{
                    commit('destroyBrowserSession')
                    commit('destroyUserSession')
                }
            });
    }catch(e){
        console.log(e)
    }
}

export const claim_request_action = ({commit}, state) => {
    try {
        return claim_request(commit, state.token.tid)
            .then((questions) => {
                if(questions != null){
                    console.warn("Received claim challenge!");
                    state.token_claim_challenge = true;
                    state.token_claim_questions = questions;
                    state.token_claim_questions_index_max = questions.length
                }else{
                    throw new Error("Claim request failed!")
                }
            });
            
    }catch(e){
        console.log(e)
    }
}

export const claim_action = ({commit}, state) => {
    try {
        return claim(commit, state.token.tid, state.token_claim_answers)
            .then((session) => {
                if(session !== null){
                    commit('createUserSession', session)
                    state.userdata['claims'].push(state.token.tid);
                    commit('updateClaimInternal', state.userdata)
                    state.permittedClaim = false;

                    console.warn("Successfully claimed token!");
                    alert("Congratulations!! 🎉🎉🎉\nClaim '"+state.token.name+"' has been processed ✅\nIt will be linked to your address when the airdrop happens 🔗\nUntill then, stay healthy!!💊")
                }else{
                    throw new Error("Claim failed!")
                }
            });
            
    }catch(e){
        console.log(e)
    }
}

export const someaction = ({commit}) =>{
    commit('zeroMutation', null);
}