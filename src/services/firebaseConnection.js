import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyACBhpR9N_ZwShYGfkWXmnrcgIt96z6Fyg",
    authDomain: "meuapp-7bd4b.firebaseapp.com",
    databaseURL: "https://meuapp-7bd4b.firebaseio.com",
    projectId: "meuapp-7bd4b",
    storageBucket: "meuapp-7bd4b.appspot.com",
    messagingSenderId: "848810626246",
    appId: "1:848810626246:web:fd028ab72c44cd1e629bc7",
    measurementId: "G-EM7TK2M7CB"
  };
  // Initialize Firebase

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;