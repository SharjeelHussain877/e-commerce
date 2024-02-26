import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from '../pages/Contact'
import About from '../pages/About'
import SignUp from '../pages/Signup'
import Login from "../pages/Login";
import { Navbar } from "../components";
import {Outlet} from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
        </BrowserRouter>
    )
}

export default AppRouter