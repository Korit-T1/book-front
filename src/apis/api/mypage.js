import instance from "../utils/instance"

export const getLoanDataRequest = async (userid) => {
    return await instance.get(`/mypage/loan/${userid}`)
}

export const getWishDataRequest = async (userid) => {
    return await instance.get(`/mypage/wish/${userid}`)
}

export const updateProfileImageRequest = async (data) => {
    return await instance.put(`/mypage/profile`, data)
}