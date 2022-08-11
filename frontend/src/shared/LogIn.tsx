import {NavLink, useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";


export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
        <NavLink to={("/")}>Home</NavLink><br/>
        <label>username:</label>
            <input type={"text"} value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
        <label>password: </label>
            <input type={"password"} value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
        <button onClick={}>einloggen</button>
        </>
    );
}