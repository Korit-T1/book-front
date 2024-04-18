import instance from "../utils/instance"

export const loanRequest = async(data) => {
    const response = await instance.post("/loan/loanRequest", data);
    return response;
}