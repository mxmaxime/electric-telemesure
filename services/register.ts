import { auth } from './firebase-init';

export interface RegisterResponse {
  success: boolean
  user?: Object,
  error ?: Object,
};

export async function register(email: string, password: string): Promise<RegisterResponse> {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    return {user, success: true};
  } catch(error) {
    return {error, success: false};
  }
}
