import instance from "../utils/instance"

export const getLoanDataRequest = async (data) => {
    return await instance.get(`/mypage/loan/${data.userName}`, data)
}