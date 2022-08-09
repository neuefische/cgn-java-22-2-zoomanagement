import {NavLink} from "react-router-dom";
import React from "react";
import "./header.css";

export default function Header() {
    return (
        <>
            <h1> Zoo-Management</h1>
            <div className="menu">
            <NavLink className={"nav"} to={'/'}><img src={"../pictures/home.png"}/></NavLink>
            <NavLink className={"nav"} to={'/Animals'}><img src={"../pictures/lion.png"}/></NavLink>
            <NavLink className={"nav"} to={'/Trucks'}><img src={"../pictures/truck.png"}/></NavLink>
            <NavLink className={"nav"} to={'/Employees'}><img src={"../pictures/employees.png"}/></NavLink>
            <NavLink className={"nav"} to={'/Plants'}><img src={"../pictures/plant.png"}/></NavLink>
            </div>
        </>
    );
}