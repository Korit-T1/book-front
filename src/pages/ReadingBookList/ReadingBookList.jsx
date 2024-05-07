/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useEffect, useState } from "react";
import { getReadingCountRequest, getReadingDataRequest } from "../../apis/api/mypage";
import { useMutation, useQuery } from "react-query";
import { IoMdClose } from "react-icons/io";
import { Link, useSearchParams } from "react-router-dom";
import ReadingPageNumbers from "../ReadingPageNumbers/ReadingPageNumbers";
import { bookReturn } from "../../apis/api/loanApi";

function ReadingBookList(data) {
    const id = data.data.data.userId;

    const [ readingBookList, setReadingBookList ] = useState([]);
    const [ searchParams ] = useSearchParams();
    const [ checkedList, setCheckedList ] = useState([]);
    const [ searchCondition, setSearchCondition ] = useState({
        userid: id,
        page: parseInt(searchParams.get("page"))
    });

    useEffect(() => {
        setSearchCondition(searchCondition => {
            return {
                ...searchCondition,
                page: parseInt(searchParams.get("page"))
            }
        })
    }, [searchParams])

    const getReadingBooksQuery = useQuery(
        ["getReadingBooksQuery", searchCondition],
        async () => await getReadingDataRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setReadingBookList(response.data.reading)
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    const getReadingBooksCountQuery = useQuery(
        ["getReadingBooksCountQuery", readingBookList],
        async () => await getReadingCountRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
            }
        }
    );

    const returnBookMutation = useMutation({
        mutationKey: "returnBookMutation",
        mutationFn: bookReturn,
        onSuccess: response => {
            getReadingBooksQuery.refetch();
        },
        onError: error => {

        }
    });

    const onCheckedElement = (checked, item) => {
        if(checked) {
            setCheckedList([...checkedList, item]);
        } else if (!checked) {
            setCheckedList(checkedList.filter(el => el !== item));
        }
    };
   
    const checkedReturns = () => {
        checkedList.forEach(loanId => {
            returnBookMutation.mutate(loanId);
        });
    }

    return (
        <>
            <div css={s.header}>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=0"}>전체(book_id)</Link>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=1"}>평점높은순</Link>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=2"}>평점낮은순</Link>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=3"}>리뷰많은순</Link>
                <Link css={s.filter} to={"/mypage/reading?page=1&option=4"}>리뷰적은순</Link>
                <button onClick={() => checkedReturns(checkedList)}>반납</button>
                
                
            </div>
            <div css={s.container}>
                {!getReadingBooksQuery.isLoading &&
                    readingBookList.length === 0 
                    ? <h1>대출 중인 도서가 없습니다.</h1>
                    : readingBookList.map(loan => 
                        <div css={s.data} key={loan.loanId}>
                            <div css={s.bookData}>
                                <div css={s.checkBox}>
                                    <input type="checkbox" onChange={e => {onCheckedElement(e.target.checked, loan.loanId);}}/>
                                </div>
                                <div css={s.bookImage}>
                                    <img src={loan.imageUrl} alt=""></img>
                                </div>
                                <div css={s.bookInfo}>
                                    <div css={s.bookName}>{loan.bookName}</div>
                                    <div css={s.authorName}>{loan.authorName}</div>
                                    <div css={s.publisherName}>{loan.publisherName}</div>
                                </div>
                                <div css={s.removeBox}>
                                    <IoMdClose size={"17"} color={"#adadad"}/>
                                </div>
                            </div>
                        </div>
                    )
                }
              
            </div>
            {!getReadingBooksCountQuery.isLoading &&
                <div css={s.page}>
                    <ReadingPageNumbers data={getReadingBooksCountQuery.data?.data}/>
                </div>
            }
        </>
    );
}

export default ReadingBookList;