import instance from "../utils/instance"

export const registerNotice = async (data) => {
    const response = await instance.post("/boardWrite", data);
}