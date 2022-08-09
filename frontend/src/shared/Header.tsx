import {NavLink} from "react-router-dom";
import React from "react";
import "./header.css";

export default function Header() {
    return (
        <>
            <h1> Zoo-Management</h1>
            <div className="menu">
            <NavLink className={"nav"} to={'/'}><img src={"../pictures/home.png"} alt={"Home"}/></NavLink>
            <NavLink className={"nav"} to={'/Animals'}><img src={"../pictures/lion.png"} alt ={"Animals"}/></NavLink>
            <NavLink className={"nav"} to={'/Trucks'}><img src={"../pictures/truck.png"} alt={"Trucks"}/></NavLink>
            <NavLink className={"nav"} to={'/Employees'}><img src={"../pictures/employees.png"} alt={"Employees"}/></NavLink>
            <NavLink className={"nav"} to={'/Plants'}><img src={"../pictures/plant.png"} alt={"Plants"}/></NavLink>
            </div>
        </>
    );
}