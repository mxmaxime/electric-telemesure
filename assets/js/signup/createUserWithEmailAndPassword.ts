export interface CreateUserWithEmailAndPasswordState {
  email: string,
  password: string
};

export interface CreateUserWithEmailAndPassword {
  ({email, password}: CreateUserWithEmailAndPasswordState): Promise<any>;
};
