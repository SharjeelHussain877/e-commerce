import { db, collection, getDocs, query, limit } from "./firestore.js";
import { dispatch } from "./../redux/store.js";
import { reduxCheckState } from "../redux/slices/isLoading.js";
import { reduxAddProduct } from "../redux/slices/products.js";

const getData = () => {
    return new Promise(async (resolve, reject) => {
        dispatch(reduxCheckState());
        let arr = [];
        try {
            const q = query(collection(db, "products"), limit(3));
            const data = await getDocs(q);
            if (data) {
                data.forEach((doc) => {
                    const obj = {
                        ...doc.data(), 
                        productId :doc.id
                    }
                    arr.push(obj);
                });
            }
            dispatch(reduxAddProduct(arr));
            dispatch(reduxCheckState());
            resolve(arr); 
        } catch (error) {
            console.error("Error getting documents: ", error);
            dispatch(reduxCheckState());
            reject(error);
        }
    });
};

export default getData;
