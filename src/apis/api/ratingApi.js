import instance from "../utils/instance"

export const registerRating = async (data) => {
    const response = await instance.post("/rating", data);
}