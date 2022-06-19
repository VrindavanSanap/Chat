
import { initializeApp } from "firebase/app";


import 'firebase/firestore';
import firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC3xWcfG7ndQrCRciWIcl67aFwUVMBkXEk",
    authDomain: "worldchat-f48fc.firebaseapp.com",
    projectId: "worldchat-f48fc",
    storageBucket: "worldchat-f48fc.appspot.com",
    messagingSenderId: "915047049242",
    appId: "1:915047049242:web:274c86e71d761d05dbc9a3"
};


export const app: any = initializeApp(firebaseConfig);

export const db: any = getFirestore(app);
export const auth: any = getAuth(app);