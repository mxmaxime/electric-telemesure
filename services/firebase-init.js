import firebase from 'firebase'
import 'firebase/firebase'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  appId: '1:915399963014:web:10b9a54706c3b3a4c53c07',
  // Get this value from "Settings > Cloud Messaging -> Sender ID"
  messagingSenderId: '915399963014',
  apiKey: 'AIzaSyBV8TCQ4SrDRB4uG38GK.4LTO9bG0QvcOSA',
  authDomain: 'electric-telemetry.firebaseapp.com',
  projectId: 'electric-telemetry'
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const firestore = firebase.firestore()

export const auth = firebase.auth()

export default firebase
