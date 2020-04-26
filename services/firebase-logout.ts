import { auth } from './firebase-init';

export interface LogoutResponse {
  success: boolean
  error ?: Object,
};

export async function logout(): Promise<LogoutResponse> {
  try {
    await auth.signOut();
    return {success: true};
  } catch(error) {
    return {error, success: false};
  }
}
