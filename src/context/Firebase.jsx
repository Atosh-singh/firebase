import { createContext,useContext } from "react";


import { initializeApp } from 'firebase/app';

import { GoogleAuthProvider } from "firebase/auth";



import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";

import {getDatabase,set,ref} from 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyAbssX3ZKPVXOilLvOkOfO0UdKTH7Q0QsQ",
    authDomain: "learning-firebase-7dbaf.firebaseapp.com",
  
    projectId: "learning-firebase-7dbaf",
    storageBucket: "learning-firebase-7dbaf.firebasestorage.app",
    messagingSenderId: "33833947011",
    appId: "1:33833947011:web:3e1f7f1c136d8f2d2a70b6",
    databaseURL:"https://learning-firebase-7dbaf-default-rtdb.firebaseio.com/"
};



const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);

const provider = new GoogleAuthProvider(firebase);


const FirebaseContext = createContext(null);

export const useFirebase=()=>useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const signupUserWithEmailAndPassword = async (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
const putData=(key, data)=>(set(ref(database,key),data))

    return (<FirebaseContext.Provider value ={{signupUserWithEmailAndPassword, putData}}>
        {props.children}
    </FirebaseContext.Provider>)
}