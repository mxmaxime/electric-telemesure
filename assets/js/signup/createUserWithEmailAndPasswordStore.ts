import FormStore from '@/components/form/FormStore';
import {CreateUserWithEmailAndPasswordState} from './createUserWithEmailAndPassword';

export default new FormStore<CreateUserWithEmailAndPasswordState>({
  email: '',
  password: '',
});
