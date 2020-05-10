import FormStore from '@/components/form/FormStore';
import {CreateUserWithEmailAndPasswordState} from '~/components/signup/createUserWithEmailAndPassword';

export default () => new FormStore({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatpassword: '',
  registration_terms: false
});
