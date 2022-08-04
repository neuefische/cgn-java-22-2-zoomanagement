import DetailEmployee from "../employees/DetailEmployee";
import React from "react";
import {Route, Routes} from "react-router-dom";

export default function AllRoutes() {

    return (

        <Routes>
            <Route path={"employees/:id"} element={<DetailEmployee/>}/>
        </Routes>

    )
}