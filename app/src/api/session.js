import store from '@/store'
import { connectRefresh } from "./api";
import { isConnected } from '@/api/metamask'


export async function validate(){
    let session_new = null;
    
    try{
        const connected = await isConnected();
        if(connected){
            let refresh = store.getters.session.refresh
            if(refresh == undefined || refresh == null)
                throw new Error("No active session found!")
            
            let auth_data = await connectRefresh(refresh);
            if(auth_data !== null){
                try{
                    session_new = {"access": auth_data['access'], "refresh": auth_data['refresh']}
                    if(session_new.access != null || session_new.access != undefined){
                        console.warn("Cached session valid")
                        return session_new;
                    }
                }catch(e){
                    console.log(e);
                }
            }else{
                throw new Error("Authorization failed during refresh!")
            }
        }
    }catch(e){
        console.log(e)
    }
    return null;
}