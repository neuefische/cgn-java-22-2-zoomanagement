import {NavLink} from "react-router-dom";
import React from "react";
import "./footer.css";


export default function Footer(){

    return(
        <footer>
            <NavLink className={"nav"} to={'/'}>Los Gehts</NavLink>
        </footer>
    )


}