import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Ensure environment variables are loaded correctly
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};



console.log("Firebase config check:", {
  apiKeyExists: !!firebaseConfig.apiKey,
  authDomainExists: !!firebaseConfig.authDomain,
  projectIdExists: !!firebaseConfig.projectId
});

// Ensure API key is not missing
if (!firebaseConfig.apiKey) {
  throw new Error("❌ Firebase API key is missing! Check .env file.");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


console.log("🔥 Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY);
export { auth };
