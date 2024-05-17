/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as s from "./style"
import Select from "react-select";
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { bookRegister, getCategory } from '../../../apis/api/bookApi';
import { useBookRegisterInput } from '../../../hooks/useBookRegisterInput';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from "uuid";
import { storage } from "../../../apis/firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { selectedBookState } from '../../../atoms/adminSelectedBookAtom';
import BookRegisterInput from '../../../components/BookRegisterInput/BookRegisterInput';
import { CiSquarePlus } from "react-icons/ci";

function AdminBookManagement(props) {
    const [ bookInfo, setBookInfo ] = useState([]);
    const [ categoryOptions, setCategoryOptions ] = useState([]);
    const fileRef = useRef();
    const inputRefs = [
        useRef(),   // 0 bookId
        useRef(),   // 1 isbn
        useRef(),   // 2 카테고리
        useRef(),   // 3 도서명
        useRef(),   // 4 저자명
        useRef(),   // 5 출판사
        useRef(),   // 6 출판일
        useRef()    // 7 URL
    ];
    // const ir1=    useRef()   // 0 bookId
    // const ir2=    useRef()   // 1 isbn
    // const ir4=    useRef()   // 2 카테고리
    // const ir5=    useRef()   // 3 도서명
    // const ir6=    useRef()   // 4 저자명
    // const ir7=    useRef()   // 5 출판사
    // const ir7=    useRef()   // 6 출판일
    // const ir8=    useRef()    // 7 URL

    const nextInput = (ref) => {
        ref.current.focus();
    }
    
    const submit = () => {
        registerNewBook.mutate({
            isbn: isbn.value,
            categoryId: categoryId.value.value,
            bookName: bookName.value,
            authorName: authorName.value,
            publisherName: publisherName.value,
            coverImgUrl: imgUrl.value,
            publishDate: publishDate.value
        });
    }

    const categoryQuery = useQuery(
        ["categoryQuery"], 
        getCategory,
        {
            onSuccess: response => {
                console.log(response);
                setCategoryOptions(() => response?.data?.map(category => {
                    return {
                        value: category.categoryId,
                        label: category.categoryName
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );


    const bookId = useBookRegisterInput(nextInput, inputRefs[1]);
    const isbn = useBookRegisterInput(nextInput, inputRefs[2]);
    const categoryId = useBookRegisterInput(nextInput, inputRefs[3]);
    const bookName = useBookRegisterInput(nextInput, inputRefs[4]);
    const authorName = useBookRegisterInput(nextInput, inputRefs[5]);
    const publisherName = useBookRegisterInput(nextInput, inputRefs[6]);
    const publishDate = useBookRegisterInput(nextInput, inputRefs[7]);
    const imgUrl = useBookRegisterInput(submit);
    const [ selectedBook ] = useRecoilState(selectedBookState);

    useEffect(() => {
        bookId.setValue(() => selectedBook.bookId);
        isbn.setValue(() => selectedBook.isbn);
        categoryId.setValue(() => ({value: selectedBook.categoryId, label: selectedBook.categoryName}));
        bookName.setValue(() => selectedBook.bookName);
        authorName.setValue(() => selectedBook.authorName);
        publisherName.setValue(() => selectedBook.publisherName);
        publishDate.setValue(() => selectedBook.publishDate);
        imgUrl.setValue(() => selectedBook.coverImgUrl);
    }, [selectedBook]);

    const registerNewBook = useMutation({
        mutationKey: "registerNewBook",
        mutationFn: bookRegister,
        onSuccess: response => {
            alert("도서등록");
            window.location.replace("/admin/bookmanage");
            
        },
        onError: error => {

        }
    });
    const selectStyle = {
        control: baseStyles => ({
            ...baseStyles,
            borderRadius: "0px",
            border: "none",
            outline: "none",
            boxShadow: "none"
        })
    }
    const handleFileChange = (e) => {
        
        const files = Array.from(e.target.files);
        
        if(files.length === 0) {
            e.target.value = "";
            return;
        }
        
        if(!window.confirm("파일을 업로드 하시겠습니까?")) {
            e.target.value = "";
            return;
        }

        const storageRef = ref(storage, `library/book/cover/${uuid()}_${files[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);

        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {},
            () => {
                alert("업로드를 완료하셨습니다.");
                getDownloadURL(storageRef)
                .then(url => {
                    imgUrl.setValue(() => url);
                });
            }
        )

    }
    
    useEffect (() => {
        console.log(categoryOptions);
    }, [categoryOptions])

    return (
        <>
            <div css={s.background}>
                <div css={s.layout}>
                    <table css={s.registerTable}>
                        <tbody>
                            <tr>
                                <th css={s.registerTh}>도서코드</th>
                                <td>
                                    <BookRegisterInput 
                                        value={bookId.value} 
                                        bookref={inputRefs[0]}
                                        onChange={bookId.handleOnChange}
                                        onKeyDown={bookId.handleOnKeyDown}
                                        isDisabled={true}
                                    />
                                </td>
                                <th css={s.registerTh}>ISBN</th>
                                <td>
                                    <BookRegisterInput 
                                        value={isbn.value} 
                                        bookref={inputRefs[1]}
                                        onChange={isbn.handleOnChange}
                                        onKeyDown={isbn.handleOnKeyDown}
                                    />
                                </td>
                                <td rowSpan={5} css={s.preview}>
                                    <div css={s.imageBox}>
                                        <img src={
                                            !imgUrl.value 
                                            ? "https://www.shutterstock.com/image-vector/no-image-available-picture-coming-600nw-2057829641.jpg"
                                            : imgUrl.value
                                        } alt="" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th css={s.registerTh}>카테고리</th>
                                <td>
                                    { !categoryQuery.isLoading ? (

                                        <Select 
                                        styles={selectStyle} 
                                        options={categoryOptions}
                                        value={categoryId.value}
                                        onKeyDown={categoryId.handleOnKeyDown}
                                        onChange={categoryId.handleOnChange}
                                        ref={inputRefs[2]}
                                        />
                                    ) : (
                                        <div>Loading...</div>
                                    )}
                                </td>
                                <th css={s.registerTh}>출판일</th>
                                <td>
                                    <input type="date" value={publishDate.value} bookref={inputRefs[6]} onChange={publishDate.handleOnChange} onKeyDown={publishDate.handleOnKeyDown}/>
                                </td>
                            </tr>
                            <tr>
                                <th css={s.registerTh}>도서명</th>
                                <td colSpan={3}>
                                    <BookRegisterInput 
                                        value={bookName.value} 
                                        bookref={inputRefs[3]}
                                        onChange={bookName.handleOnChange}
                                        onKeyDown={bookName.handleOnKeyDown}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th css={s.registerTh}>저자명</th>
                                <td>
                                    <BookRegisterInput 
                                        value={authorName.value} 
                                        bookref={inputRefs[4]}
                                        onChange={authorName.handleOnChange}
                                        onKeyDown={authorName.handleOnKeyDown}
                                    />
                                </td>
                                <th css={s.registerTh}>출판사</th>
                                <td>
                                    <BookRegisterInput 
                                        value={publisherName.value} 
                                        bookref={inputRefs[5]}
                                        onChange={publisherName.handleOnChange}
                                        onKeyDown={publisherName.handleOnKeyDown}
                                    />
                                </td>
                                
                            </tr>
                            <tr>
                                <th css={s.registerTh}>표지URL</th>
                                <td colSpan={3}>
                                    <div css={s.imgUrl}>
                                        <span css={s.imgUrlBox}>
                                            <BookRegisterInput 
                                                value={imgUrl.value} 
                                                bookref={inputRefs[7]}
                                                onChange={imgUrl.handleOnChange}
                                                onKeyDown={imgUrl.handleOnKeyDown}
                                            />
                                        </span>
                                        <input 
                                            type="file" 
                                            style={{
                                                display: "none"
                                            }}
                                            onChange={handleFileChange}
                                            ref={fileRef}
                                        />
                                        <button css={s.imgAddButton} onClick={() => fileRef.current.click()}>
                                            <CiSquarePlus />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div css={s.box}>

                        <button onClick={submit}>등록</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminBookManagement;