import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAAtYcALEBGwZZEAKHlVnNaTR1d3awallA",
  authDomain: "react-firebase-6a876.firebaseapp.com",
  projectId: "react-firebase-6a876",
  storageBucket: "react-firebase-6a876.firebasestorage.app",
  messagingSenderId: "413763005066",
  appId: "1:413763005066:web:de9541d98c976e5c0c9b73",
  measurementId: "G-C1FT76LBTE"
}

const app= initializeApp(firebaseConfig)
const auth= getAuth(app)
 export  default auth;