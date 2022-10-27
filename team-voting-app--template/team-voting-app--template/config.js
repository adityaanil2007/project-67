import firebase from 'firebase';

    const firebaseConfig = {
  apiKey: "AIzaSyBW7QSsSAIbwlOdQ0u_3S9FG-qIL7B3I9c",
  authDomain: "project-58-f1fad.firebaseapp.com",
  databaseURL: "https://project-58-f1fad-default-rtdb.firebaseio.com",
  projectId: "project-58-f1fad",
  storageBucket: "project-58-f1fad.appspot.com",
  messagingSenderId: "509715567993",
  appId: "1:509715567993:web:df5826fabe0d827f184ba8"
};



    

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();