import { cert, initializeApp } from "firebase-admin/app";
import { env } from "./env";

export const firebaseApp = initializeApp({
    credential: cert({
        clientEmail: env.FIREBASE_CLIENT_EMAIL,
        projectId: env.FIREBASE_PROJECT_ID,
        privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n')
    }),
    storageBucket: env.FIREBASE_STORAGE_BUCKET
})