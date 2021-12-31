// Sign in data
export const metaInstalled =    loginState => loginState.metaInstalled
export const metaConnected =    loginState => loginState.metaConnected
export const metaAccount =      loginState => loginState.metaAccount
export const signature =        loginState => loginState.signature
export const isAuthenticated =  loginState => loginState.isAuthenticated
export const previousRoute =    loginState => loginState.previousRoute
export const session =          loginState => loginState.session

// User data
export const userAccount =      state => state.user.account
export const userProfile =      state => state.user.profile