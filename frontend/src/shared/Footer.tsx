import React from "react";
import {useNavigate} from "react-router-dom";


export default function Footer() {
const navigate=useNavigate();
    return (
        <footer>
            <button id={"startButton"}  onClick={() => {navigate("/zooGame")
            }}>
                Los geht's
            </button>
        </footer>
    )

}