import instance from "../utils/instance"

export const bookInfoRequest = async (bookId) => {
    return await instance.get(`/books/1`);
}
export const loanStateRequest = async (bookId) => {
    return await instance.get(`/books/1/loanStatus`);
}