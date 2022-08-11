import React from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter} from "react-router-dom";
import AllRoutes from "./shared/AllRoutes";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

export default function App() {

    return <>
        <Header/>
        <HashRouter>
            <AllRoutes/>
        </HashRouter>
        <Footer/>
        <ToastContainer/>
    </>;
}