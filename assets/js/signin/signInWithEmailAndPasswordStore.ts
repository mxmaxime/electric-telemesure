import FormStore from '@/components/form/FormStore.ts';
import {SignInWithEmailAndPasswordState} from './signInWithEmailAndPassword';

export default new FormStore<SignInWithEmailAndPasswordState>({
  email: '',
  password: ''
});
