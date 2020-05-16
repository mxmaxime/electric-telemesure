import {CreateUserWithEmailAndPasswordState, CreateUserWithEmailAndPassword} from '../createUserWithEmailAndPassword';
import { auth } from '@/services/firebase-init';


export const createUserWithEmailAndPassword: CreateUserWithEmailAndPassword = async ({email, password}: CreateUserWithEmailAndPasswordState) => {
  return await auth.createUserWithEmailAndPassword(email, password);
};
