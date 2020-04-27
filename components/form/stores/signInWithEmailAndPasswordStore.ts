import FormStore from '@/components/form/FormStore.ts';
import {SignInWithEmailAndPasswordState} from '@/components/signin/signInWithEmailAndPassword';

export default new FormStore<SignInWithEmailAndPasswordState>({
  email: '',
  password: ''
});
