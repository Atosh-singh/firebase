import React from "react";
// import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  deleteField,
} from "firebase/firestore";
import { app } from "./firebase";
import "./App.css";
import firebase from "firebase/compat/app";

const firestore = getFirestore(app);

const App = () => {
  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "Delhi",
      pincode: 1234,
      lat: 123,
      long: 3453,
    });
    console.log("Result", result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/RTOgXHNSOuGUPcNrI3n8/places"), {
      name: "This is a place 2",
      desc: "Awsm Desc",
      date: Date.now(),
    });
  };

  const getDocument = async () => {
    const ref = doc(firestore, "cities", "RTOgXHNSOuGUPcNrI3n8");
    const snap = await getDoc(ref);

    console.log(snap.data());
  };

  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, "users");

    const q = query(collectionRef, where("isMale", "==", true));
    const Snapshot = await getDocs(q);

    Snapshot.forEach((data) => console.log(data.data()));
  };

  const update = async () => {
    const docRef = doc(firestore, "cities", "RTOgXHNSOuGUPcNrI3n8");
    await updateDoc(docRef, {
      name: "New delhi",
    });
  };

  const deleteDoc = async () => {
    const cityRef = doc(firestore, "cities", "RTOgXHNSOuGUPcNrI3n8");

    await updateDoc(cityRef, {
      name: deleteField(),
      pincode: deleteField(),
    });
  };
  return (
    <div className="App">
      <h1>Firebase Firestore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Make Sub Collection</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentsByQuery}> Get Data</button>
      <button onClick={update}> Update</button>
      <button onClick={deleteDoc}> Delete</button>
    </div>
  );
};

export default App;
