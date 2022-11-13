 import firebase from 'firebase';

//initialize your database

const firebaseConfig = {
  apiKey: "AIzaSyC7oaRISmPupwRPo3VLC5JHfi5ggv3FbvU",
  authDomain: "project-60-11b26.firebaseapp.com",
  projectId: "project-60-11b26",
  storageBucket: "project-60-11b26.appspot.com",
  messagingSenderId: "1021009023094",
  appId: "1:1021009023094:web:c71743006a342e50cbcf57"
};
  firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  