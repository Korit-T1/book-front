import instance from "../utils/instance"

export const getLoanDataRequest = async (username) => {
    return await instance.get(`/mypage/loan/${username}`)
}

export const getWishDataRequest = async (userId) => {
    return await instance.get(`/mypage/wish/${userId}`)
}