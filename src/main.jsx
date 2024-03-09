import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import SignUp from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Loader from "./components/Loader.jsx";
import ProductPreview from "./pages/ProductPreview.jsx";
import { useSelector } from 'react-redux';
import { dispatch } from "./redux/store.js";
import { useEffect } from "react";
import getData from './firebase/getDataFirestore.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductPreview />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const [isApiCalled, setStatus] = useState(false)
  useEffect(() => {
    const fetch = async () => {
      const data = await getData()
      setStatus(!isApiCalled)
    }
    fetch()
  }, [])

  return (
    <>
      {isApiCalled == isLoading ? <Loader /> : <RouterProvider router={router} />}
    </>
  );
}


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="" element={<App />}>
//         <Route path="" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//       </Route>
//       <Route>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Route>
//     </>
//   )
// );