import { NFTUri } from '@/token/token'
import { reactive } from 'vue';

export const assets = reactive({
    loading: true,
    items: [],
    items_claimable: []
});

/*
 * Resfresh session current connection
 */
export function connectRefresh(refresh){
    if(refresh == null || refresh == undefined)
        refresh = ""

    refresh = JSON.stringify({"refresh": refresh })
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": refresh.length,
            "Accept": "application/json",
        },
        body: refresh
    };
    
    return fetch(process.env.VUE_APP_API_ENDPOINT+'/api/account/token/refresh/', requestOptions)
    .then((response) => {
        if(response.status == 200){
            return response.json();
        }else{
            return null;
        }
    });
}

/*
 * Request to connect user
 */
export function connectRequest(account){
    return fetch(process.env.VUE_APP_API_ENDPOINT+'/api/account/login/'+account, { method: "GET" })
    .then((response) => {
        if(response.status == 200)
            return response.json();
        return null;
    });
}

/*
 * Authenticate user and validate sign message
 */
export function connectAuthenticate(requestobject){
    return fetch(process.env.VUE_APP_API_ENDPOINT+'/api/account/login/', requestobject)
    .then((response) => {
        return response.json();
    });
}

/*
 * Disconnect current user
 */
export function disconnectRequest(requestobject){
    return fetch(process.env.VUE_APP_API_ENDPOINT+'/api/account/logout/', requestobject)
    .then((response) => {
        return response.json();
    });
}

/*
 * Request to claim token
 */
export function claimRequest(requestobject, tid){
    return fetch(process.env.VUE_APP_API_ENDPOINT+'/api/assets/claim_request/'+tid, requestobject)
    .then((response) => {
        return response.json();
    });
}

/*
 * Authenticate user claim and validate sign message
 */
export function claimAuthenticate(requestobject, tid){
    return fetch(process.env.VUE_APP_API_ENDPOINT+'/api/assets/claim_asset/'+tid, requestobject)
    .then((response) => {
        if(response.status != 500)
            return response.json();
        else
            throw new Error("The server had some problems!");
    });
}

/*
 * Fetch token data once from API
 */

// from server
function tokenFromAPI(){
    return fetch(process.env.VUE_APP_API_ENDPOINT+'/api/assets/all_assets')
    .then((res)=> res.json())
    .then((data)=>{
        return data;
    })
}

export async function fetchTokenData(){
    const data_from_api = await tokenFromAPI();

    const constructTokenObject = async () =>{

        for (let index = 0; index < data_from_api.length; index++) {
            const item = data_from_api[index];
            
            // NOTE: 
            // Data from server: { quantity, claimable, id, uri, reserved/mintable }
            
            // NOTE: Data from ipfs:
            const metadata = await NFTUri(item.uri);
    
            item.name = metadata.name
            item.descr = metadata.descr
            item.img_src = metadata.image
            item.attributes = metadata.attributes
            item.quantity_mintable = item.mint_limit-item.mint_cur
            // item.claimable = true
            
            // Only claimable items here
            if(item.claimable)
            assets.items_claimable.push(item)
            assets.items.push(item)
        }
        return 0;
    }
    await constructTokenObject();
}

export function fetchItems(){
    assets.loading = true;
    fetchTokenData();
    assets.loading = false;
}

/*
 * Send reference
 */


// from server
async function sendRef(requestOptions){
    try{
        const response = await fetch(process.env.VUE_APP_API_ENDPOINT+'/api/message/notes', requestOptions)
        if(response)
            if(response.status == 200)
                return response.json();
            else
                return null;
    }catch(e){
        console.warn(e);
        return null;
    }
}

export function sendReference(user_ref){
    const data = JSON.stringify(user_ref);
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: data
    };

    try{
        return sendRef(requestOptions).then((res)=>{
            if(res != null)
                return true;
        });
    }catch(e){
        console.log(e);
    }
    return false;
}