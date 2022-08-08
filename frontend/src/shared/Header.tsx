import {NavLink} from "react-router-dom";
import React from "react";
import "./header.css";

export default function Header() {
    return (
        <>
            <h1> Zoo-Management</h1>
            <div className="menu">
            <NavLink className={"nav"} to={'/'}>Home</NavLink>
            <NavLink className={"nav"} to={'/Animals'}>Animal</NavLink>
            <NavLink className={"nav"} to={'/Trucks'}>Trucks</NavLink>
            <NavLink className={"nav"} to={'/Employees'}>Employees</NavLink>
            <NavLink className={"nav"} to={'/Plants'}>Plants</NavLink>
            </div>
        </>
    );
}