import React from "react";
import {useNavigate} from "react-router-dom";

export default function GameButton() {
    const navigate = useNavigate();
    return (
        <div className={"GameButton"}>
            <button id={"startButton"} onClick={() => {
                navigate("/zooGame")
            }}>
                Los geht's
            </button>
        </div>
    )
}
