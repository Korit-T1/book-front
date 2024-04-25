import instance from "../utils/instance"

export const getLoanDataRequest = async (userid) => {
    return await instance.get(`/mypage/loan/${userid}`)
}

export const getWishDataRequest = async (params) => {
    return await instance.get(`/mypage/wish`, {params})
}

export const getWishCountRequest = async (params) => {
    return await instance.get(`/mypage/wish/count`, {params})
}

export const updateProfileImageRequest = async (data) => {
    return await instance.put(`/mypage/profile`, data)
}