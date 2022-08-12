import {useEffect, useState} from "react";
import axios from "axios";


export default function useMe() {

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

    const logout = () => {
        axios.get("api/users/logout")
            .then(response => response.data)
            .then(data => setMe("anonymousUser"))
    }

    return {me, setMe, logout}
}