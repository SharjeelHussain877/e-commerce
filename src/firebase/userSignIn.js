import { auth, signInWithEmailAndPassword } from "./auth";

const logIn = (userObj) => {
  console.log(userObj);
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        resolve(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(false);
      });
  });
};

export default logIn;
