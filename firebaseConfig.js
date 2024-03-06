

import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  // Your Firebase config details here
    apiKey: "AIzaSyBaIZI6eiYRs8FUp6gRfBbVLuU6UIqZsJw",
    authDomain: "eldercare-ea1a8.firebaseapp.com",
    projectId: "eldercare-ea1a8",
    storageBucket: "eldercare-ea1a8.appspot.com",
    messagingSenderId: "15469577932",
    appId: "1:15469577932:web:f38957b0e8282badf82469"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const firestore = getFirestore(app); // Firebase Firestore object

export { auth, firestore };


