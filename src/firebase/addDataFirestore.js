import { db, collection, addDoc } from "./firestore";

const addData = async (userData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    alert(`Hello ${userData.fullName}`)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


export default addData;