import { auth } from './firebase-init';

export interface LoginResponse {
  success: boolean
  user?: Object,
  error ?: Object,
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    return {user, success: true}
  } catch(error) {
    return {error, success: false}
  }
}
