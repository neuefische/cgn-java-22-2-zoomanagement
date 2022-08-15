import React from "react";
import {useNavigate} from "react-router-dom";

export default function ReturnToHomeButton() {
const navigate=useNavigate();
    return (
        <div className={"GameButton"}>
            <button id={"startButton"}  onClick={() => {navigate("/")
            }}>
                Zurück nach Home
            </button>
        </div>
    )
}
