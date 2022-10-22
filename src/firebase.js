
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcfahs0-KzyFQRNtEBr4G1fD4y3xlX6PU",
    authDomain: "crud-app-eeae0.firebaseapp.com",
    projectId: "crud-app-eeae0",
    storageBucket: "crud-app-eeae0.appspot.com",
    messagingSenderId: "531719108696",
    appId: "1:531719108696:web:8eeef4bf9187c94417322d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);