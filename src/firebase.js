// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Correct import for Firebase v9+ SDK
import { initializeApp } from 'firebase/app'; 
// import { getAnalytics } from 'firebase/analytics'; 
// import { getDatabase } from 'firebase/database'; // Import getDatabase directly


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbssX3ZKPVXOilLvOkOfO0UdKTH7Q0QsQ",
  authDomain: "learning-firebase-7dbaf.firebaseapp.com",
  projectId: "learning-firebase-7dbaf",
  storageBucket: "learning-firebase-7dbaf.firebasestorage.app",
  messagingSenderId: "33833947011",
  appId: "1:33833947011:web:9a4da87d039fb1152a70b6",
  databaseUrl: "https://learning-firebase-7dbaf-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };


// Initialize Analytics if needed
// const analytics = getAnalytics(app);