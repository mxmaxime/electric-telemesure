import { auth } from './firebase-init';

export async function register(email: string, password: string) {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    return {user, success: true};
  } catch(error) {
    return {error, success: false};
  }
}
