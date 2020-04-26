import { auth } from './firebase-init';

export async function logout() {
  try {
    await auth.signOut();
    return {success: true};
  } catch(error) {
    return {error, success: false};
  }
}
