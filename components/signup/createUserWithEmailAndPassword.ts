export interface CreateUserWithEmailAndPasswordState {
  email: string,
  password: string
};

export interface SignInWithEmailAndPassword {
  ({email, password}: CreateUserWithEmailAndPasswordState): Promise<any>;
};
