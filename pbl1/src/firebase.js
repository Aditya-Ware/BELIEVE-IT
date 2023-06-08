import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCKYX-d1Mkub6QFLbgkB7_DXsPzzGQ0gWY",
    authDomain: "believe-it-56a33.firebaseapp.com",
    projectId: "believe-it-56a33",
    storageBucket: "believe-it-56a33.appspot.com",
    messagingSenderId: "958172990367",
    appId: "1:958172990367:web:226e959f8e6545d87fcbaa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export{ db, auth }