import instance from "../utils/instance"

export const registerNoticeRequest = async (data) => {
    const response = await instance.post("/admin/notice", data);
    return response;
}

export const getNotice = async (noticeBoardId) => {
    return await instance.get(`/admin/getNotice/${noticeBoardId}`);
}

export const getNoticeAll = async (params) => {
    return await instance.get(`/admin/getNotice`, {params});
}

export const noticeCount = async (params) => {
    return await instance.get("/admin/notice/count", {params});
}