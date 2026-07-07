// Authentication helpers for the training platform (Firebase Auth)
import { app } from "./firebase-config.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export const auth = getAuth(app);

// Create a new account
export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Log in to an existing account
export function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// Log out the current user
export function logOut() {
    return signOut(auth);
}

// Subscribe to auth state changes. callback(user) receives null when logged out.
export function watchAuth(callback) {
    return onAuthStateChanged(auth, callback);
}
