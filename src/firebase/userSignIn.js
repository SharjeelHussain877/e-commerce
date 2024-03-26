import { auth, signInWithEmailAndPassword } from "./auth";
import { dispatch } from "../redux/store";
import { reduxCheckState } from "../redux/slices/isLoading";

const logIn = (userObj) => {
  return new Promise((resolve, reject) => {
    dispatch(reduxCheckState());
    signInWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(true);
        dispatch(reduxCheckState());
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(false);
        dispatch(reduxCheckState());
      });
  });
};

export default logIn;
