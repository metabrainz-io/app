/*
 * Request to connect user
 */
// https://ipfs.io/ipfs/QmUfiNM6q9uPhqS2rKSFF6eiSxBpDYMcNyUnVPWDZY6EMJ

export const NFTUri = async (tokenUri) =>{
    
    if(!tokenUri || tokenUri == "" || tokenUri == null){
        return {
            success: false,
            status: "Please provide tokenUri"
        }
    }

    try{

        return fetch(tokenUri, { method: "GET" })
        .then((response) => {
            if(response.status == 200)
                return response.json();
            return null;
        })
        .then((out)=>{

            let attribs = []
            out.attributes.forEach((atr)=>{
                if(atr.value > 0){
                    if(atr.trait_type == "speed_base"){
                        attribs.push(atr)
                    }else if(atr.trait_type == "speed_base"){
                        attribs.push(atr)
                    }else if(atr.trait_type == "speed_turbo"){
                        attribs.push(atr)
                    }else if(atr.trait_type == "memory"){
                        attribs.push(atr)
                    }else if(atr.trait_type == "energy"){
                        attribs.push(atr)
                    }else if(atr.trait_type == "intelligence"){
                        attribs.push(atr)
                    }else if(atr.trait_type == "stability"){
                        attribs.push(atr)
                    }else if(atr.trait_type == "recovery"){
                        attribs.push(atr)
                    }else if(atr.trait_type == "meta"){
                        attribs.push(atr)
                    }
                }
            })
            let token = {
                "name": out.name,
                "image": out.image,
                "descr": out.description,
                "attributes": attribs
            }
            return token;
        })
    }catch(e){
        return {
            success: false,
            status: "😥 Something went wrong: " + e.message,
        }
    }
}