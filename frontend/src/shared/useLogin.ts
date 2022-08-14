import axios from "axios";

export default function useLogin() {

    const login = (username: string, password: string) => {
        return axios.get("/api/users/login", {auth: {username, password: password}})
            .then(response => response.data)
    }
    return {login}
}