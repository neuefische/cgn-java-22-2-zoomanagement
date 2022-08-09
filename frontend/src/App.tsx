import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter} from "react-router-dom";
import AllRoutes from "./shared/AllRoutes";
import Header from "./shared/Header";
import {ToastContainer} from "react-toastify";
import Footer from "./shared/Footer";

export default function App() {

    return <>

        <HashRouter>
            <Header/>
            <main>
            <AllRoutes/>
            </main>
            <Footer/>
        </HashRouter>

        <ToastContainer/>
    </>;
}
