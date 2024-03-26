import { onAuthStateChanged, auth } from "./auth";
import { collection, query, where, getDocs,db } from "./firestore";
import { dispatch } from './../redux/store.js';
import { reduxSaveData } from './../redux/slices/userInfo.js';


const getUserDetails = async (collection_name, key ,id) => {
  const q = query(collection(db, collection_name), where(key, "==", id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    let user = doc.data()
    console.log(user)
    user.status = true;
    dispatch(reduxSaveData(user))
  });
};

function isUserLogin() {
  dispatch(reduxSaveData({status: false}))
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if (uid) {
        getUserDetails("users", "userId", uid)
      }
    } else {
      console.log("failed")
        dispatch(reduxSaveData({status: false}))
    }
  });
}

export default isUserLogin;
