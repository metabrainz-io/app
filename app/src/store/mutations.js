export const zeroMutation = (object, value) =>{
    console.log('test mutation: '+value)
}

export const setInstalled = (browserState, installed) =>{
    browserState.metaInstalled = installed;
}

export const setConnected = (browserState, connected) =>{
    browserState.metaConnected = connected;
}

export const setAccountCurrent = (connectionState, account) =>{
    connectionState.currAccount = account
}

export const setAccountLast = (connectionState, account) =>{
    connectionState.lastAccount = account
}

export const setAuth = (connectionState, connected) =>{
    connectionState.isAuthenticated = connected;
}

export const setUserdata = (connectionState, userdata) =>{
    connectionState.userdata = userdata
}

export const createUserSession = (connectionState, response) =>{
    connectionState.session = response
}

export const refreshUserSession = (connectionState, session) =>{
    connectionState.session = session
}

export const destroyBrowserSession = (browserState) =>{
    browserState.metaConnected = false;
}

export const destroyUserSession = (connectionState) =>{
    connectionState.isAuthenticated = false;
    connectionState.currAccount = ""
    connectionState.userdata = []
}

export const setupClaim = (connectionState, signature) =>{
    connectionState.signature_claim = signature;
}

export const updateClaimInternal = (connectionState, userdata) => {
    connectionState.userdata = userdata;
}

export const setClaimProof = (claimState, proof) =>{
    claimState.claim_proof = proof
}

export const logPreviousRoute = (connectionState, route) =>{
    connectionState.previousRoute = route
}

export const hasNotification = (connectionState, value) =>{
    connectionState.hasNotification = value
}

export const msgNotification = (connectionState, message) =>{
    connectionState.msgNotification = message
}