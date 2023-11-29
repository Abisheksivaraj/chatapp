import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrvWBGsqp2zeQnN0jU-NzfPtoC7JYyZWQ",
  authDomain: "chat-app-4dd81.firebaseapp.com",
  projectId: "chat-app-4dd81",
  storageBucket: "chat-app-4dd81.appspot.com",
  messagingSenderId: "554823178251",
  appId: "1:554823178251:web:1a39ac7832e4bc35904f0e",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore();
