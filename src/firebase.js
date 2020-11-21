import firebase from "firebase" ;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDHaIXefYu_4w7MjK58TPYuRU_71KmD4ec",
    authDomain: "todo-app-dc58d.firebaseapp.com",
    databaseURL: "https://todo-app-dc58d.firebaseio.com",
    projectId: "todo-app-dc58d",
    storageBucket: "todo-app-dc58d.appspot.com",
    messagingSenderId: "823184381022",
    appId: "1:823184381022:web:9493bb180e78ab2dff10cf",
    measurementId: "G-P7J9J25KKZ"
});

 const db=firebaseApp.firestore();

 export default db;