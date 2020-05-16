import {ErrorsInterface, ErrorHandler} from '@/components/form/handleErrors'

export const handleSignupError = (e: any): ErrorsInterface => {
  console.log({e});
  if (e.code === 'auth/user-not-found') {
    return {
      message: e.message
    };
  }

  return {
    'email': ['Bad email!']
  }
};
