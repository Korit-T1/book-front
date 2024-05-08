/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getReturnedCountRequest, getReturnedDataRequest } from "../../apis/api/mypage";
import * as s from "./style"
import { useQuery } from "react-query";
import { Link, useSearchParams } from "react-router-dom";
import ReturnedPageNumbers from "../ReturnedPageNumbers/ReturnedPageNumbers";
import { IoWarning } from "react-icons/io5";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { FcCalendar } from "react-icons/fc";
import { FcClock } from "react-icons/fc";

function ReturnedBookList(data) {
    const id = data.data.data.userId;
    const [ searchParams ] = useSearchParams();
    const [ returnedBookList, setReturnedBookList ] = useState([]);
    
    const [ activeFilter, setActiveFilter ] = useState(1);

    const handleFilterClick = (filterID) => {
        if(filterID !== activeFilter) {
            setActiveFilter(filterID);
        }
    };
    
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
            <div css={s.header(activeFilter)}>
                <div>
                    <Link css={s.filter} to={"/mypage/returned?page=1&filter=1"}
                    onClick={() => handleFilterClick(1)}>최신 반납순(전체)</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/returned?page=1&filter=2"}
                    onClick={() => handleFilterClick(2)}>이전 반납순</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/returned?page=1&filter=3"}
                    onClick={() => handleFilterClick(3)}>연체되지 않음</Link>
                </div>
                <div>
                    <Link css={s.filter} to={"/mypage/returned?page=1&filter=4"}
                    onClick={() => handleFilterClick(4)}>연체됨</Link>
                </div>
            </div>
                    {/* <button css={s.deleteBtn}>
                        <RiDeleteBin6Line />
                    </button> */}
            <div css={s.container}>
                {!getReturnedBooksQuery.isLoading &&
                    returnedBookList.map(loan => 
                        <div css={s.data} key={loan.loanId}>
                            <div css={s.bookData}>
                                <div css={s.statusBox}>
                                    {
                                        loan.returnDate < loan.dueDate
                                        ? <HiMiniCheckCircle size={33} color="#4fd44d"/>
                                        : <IoWarning size={32} color="orange"/>
                                    }
                                </div>
                                <div css={s.bookImage}>
                                    <img src={loan.imageUrl} alt=""></img>
                                </div>
                                <div css={s.bookInfo}>
                                    <div css={s.top}>
                                        <div css={s.bookName}>{loan.bookName}</div>
                                        <div css={s.authorName}>{loan.authorName}</div>
                                        <div css={s.publisherName}>{loan.publisherName}</div>
                                    </div>
                                    <div css={s.bot(activeFilter)}>
                                        <div css={s.finish}>
                                            <FcClock size={22}/>
                                            <p>{loan.returnDate.substring(0, 10)}</p>
                                        </div>
                                        <div css={s.period}>
                                            <FcCalendar size={22}/>
                                            <p>{loan.loanDate.substring(0, 10)} ~ {loan.dueDate.substring(0, 10)}</p>
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