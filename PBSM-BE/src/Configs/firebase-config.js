import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.FIRESTORE_API_KEY,
	authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
	projectID: process.env.FIRESTORE_PROJECT_ID,
	storageBucket: process.env.FIRESTORE_STORAGE_BUCKET,
	messagingSenderID: process.env.FIRESTORE_MESSAGING_SENDER_ID,
	appID: process.env.FIRESTORE_APP_ID,
	measurementID: process.env.FIRESTORE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
