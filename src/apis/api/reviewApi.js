import instance from "../utils/instance"

export const registerReview = async (data) => {
    const response = await instance.post("/review", data);
}

export const getReview = async (bookId) => {
    return await instance.get(`/getReview/${bookId}`);
}