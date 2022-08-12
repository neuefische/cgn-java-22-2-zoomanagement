import {useEffect, useState} from "react";
import axios from "axios";


export default function useMe(username: string, password: string) {


    const [me, setMe] = useState<string>();

    const fetchMe = () => {
        axios.get("/api/users/me")
            .then(response => response.data)
            .then(setMe)
    }
    useEffect(
        fetchMe,
        []
    )

    const login = () => {
        axios.get("/api/users/login", {auth: {username, password: password}})
            .then(response => response.data)
            .then(setMe)
    }

    const logout = () => {
        axios.get("api/users/logout")
            .then(response => response.data)
            .then(() => setMe("You´re logged out."))
    }

    return {me, login, logout}
}