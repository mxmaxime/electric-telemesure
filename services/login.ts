import { auth } from './firebase-init';

export async function login(email: string, password: string) {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    return {user, success: true}
  } catch(error) {
    return {error, success: false}
  }
}
