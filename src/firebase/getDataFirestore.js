import { db, collection, getDocs, query, limit } from "./firestore.js";
import { dispatch } from "./../redux/store.js";
import { reduxCheckState } from "../redux/slices/isLoading.js";
import { reduxAddProduct } from "../redux/slices/products.js";

const getData = async () => {
  dispatch(reduxCheckState());
  let arr = [];
  try {
    const q = query(collection(db, "products"), limit(3));
    const data = await getDocs(q);
    if (data) {
      data.forEach((doc) => {
        arr.push(doc.data());
      });
    }
    dispatch(reduxAddProduct(arr));
    dispatch(reduxCheckState());
  } catch (error) {
    console.error("Error getting documents: ", error);
    dispatch(reduxCheckState());
  }
};

getData()

export default getData;
