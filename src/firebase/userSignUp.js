import { auth, createUserWithEmailAndPassword } from "./auth";
import addData from "./addDataFirestore";
import { dispatch } from './../redux/store.js';
import { reduxSaveData } from './../redux/slices/userInfo.js';
import { reduxCheckState } from "../redux/slices/isLoading.js";

const sign_up = (userObj) => {
  dispatch(reduxCheckState());
  createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
  .then((userCredential) => {
    const user = userCredential.user;
      if (user) {
        userObj.userId = user.uid;
        addData(userObj, "users");
        dispatch(reduxSaveData(userObj));
        dispatch(reduxCheckState());
      }
    })
    .catch((error) => {
      dispatch(reduxCheckState());
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export default sign_up;
