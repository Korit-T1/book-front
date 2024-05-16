import instance from "../utils/instance"

export const getReadingDataRequest = async (params) => {
    return await instance.get(`/mypage/reading`, {params})
}

export const getReadingCountRequest = async (params) => {
    return await instance.get(`/mypage/reading/count`, {params})
}

export const getReturnedDataRequest = async (params) => {
    return await instance.get(`/mypage/returned`, {params})
}

export const getReturnedCountRequest = async (params) => {
    return await instance.get(`/mypage/returned/count`, {params})
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

export const getSummaryCountRequest = async (userid) => {
    return await instance.get(`/mypage/summary?userid=${userid}`)
} 

export const getMostLoanedRequest = async (userid) => {
    return await instance.get(`/mypage/most?userid=${userid}`)

}