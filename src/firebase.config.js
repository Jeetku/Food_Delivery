import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWsFUn6GOwxnOcZIgqgV92UZO2Pe4W7HU",
  authDomain: "restaurant-bazar.firebaseapp.com",
  databaseURL:
    "https://restaurant-bazar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restaurant-bazar",
  storageBucket: "restaurant-bazar.appspot.com",
  messagingSenderId: "765494518218",
  appId: "1:765494518218:web:8ff2f947cf18c887cd6f33",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
