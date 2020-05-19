import {SignInWithEmailAndPasswordState, SignInWithEmailAndPassword} from '../signInWithEmailAndPassword';
import { auth } from '@/services/firebase-init';


export const signInWithEmailAndPassword: SignInWithEmailAndPassword = async ({email, password}: SignInWithEmailAndPasswordState) => {
  return await auth.signInWithEmailAndPassword(email, password);
};
