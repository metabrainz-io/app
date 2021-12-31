// Empty test mutation
export const zeroMutation = () =>{
    console.log(null)
}

// Metamask
export const setInstalled = (loginState, installed) =>{
    console.log("Found Metamask: "+installed.toString())
    loginState.metaInstalled = installed;
}
export const setConnected = (loginState, connected) =>{
    loginState.metaConnected = connected;
}
export const setAddress = (loginState, accounts) =>{
    loginState.metaAccount = accounts
}

export const setAuth = (loginState, connected) =>{
    loginState.isAuthenticated = connected;
}

// Sessions
export const createUserSession = (loginState, response) =>{
    loginState.session = response
}

export const destroyUserSession = (loginState) =>{
    let no_session = {
        "access": "",
        "refresh": "",
    }
    loginState.metaInstalled = false;
    loginState.metaConnected = false;
    loginState.isAuthenticated = false;
    loginState.metaAccount = ""
    loginState.session = no_session
}

// Routing
export const logPreviousRoute = (loginState, route) =>{
    loginState.previousRoute = route
}