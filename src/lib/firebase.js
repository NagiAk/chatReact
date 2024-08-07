import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "chatreact-813b5.firebaseapp.com",
    projectId: "chatreact-813b5",
    storageBucket: "chatreact-813b5.appspot.com",
    messagingSenderId: "520349510209",
    appId: "1:520349510209:web:4f6aba18778fe2acfff4c0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()