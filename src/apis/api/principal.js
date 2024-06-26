import instance from "../utils/instance"

export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}

export const getAdminPrincipalRequest = async () => {
    return await instance.get("/admin/principal");
}