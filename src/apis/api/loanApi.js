import instance from "../utils/instance"

export const loanRegister = async(data) => {
    const response = await instance.post("/loan/loanRequest", data);
}