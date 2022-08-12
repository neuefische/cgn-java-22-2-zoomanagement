import {useEffect, useState} from "react";
import axios from "axios";
import usePlants from "../plant/usePlants";


export default function useMe() {


    const [me, setMe] = useState<string>();
    const plants=usePlants();

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
            .then(() => setMe("anonymousUser")).then(()=>plants.setPlants([]))
    }

    return {me,setMe,  logout}
}