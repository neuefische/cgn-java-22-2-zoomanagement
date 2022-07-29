import {toast} from "react-toastify";

export const showError = () => {
    toast.error("Eingabe wurde nicht gespeichert", {
        position: toast.POSITION.TOP_CENTER
    });

}
