import instance from "../utils/instance"

export const getAdminLoanList = async () => {
    return await instance.get(`/adminLoan`);
}