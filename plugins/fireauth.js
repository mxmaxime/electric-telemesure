import { auth } from '@/services/firebase-init'
import {AuthService} from '@/components/auth/auth'

console.log('FIRE AUTH PLUGIN');

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const service = new AuthService(store)
        return resolve(service.login(user))
      }
      return resolve()
    })
  })
}
