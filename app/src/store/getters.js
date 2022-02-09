// Connection data
export const metaInstalled =        browserState => browserState.metaInstalled
export const metaConnected =        browserState => browserState.metaConnected
export const lastAccount =          connectionState => connectionState.lastAccount
export const currAccount =          connectionState => connectionState.currAccount
export const signature_connect =    connectionState => connectionState.signature_connect

// Claim data
export const signature_claim =      connectionState => connectionState.signature_claim
export const claim_proof =          connectionState => connectionState.claim_proof

export const isAuthenticated =      connectionState => connectionState.isAuthenticated
export const previousRoute =        connectionState => connectionState.previousRoute
export const session =              connectionState => connectionState.session

// User data
export const userdata =             connectionState => connectionState.userdata

// Device
export const deviceMobile =             connectionState => connectionState.deviceMobile
