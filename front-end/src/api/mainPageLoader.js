import { redirect } from "react-router-dom";
import { PATH_TO_ENDPOINT_MAPPING, BACK_END_URL } from "../const/api";

export function mainPageLoader({ params }) {
    const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
    if (backEndPath) {
        return fetch(`${BACK_END_URL}/${backEndPath}`);
    } else {
        return redirect("/"); //zabezpieczenie przed niepoprawnymi ścieżkami
    }
}