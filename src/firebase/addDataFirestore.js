import { db, collection, addDoc } from "./firestore";

const addData = async (data, collectionName) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
};


export default addData;