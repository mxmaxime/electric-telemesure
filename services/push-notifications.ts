import firebase from './firebase-init';

export async function askPermission() {
  let messaging;
  try {
    messaging = firebase.messaging();
  } catch(e) {
    return {
      supportedBrowser: false
    }
  }

  try {
    const token = await messaging.getToken();
    return {token}
  } catch(e) {
    // User denied
    return {
      denied: true
    }
  }

}
