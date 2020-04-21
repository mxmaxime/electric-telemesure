import firebase from 'firebase'
import 'firebase/firebase'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBV8TCQ4SrDRB4uG38GK4LTO9bG0QvcOSA',
  authDomain: 'electric-telemetry.firebaseapp.com',
  projectId: 'electric-telemetry'
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const firestore = firebase.firestore()

export const auth = firebase.auth()

export default firebase
