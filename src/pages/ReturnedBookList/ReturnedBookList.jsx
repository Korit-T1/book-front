/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getReturnedCountRequest, getReturnedDataRequest } from "../../apis/api/mypage";
import * as s from "./style"
import { useQuery } from "react-query";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import WishPageNumbers2 from "../WishPageNumbers/WishPageNumbers2";
import { Link, useSearchParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReturnedPageNumbers from "../ReturnedPageNumbers/ReturnedPageNumbers";
import { FcOk } from "react-icons/fc";
import { IoWarning } from "react-icons/io5";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { FcCalendar } from "react-icons/fc";
import { TbClockCheck } from "react-icons/tb";






function ReturnedBookList(data) {
    const id = data.data.data.userId;

    const [ returnedBookList, setReturnedBookList ] = useState([]);
    const [ searchParams, setSearchParams ] = useSearchParams();

    const [ searchCondition, setSearchCondition ] = useState({
        userid: id,
        page: parseInt(searchParams.get("page")),
        filter: parseInt(searchParams.get("filter"))
    });

    useEffect(() => {
        setSearchCondition(searchCondition => {
            return {
                ...searchCondition,
                page: parseInt(searchParams.get("page")),
                filter: parseInt(searchParams.get("filter"))
            }
        })
    }, [searchParams])

    const getReturnedBooksQuery = useQuery(
        ["getReturnedBooksQuery", searchCondition],
        async () => await getReturnedDataRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
                setReturnedBookList(response.data.returned)
            },
            onError: error => {
                console.log("error");
            }
        }
    );

    const getReturnedBooksCountQuery = useQuery(
        ["getReturnedBooksCountQuery", returnedBookList],
        async () => await getReturnedCountRequest(searchCondition),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data);
            }
        }
    )

    return (
        <>
            <div css={s.header}>
                <Link css={s.filter} to={"/mypage/returned?page=1&filter=0"}>전체(loan_id)</Link>
                <Link css={s.filter} to={"/mypage/returned?page=1&filter=1"}>최근 날짜순(미완)</Link>
                <Link css={s.filter} to={"/mypage/returned?page=1&filter=2"}>오래된 날짜순(미완)</Link>
                <Link css={s.filter} to={"/mypage/returned?page=1&filter=3"}>연체되지 않음</Link>
                <Link css={s.filter} to={"/mypage/returned?page=1&filter=4"}>연체됨</Link>
                    {/* <button css={s.deleteBtn}>
                        <RiDeleteBin6Line />
                    </button> */}
            </div>
            <div css={s.container}>
                {!getReturnedBooksQuery.isLoading &&
                    returnedBookList.map(loan => 
                        <div css={s.data} key={loan.loanId}>
                            <div css={s.bookData}>
                                <div css={s.statusBox}>
                                    {
                                        loan.returnDate < loan.dueDate
                                        ? <HiMiniCheckCircle size={36} color="#4fd44d"/>
                                        : <IoWarning size={35} color="red"/>
                                    }
                                </div>
                                <div css={s.bookImage}>
                                    <img src={loan.imageUrl}></img>
                                </div>
                                <div css={s.bookInfo}>
                                    <div css={s.top}>
                                        <div css={s.bookName}>{loan.bookName}</div>
                                        <div css={s.authorName}>{loan.authorName}</div>
                                        <div css={s.publisherName}>{loan.publisherName}</div>
                                    </div>
                                    <div css={s.bot}>
                                        <div css={s.period}>
                                            <FcCalendar size={25}/>
                                            {loan.loanDate.substring(0, 10)} ~ {loan.dueDate.substring(0, 10)}
                                        </div>
                                        <div css={s.finish}>
                                            <TbClockCheck size={25} color="#3fcee1"/>
                                            {loan.returnDate.substring(0, 10)}
                                        </div>
                                    </div>
                                </div>
                                {/* <div css={s.removeBox}>
                                    <IoMdClose size={"17"} color={"#adadad"}/>
                                </div> */}
                            </div>
                        </div>
                    )
                }
            </div>
            {!getReturnedBooksCountQuery.isLoading &&
                <div css={s.page}>
                    <ReturnedPageNumbers data={getReturnedBooksCountQuery.data?.data}/>
                </div>
            }
        </>
    );
}

export default ReturnedBookList;