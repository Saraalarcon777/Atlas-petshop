import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Estas claves se leen del archivo .env, nunca hay que escribirlas
// directo aca en el codigo (por seguridad, y porque el .env no se sube a github)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

console.log('Configuración de Firebase:', firebaseConfig);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);