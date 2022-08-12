import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./header.css";

export default function Header() {
    const [tab, setTab] = useState("Home");

    useEffect(() => {
        document.title = tab;
    });
    return (
        <header>
            <h1> Zoo-Management</h1>
            <nav className="menu">
            <NavLink className={"nav"} onClick={()=>setTab("Home")} to={'/'}><img src={"../pictures/home.png"} alt={"Home"}/></NavLink>
            <NavLink className={"nav"} onClick={()=>setTab("Animals")} to={'/animals'}><img src={"../pictures/lion.png"} alt ={"Animals"}/></NavLink>
            <NavLink className={"nav"} onClick={()=>setTab("Trucks")} to={'/trucks'}><img src={"../pictures/truck.png"} alt={"Trucks"}/></NavLink>
            <NavLink className={"nav"} onClick={()=>setTab("Employees")} to={'/employees'}><img src={"../pictures/employees.png"} alt={"Employees"}/></NavLink>
            <NavLink className={"nav"} onClick={()=>setTab("Plants")} to={'/plants'}><img src={"../pictures/plant.png"} alt={"Plants"}/></NavLink>
            </nav>
        </header>
    );
}
