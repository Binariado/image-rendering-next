import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.fb_apiKey,
  authDomain: process.env.fb_authDomain,
  databaseURL: process.env.fb_databaseURL,
  projectId: process.env.fb_projectId,
  storageBucket: process.env.fb_storageBucket,
  messagingSenderId: process.env.fb_messagingSenderId,
  appId: process.env.fb_appId,
  measurementId: process.env.fb_measurementId
}

const firebaseConfig = config;

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const gitHubAuthProvider = new firebase.auth.GithubAuthProvider();

export {
  db,
  firebase,
  gitHubAuthProvider,
  googleAuthProvider
}