import instance from "../utils/instance"

export const getAdminLoanList = async () => {
    return await instance.get(`/adminLoan`);
}
export const getAdminReturnList = async () => {
    return await instance.get(`/adminReturn`);
}
export const putAdminReturnOrNot = async (loanId) => {
    return await instance.put(`/adminReturnOrNot/${loanId}`)
}
export const getAdminOverdue = async () => {
    return await instance.get(`/adminOverdue`);
}
export const getAdminUser = async (params) => {
    return await instance.get(`/adminUser`, {params})
}

export const findUserinfo = async (params) => {
    return await instance.get(`/findUser`, {params})
}