import instance from "../utils/instance"

export const signinRequest = async(data) => {
    const response = await instance.post("/auth/signin", data);
    return response;
}

export const adminSigninRequest = async(data) => {
    const response = await instance.post("/auth/admin/signin", data);
    return response;
}