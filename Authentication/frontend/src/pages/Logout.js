import { redirect } from "react-router-dom";
import { getToken } from "../util/get-token";

export function action ()
{
    localStorage.removeItem('token');
    return redirect('/');
}

export function tokenLoader ( )
{
    return getToken();
}