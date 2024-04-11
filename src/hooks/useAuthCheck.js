import { useEffect } from "react";
import { useQueryClient } from "react-query"

export const useAuthCheck = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const principalData = queryClient.getQueryData("principalQuery");

        if(!principalData) {
            alert("로그인 후 이용 가능");
            window.location.replace("/");
        }
    }, []);
}