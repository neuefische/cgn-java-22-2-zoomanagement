import React, {ChangeEvent, useState} from "react";
import {NavLink} from "react-router-dom";

type LoginProps = {
    login: (username: string, password: string) => Promise<string>,
    setMe: React.Dispatch<React.SetStateAction<string | undefined>>,

}
export default function Login(props: LoginProps) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        props.login(username, password)
            .then(data => props.setMe(data))
    }

    return (
        <>
            <label>username:</label>
            <br/><input type={"text"} value={username}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
            <br/><label>password: </label>
            <br/><input type={"password"} value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
            <br/>
            <button onClick={onLogin}>einloggen</button>
            <br/><NavLink to={"/signup"}>To Signup form</NavLink>
        </>
    );
}