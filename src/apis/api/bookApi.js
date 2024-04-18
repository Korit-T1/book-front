import instance from "../utils/instance"

export const bookInfoRequest = async (bookId) => {
    return await instance.get(`/books/2`);
}
export const loanStateRequest = async (bookId) => {
    return await instance.get(`/books/1/loanStatus`);
}

export const searchBooksRequest = async (params) => {
    return await instance.get(`/books`, {params});
}

export const getBookStocksRequest = async (bookId) => {
    return await instance.get(`/book/${bookId}/stocks`);
}