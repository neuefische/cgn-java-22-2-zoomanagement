import {toast} from "react-toastify";

export const showError = (error: any) => {
    console.error(error);
    toast.error("Eingabe wurde nicht gespeichert", {
        position: toast.POSITION.TOP_CENTER
    });
}
