import { atom } from "recoil";

export const selectedBookState = atom({
    key: "selectedBookState",
    default: {
        bookId: 0,
        isbn: "",
        categoryId: 0,
        categoryName: "",
        bookName: "",
        authorName: "",
        publisherName: "",
        publishDate:"",
        coverImgUrl: ""
    }
});