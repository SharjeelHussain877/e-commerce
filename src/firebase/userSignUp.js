import { auth, createUserWithEmailAndPassword } from "./auth";
import addData from "./addDataFirestore";
import { dispatch } from './../redux/store.js';
import { reduxSaveData } from './../redux/slices/userInfo.js';

const sign_up = (userObj) => {
  // const dispatch = useDispatch();
  
  createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        userObj.userId = user.uid;
        addData(userObj, "users");
        dispatch(reduxSaveData(userObj));
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

export default sign_up;
