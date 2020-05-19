import {ErrorsInterface, ErrorHandler} from '@/components/form/handleErrors'

export const handleSignupError = (e: any): ErrorsInterface => {
  if (e.code === 'auth/user-not-found') {
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
