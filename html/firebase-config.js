// Firebase configuration for the training platform
// TODO: Replace the placeholder values below with your real Firebase project config.
// Find these in the Firebase console: Project settings -> General -> Your apps -> SDK setup and configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
