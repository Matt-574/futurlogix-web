import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ¡¡¡IMPORTANTE: Reemplaza esto con tus credenciales REALES de Firebase!!!
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "journeest-app.firebaseapp.com",
  projectId: "journeest-app",
  storageBucket: "journeest-app.appspot.com",
  messagingSenderId: "...",
  appId: "1:..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
