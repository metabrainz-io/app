// import store from ".";
import { 
    login, logout, refresh, getUser, claimToken
} from "../api";


export const login_action = ({commit}) => {
    try {
        return login(commit)
            .then((session) => {
                // Save session
                if(session !== null){
                    console.log(true)
                    commit('createUserSession', session)
                    // ============================
                    // Reload page to redirect user
                    // ============================
                    // NOTE:
                    // ----------------------------
                    // Reloading the page will force meta.auth validation in routes-
                    // with the newly changed variables that has been set above via-
                    // metaConnect() and commit('setAuth')
                    window.location.reload();
                }else{
                    throw new Error("Err: Something went wrong during the login request")
                }
            });
    }catch(error){
        console.log(error)
        // TODO:
        // Return err notification to display to user
    }
}

export const logout_action = ({commit}) => {
    try{
        return logout(commit)
        .then((out) =>{
                console.log(out);
                // ============================
                // Reload page to redirect user
                // ============================
                // NOTE:
                // ----------------------------
                // Reloading the page will force meta.auth validation in routes-
                // with the newly changed variables that has been set above via-
                // metaConnect() and commit('setAuth')
                window.location.reload();
            });
    }catch(error){
        console.log(error)
        // TODO:
        // Return err notification to display to user
    }
}

export const refresh_session_action = ({commit}) => {
    try{
        return refresh(commit).
            then((out) =>{
                console.log(out);
            });
    }catch(error){
        console.log(error)
        // TODO:
        // Return err notification to display to user
    }
}

export const force_destroy_session_action = ({commit}) => {
    commit('destroyUserSession')
}

export const get_user_action = ({commit}) => {
    try{
        return getUser(commit).
            then((out) =>{
                console.log(out);
            });
    }catch(error){
        console.log(error)
        // TODO:
        // Return err notification to display to user
    }
}

export const claim_action = ({commit}, token) => {
    try {
        return claimToken(commit, token)
            .then((res) => {
                // Save session
                // console.log("Final result:"+res);
                return res;

                // if(){
                //     // popup message:
                //     // -    Congratulations!! Your claim has been received!
                //     // -    The token will be available as soon as the date ends
                //     console.log("Claimed token: "+token.name)
                //     alert("Congratulations!! Your claim has been received!")
                // }else{
                //     console.log("Err: Could not claim token, sometin wongy wong!")
                //     alert("Could not claim token! Either the token is not claimable or your unauthorized.")
                // }
                
            });
    }catch(error){
        console.log("error")
        console.log(error)
        // TODO:
        // Return err notification to display to user
    }
    return false;
}