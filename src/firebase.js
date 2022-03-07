import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSo2uaII7jurpVFWi9QnpuBpbtNlXzmZ8',
  authDomain: 'disneyplus-clone-e8658.firebaseapp.com',
  projectId: 'disneyplus-clone-e8658',
  storageBucket: 'disneyplus-clone-e8658.appspot.com',
  messagingSenderId: '781577801140',
  appId: '1:781577801140:web:086366df2c8aa5fc0776e1',
  measurementId: 'G-EPMTDYB9KN',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
