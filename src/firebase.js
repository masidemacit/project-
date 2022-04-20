import { initializeApp } from 'firebase/app';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBVfGQjDge3RvkOm5_g5YSqffECu5lihdw",
    authDomain: "depixenly.firebaseapp.com",
    databaseURL: "https://depixenly-default-rtdb.firebaseio.com",
    projectId: "depixenly",
    storageBucket: "depixenly.appspot.com",
    messagingSenderId: "545821852031",
    appId: "1:545821852031:web:b326dea4c5a773b83ada4a",
    measurementId: "G-LC6JVWEV6L"
  });
  
  const app = initializeApp(firebaseApp);


const database = firebaseApp.firestore();

export default database;
