// Firestore database helpers for the training platform
import { app } from "./firebase-config.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const db = getFirestore(app);

// Save (or update) a user's progress. Data shape matches the lesson page's
// internal state: { steps, name, qs, gameScore, circleVisited }
export async function saveProgress(uid, data) {
    await setDoc(
          doc(db, "progress", uid),
      { ...data, updatedAt: Date.now() },
      { merge: true }
        );
}

// Load a user's saved progress. Returns null if nothing saved yet.
export async function loadProgress(uid) {
    const snap = await getDoc(doc(db, "progress", uid));
    return snap.exists() ? snap.data() : null;
}
