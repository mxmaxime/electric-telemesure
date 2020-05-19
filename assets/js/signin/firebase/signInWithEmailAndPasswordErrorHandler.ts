import {ErrorsInterface, ErrorHandler} from '@/components/form/handleErrors'

export const handleLoginError = (e: any): ErrorsInterface => {
  console.log({e});
  if (e.code === 'auth/user-not-found' || e.code === 'auth/wrong-password') {
    return {
      message: e.message
    };
  }

  return {
    fields: {
      'email': ['Bad email!']
    }
  }
};
