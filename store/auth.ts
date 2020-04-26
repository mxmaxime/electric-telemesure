interface AuthStateInterface {
  isConnected: boolean,
  user?: Object
};

export const state = (): AuthStateInterface => ({
  isConnected: false,
});

// export const getters = {
//   getIsConnected: (state: AuthStateInterface) => state.isConnected
// };

export const mutations = {
  LOGIN: (state: AuthStateInterface, user: any) => {
    console.log('state login');
    state.isConnected = true;
    state.user = user;
  },

  LOGOUT: (state: AuthStateInterface) => {
    delete state.user;
    /**
     * When I set this pro to "false", it crashes.
     * No idea why... error on recursion thing.
     * So I've tried this, and this is working!
     */
    state.isConnected = !state.isConnected;
  }
};
