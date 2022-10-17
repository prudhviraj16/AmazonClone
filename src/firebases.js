import firebase from 'firebase/app'
import {initializeApp} from 'firebase/app'
import {getStore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBpBYqo_WuPYwUexC8fQ5xB7gNrwzAYD0c",
    authDomain: "amaon-clone-858a3.firebaseapp.com",
    projectId: "amaon-clone-858a3",
    storageBucket: "amaon-clone-858a3.appspot.com",
    messagingSenderId: "963004606891",
    appId: "1:963004606891:web:b51647bedaa8a47c8e4aee",
    measurementId: "G-G68DGFW6PV"
  };


const app = initializeApp(firebaseConfig);

const db = app.firestore()

const auth = firebase.getAuth()

export {auth,db}