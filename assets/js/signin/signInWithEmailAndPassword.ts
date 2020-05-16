export interface SignInWithEmailAndPasswordState {
  email: string,
  password: string
};

export interface SignInWithEmailAndPassword {
  ({email, password}: SignInWithEmailAndPasswordState): Promise<any>;
};
