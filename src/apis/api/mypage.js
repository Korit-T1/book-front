import instance from "../utils/instance"

export const getLoanDataRequest = async (userid) => {
    return await instance.get(`/mypage/getLoan/${userid}`)
}

export const getWishDataRequest = async (userId) => {
    return await instance.get(`/mypage/wish/${userId}`)
}

export const updateProfileImageRequest = async (data) => {
    return await instance.put(`/mypage/profile`, data)
}