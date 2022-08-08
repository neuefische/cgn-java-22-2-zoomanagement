import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter} from "react-router-dom";
import AllRoutes from "./shared/AllRoutes";
import Header from "./shared/Header";
import {ToastContainer} from "react-toastify";

export default function App() {

    return <>
        <Header/>
        <HashRouter>
            <AllRoutes/>
        </HashRouter>
        <ToastContainer/>
    </>;
}