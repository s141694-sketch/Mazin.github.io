// Firebase configuration for the training platform
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDciddHqCn7kfZRRGmxOIQTMEC8gpQdHlA",
  authDomain: "training-skills-platform.firebaseapp.com",
  projectId: "training-skills-platform",
  storageBucket: "training-skills-platform.firebasestorage.app",
  messagingSenderId: "712250640558",
  appId: "1:712250640558:web:aa2e67ae9be3454aa2853f"
};

export const app = initializeApp(firebaseConfig);

