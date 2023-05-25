import { initializeApp } from 'firebase/app'
import { initializeFirestore, connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
// import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
// import { firebaseConfig } from './firebase.config.js'

const app = initializeApp({ projectId: 'demo-nanostores', appId: 'test', apiKey: 'test' })

// const db = initializeFirestore(app, {
//   ignoreUndefinedProperties: true,
// })

const db = getFirestore()
const useRemoteData = import.meta.env.PROD || import.meta.env.VITE_REMOTE_DATA

if (!useRemoteData) {
  connectFirestoreEmulator(db, 'localhost', 8080)
  // connectFunctionsEmulator(getFunctions(), 'localhost', 5001)
  connectAuthEmulator(getAuth(), 'http://localhost:9099')
}
