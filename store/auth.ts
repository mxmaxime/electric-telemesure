interface AuthStateInterface {
  isConnected: boolean,
  user?: Object
};

export const state = (): AuthStateInterface => ({
  isConnected: false,
});

export const getters = {
  getIsConnected: (state: AuthStateInterface) => state.isConnected
};

export const mutations = {
  LOGIN: (state: AuthStateInterface, user: any) => {
    state.isConnected = true;
    state.user = user;
  },

  LOGOUT: (state: AuthStateInterface) => {
    state.isConnected = false;
    delete state.user;
  }
};
