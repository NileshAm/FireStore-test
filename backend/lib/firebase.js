// Import the functions you need from the SDKs you need
// const { initializeApp } = require("firebase/app");
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDoc,
  query,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABaReBbyo1VOwoGEiuJLNzCm4jYoYnc5s",
  authDomain: "firestore-test-e0844.firebaseapp.com",
  projectId: "firestore-test-e0844",
  storageBucket: "firestore-test-e0844.firebasestorage.app",
  messagingSenderId: "877188887550",
  appId: "1:877188887550:web:395602e4e4cb7336b386af",
};

var app;
var firebaseDB;

const initializeFirebaseApp = async () => {
  try {
    app = initializeApp(firebaseConfig);
    firebaseDB = getFirestore(app);
    return app;
  } catch (error) {
    console.log(error);
  }
};

const uploadData = async (collection, uID, data) => {
  try {
    const document = doc(firebaseDB, collection, uID);
    let dataUpdated = await setDoc(document, data);
    return dataUpdated;
  } catch (error) {
    console.log(error);
    return error
  }
};

const getFirebaseApp = () => {
  return app;
};

const getFirebaseDB=()=>{
  return firebaseDB
}

const getData = async (collectionID) => {
  try {
    const collectionRef = collection(firebaseDB, collectionID);
    const data = [];
    const q = query(collectionRef);

    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getDocID = async (collectionID)=>{
  try {
    const collectionRef = collection(firebaseDB, collectionID);
    const data = [];
    const q = query(collectionRef);

    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      data.push(doc.id);
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const getDocData = async (collectionID, docID)=>{
  try {
    const docRef = doc(firebaseDB, collectionID, docID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    return data
  } catch (error) {
   console.log(error) 
  }
}

export { initializeFirebaseApp, getFirebaseApp, uploadData, getData, getFirebaseDB, getDocID , getDocData};
