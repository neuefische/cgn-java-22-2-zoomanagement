import {toast} from "react-toastify";

export const showError = (error: any) => {
    console.error(error);
    toast.error("Befehl schlug fehl", {
        position: toast.POSITION.TOP_LEFT
    });
}
