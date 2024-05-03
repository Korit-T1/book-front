import instance from "../utils/instance"

export const registerNoticeRequest = async (data) => {
    const response = await instance.post("/admin/notice", data);
    return response;
}

export const getNotice = async (boardId) => {
    return await instance.get(`/admin/notice/${boardId}`);
}