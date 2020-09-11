import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsZw5EQrE4m9yNKHpEE8OvvEQ0EWE1bvw",
    authDomain: "store-e90d0.firebaseapp.com",
    databaseURL: "https://store-e90d0.firebaseio.com",
    projectId: "store-e90d0",
    storageBucket: "store-e90d0.appspot.com",
    messagingSenderId: "1000090951926",
    appId: "1:1000090951926:web:af50277796fb7ae3938cd7",
    measurementId: "G-V9L8CLY3XW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}