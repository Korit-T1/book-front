import instance from "../utils/instance"

export const registerReview = async (data) => {
    const response = await instance.post("/review", data);
}

export const getReview = async (params) => {
    return await instance.get(`/getReview`, {params});
}

export const getReviewCount = async (params) => {
    return await instance.get(`/review/count`, {params})
}