import axios from "axios";



export default function useLogin(username: string, password: string, setMe: React.Dispatch<React.SetStateAction<string | undefined>>){

    const login = () => {
        axios.get("/api/users/login", {auth: {username, password: password}})
            .then(response => response.data)
            .then(setMe)
    }

    return {login}
}