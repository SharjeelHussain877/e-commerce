import app from "./firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app);

export {auth, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword}