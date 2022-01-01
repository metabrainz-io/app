// import store from './store'

// NOTE: Initial add, no updates
export function fetchItems(state){
    console.log("Fetching all items..")
    fetch(process.env.VUE_APP_API_ENDPOINT+'/api/assets/all_assets')
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
    fetch(process.env.VUE_APP_API_ENDPOINT+'/api/assets/all_assets')
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