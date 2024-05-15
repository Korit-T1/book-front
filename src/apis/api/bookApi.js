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

export const getBookCountRequest = async (params) => {
    return await instance.get("/books/count", {params});
}

export const getBookStocksRequest = async (bookId) => {
    return await instance.get(`/books/${bookId}/stocks`);
}

// 메인 홈페이지
export const getPopularBooksRequest = async () => {
    return await instance.get(`/books/popular`);
}

export const getTopFiveBooksRequest = async () => {
    return await instance.get(`/books/top5`);
}

export const getNewBooksRequest = async () => {
    return await instance.get(`/books/new`);
}
