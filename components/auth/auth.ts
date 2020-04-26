export interface AuthServiceInterface {
  login(user: any): void;
  logout(): void;
};

export class AuthService implements AuthServiceInterface {
  store: any;

  constructor(store: any) {
    this.store = store
  }

  login(user: any) {
    this.store.commit('auth/LOGIN', user);
  }

  logout() {
    this.store.commit('auth/LOGOUT');
  }
};
