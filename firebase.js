
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDfGxuQSo6PGreLGjIjK50fzEkdNyRxi2Q",
  authDomain: "gdocscl-d4e96.firebaseapp.com",
  projectId: "gdocscl-d4e96",
  storageBucket: "gdocscl-d4e96.appspot.com",
  messagingSenderId: "1099186583314",
  appId: "1:1099186583314:web:85a81e951a958d9c6de5cb"
};



const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };