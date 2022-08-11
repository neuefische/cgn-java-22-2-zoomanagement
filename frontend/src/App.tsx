import React from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {HashRouter} from "react-router-dom";
import AllRoutes from "./shared/AllRoutes";
import Header from "./shared/Header";
import GameButton from "./shared/GameButton";

export default function App() {

    return <>
        <Header/>
        <HashRouter>
            <AllRoutes/>
            <GameButton/>
        </HashRouter>
        <ToastContainer/>
    </>;
}