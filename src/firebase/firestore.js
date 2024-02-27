import app from "./firebase.config";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const db = getFirestore(app);

export {db, collection, addDoc}