/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { getAdminPrincipalRequest } from "../../apis/api/principal";
import { useQuery } from "react-query";
import AdminSigninPage from "./AdminSigninPage/AdminSigninPage";
import AdminMainPage from "./AdminMainPage/AdminMainPage";

function Admin() {
    const [ isLogin, setLogin ] = useState(false);
    const adminPrincipalQuery = useQuery(["adminPrincipalQuery"], getAdminPrincipalRequest,
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log(response);
            setLogin(true);
        },
        onError: error => {
            console.log("error");
            setLogin(false);
        }
    });

    return (
        <>
            {adminPrincipalQuery.isLoading 
                ? <></>
                : isLogin ? <AdminMainPage /> : <AdminSigninPage /> 
            }
        </>
    );
}

export default Admin;